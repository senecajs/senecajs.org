---
layout: content.html
---

# Unit Testing

Seneca can be unit tested using any of the Node.js unit testing
frameworks. To make unit testing easier, you should separate your
action implementations and your service definitions. Your business
logic, the functionality that your service provides, should be placed
into a plugin. This plugin should define the set of action patterns
that implement the business funtionality.

Separately, your service definition is provided by a short script that
loads the plugin into a Seneca instance and listens for messages on
the network. This is the recommended structure for your services.

Using this structure, you can easily unit test your business logic
because you can load your plugin directly into a locally defined
Seneca instance in the unit test without needing to worry about
network communications. This also lets you define mock messages that
the plugin might need.

Let's build a simple color name to hex conversion service to
demonstrate this approach.

## Contents

- [The `color` plugin](#color-plugin)
- [The `color` service](#color-service)
- [Seneca test mode](#seneca-test-mode)
- [A Seneca unit test](#seneca-unit-test)





<a name="color-plugin"></a>
## The `color` plugin

Here is the code for the plugin:

``` js
// file: color.js
module.exports = function color (options) {

  var hexmap = {
    red:   'FF0000',
    green: '00FF00',
    blue:  '0000FF',
    black: '000000'
  }

  this.add('role:color,to:hex', function (msg, reply) {
    var hex = hexmap[msg.color] || hexmap.black
    reply(null, {hex: hex})
  })
}
```

Th plugin converts a limited set of human readable color names to
their hex values. It defines a single pattern
`role:color,to:hex`. This is the pattern that you need to unit test.


<a name="color-service"></a>
## The `color` service

And here is the code for the color service that exposes the color
plugin patterns:

``` js
// file: color-service.js
// run with: node color-service.js
require('seneca')()
  .use('color')
  .listen(9000)
```

To validate that the service is working, you can send it a message:

```sh
$ curl 'http://localhost:9000/act?role=color&to=hex&color=red'
{"hex":"FF0000"}
```

This is manual testing and is not the objective here! Instead we want
to be able to write unit tests that automate testing of the business
logic.

The unit tests will *not* use the service. This is deliberate, as unit
tests should not have network dependencies. The service code is
included here to give you a more complere picture of how things fit
together.

<a name="seneca-test-mode"></a>
## Seneca test mode

Seneca assumes that it will be running as a microservice. This default
mode is not convenient for unit testing. Seneca can be placed into a
unit testing mode by calling the `.test` method. Pass the unit test
callback to this method as the first argument to report errors
properly. This ensures that even errors inside action callbacks are
captured.

The unit test mode also captures additional strack tracking
information, showing not only the location of the exception, but also
the location in calling code that the current action was called from.

Seneca is placed into unit testing mode like so:

```js
test('name-of-test', function (callback) {
  var seneca = Seneca().test(callback)
  ...
})
```

Use the `Seneca` module to create a new Seneca instance for each unit
test.

In general, you'll want to write a function to create the test
instance so that you only have to setup common options once. This also
lets you load the code to test, and to define any global mock
messages.

Let's start testing the color plugin. First, create the test instance:

```
// file: test/color-test.js
function test_seneca (fin) {
  return Seneca({log: 'test'})

  // activate unit test mode. Errors provide additional stack tracing context.
  // The fin callback is called when an error occurs anywhere.
    .test(fin)

  // Load the microservice business logic
    .use(require('../color'))
}
```

This code is placed inside a file called `color-test.js` inside a
`test` folder. Full source code is available in the
[`code/unit-testing`](https://github.com/senecajs/senecajs.org/blob/master/code/unit-testing)
folder. The test callback is named `fin` as a convention to
distinguish it from other callbacks in the unit test code.


<a name="seneca-unit-test"></a>
## A Seneca unit test


TODO





