Your Seneca microservice will rely on a set of plugins, both [community
plugins](https://github.com/senecajs?utf8=%E2%9C%93&q=seneca-*&type=source&language=), and your own, to provide the actions that respond to
messages. All of the plugins need to load and initialize
successfully. If they don't, your microservice will be in an
undefined state. The best thing to do in this case is bail out and
die.

For example, if you are using the
[`seneca-mongo-store`](http://github.com/senecajs/seneca-mongo-store)
plugin, and the plugin cannot connect to the database, then your
microservice can't do any work. Maybe the failure is transient. In
that case, you want the microservice to die and restart. Your
container system (Docker, Kubernetes, etc) will start a new instance
of your microservice, but needs the old one to die first.

When
[Seneca loads a plugin](/docs/tutorials/how-to-write-a-plugin.html),
it is first _defined_, then _initialized_. Plugin definition happens
inside the plugin definition function, where you add your patterns:

```js
// file: foo.js
// The string `foo` will be the name of the plugin.
module.exports = function foo(options) {

  // `this` === context Seneca instance with fatal$ === true
  // the pattern is `a:1`
  this.add('a:1', function (msg, reply) {
    reply({x: msg.x})
  }) 
}
```

A failure of any sort here is fatal, as it means the plugin is not
fully defined. Some patterns could be missing. Plugin definition is
_synchronous_.

Plugin initialization happens inside the `init:<plugin-name>`
action. Add this inside your plugin definition:

```js
// file: foo.js
// The function `foo` will be the name of the plugin.
module.exports = function foo(options) {

  this.add('a:1', function (msg, reply) {
    reply({x: msg.x})
  }) 

  this.add('init:foo', function (msg, reply) {

    // do something asynchronous
    database_setup(options, function(err) {

      // call reply to indicate that the plugin is initialized,
      // no need for response data
      reply(err)
    })
  })
}
```

Plugin initialization is optional, and only necessary if you need to
perform an asynchronous operation such as interacting with the outside
world. Failures in initialization are also fatal.

The [`seneca.ready`](/api/#method-ready) callback is not called until
all plugins are defined and initialized.

To make an action fatal when it fails, use the `fatal$:true` directive
as part of your message. This is what Seneca itself does for plugin
definition (which is run inside an internally created one-off action)
and initialization. The `fatal$` directive is set as a fixed argument
of any messages sent by the plugin Seneca context.

There are times when you want to avoid this behavior. One way, when
debugging, is to set the option `debug.undead = true`:

```
var Seneca = require('seneca')
var seneca = Seneca({debug: {undead: true}})
```

Another is to create a new Seneca instance that does not have a fixed
`fatal$ = true` argument:

```
var fresh_seneca = this.root.delegate()
```

This is necessary for plugins that will send messages once Seneca is
ready, such as the transport plugins.

