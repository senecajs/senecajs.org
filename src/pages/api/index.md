---
layout: main.html
---

# API reference
The Seneca API is pretty *tiny*. We try hard to keep any non-essential
functionality out of core.  Instead, we push it out to [plugins][]. The core API
is documented below. If you have any further questions, [get in touch][]. We
love to talk!

## use(name [, options])
- __name:__ - `string`: name of the plugin. Used to build the argument to the
  require function.
- __options:__ - `object`: options for the plugin. Contents depend on plugin.

## use(module [, options])
- __module:__ - `function`: function to execute to initialize the plugin
- __options:__ - `object`: options for the plugin. Contents depend on plugin.

The use method *loads and registers plugins*. You can refer directly to built-in
plugins by name; for example, [`echo`](https://github.com/rjrodger/seneca-echo),
[`settings`](https://github.com/rjrodger/seneca-settings),
[`mem-store`](https://github.com/senecajs/seneca-mem-store).

After a plugin is installed, you can refer to it by the module name.

For convenience, you can omit the `seneca-` prefix on standard plugins.

```javascript
seneca.use('mem-store', {
  web: {
    dump: true
  }
})
```

___Example: registering the built-in mem-store plugin with custom options___

The second argument to the `use` method is an `options` object, which contains
configuration properties specific to the plugin. Refer to the documentation for
each plugin to find out how to use them. If you're using the options plugin,
properties in the options argument override externally loaded options.


## ready(callback)
- __ready__ - `function (err)`: callback to execute after all plugins initialize.
  If an error occurs during the startup process then the callback function will
  have an Error instance passed to it.

This method takes a callback function as an argument. You should complete the
initialization of other parts of your app, such as setting up HTTP listeners,
inside this callback.

```javascript
seneca.use('mongo-store', {...})

seneca.ready(function (err) {
  // handle err / start inserting data.
})
```

___Example: waiting for the database connection before inserting data___

You can call `ready` more than once. If you need to register additional plugins
dynamically (this is perfectly fine), you can call `ready` again to wait for the
new plugins to initialize. Seneca also emits a `'ready'` event, which you can
also use:

```javascript
seneca.on('ready', function (err) {...})
```

___Example: adding callback for the ready event, emitted by Seneca___

They both achieve the same result. It's a matter of preference which you use.

## add(pattern [, paramspec], action)
- __pattern__ - `object` or `string`: matches the pattern specification.
- __paramspec__ - `object`: matches the parameter specification.
- __action__ - `function(...)`: matches the action signature.

This method adds an **action** to the Seneca instance.  You provide a
*key/value pair* pattern that Seneca matches against objects that are submitted
using the `add` method. When an object is submitted, Seneca checks the object's
top-level properties in alphabetical order to see if there is a matching action.

The `action` parameter is a function that accepts two arguments. The first is
the pattern object that was submitted to `act()` below. The second is a
*callback* that you must call once your action has completed its work. The
callback has the standard node.js signature: `function (err, result)`. The
callback must be executed, especially to report errors. The action result is
optional; you do not to supply one if it does not make sense for your action.
However, if you do provide a result it needs to be an object or array, unless
you have disabled `strict` mode.

```javascript
seneca.add({ foo:'bar' }, function (args, cb) {
  cb(null, { zoo: args.zoo })
})

seneca.act({ foo:'bar', zoo:'qaz' }, function (err, out) {
  console.log(out.zoo)
})
```

___Example: defining an action___

You can define actions any time, anywhere. They don't need to be associated with
a plugin. Actions defined inside a plugin do get some logging metadata, however,
so they can be easier to debug.  The key usefulness of a plugin, though, is the
ability to ship functionality and reuse it in other services.

## act(input [, callback])
- __input:__ - `object`: matches enumerable keys against previously added action
  patterns.  Once a match is discovered, the entire `input` object is passed to
  the `action` handler established in the related `add` function.
- __callback:__ - `function`: any errors are passed as the first argument. If a
  result is provided by the `action` handler then it will be passed as the
  second argument.

## make(entity-canon [, properties])
- __entity-canon__ - `string`
- __properties__ - `object`: optional, default data for the new entity.

This method creates new entities using the built-in [Data entity][] functionality.
The `entity-canon` string is documented in [Entity canon format][]. It is
essentially a namespaced way to refer to the same type or shape of object for
storage purposes:

```javascript
var stockItem = seneca.make('stock-item')
stockItem.price = 1.22
stockItem.quantity = 22
```

A set of default or pre-set options can be passed to the above method to create
a pre-populated object:

```javascript
var stockItem = seneca.make('stock-item', {
  stockItem.price = 0.00
  stockItem.quantity = 0
})

```

## export(name)
- __name:__ string, reference to an object provided by a plugin.

## pin(pin-pattern)
- __pin-pattern:__ object or string.
  <!--[pin pattern format](/desc-pin-pattern-format)-->

## log._level_([entry, ..])
- __entry:__ JavaScript value, converted to string.

## close([done])
- __done:__ function, optional, callback with signature function(err), called
  after all close actions are complete.

## client(options)
- __options:__ object, transport options.

## listen(options)
- __options__  - `object`: transport options.

The listen method tells the underlying transport to start listening for traffic.
This method is usually called last, after you have finished any setup and have
loaded all plugins. The built-in transport supports HTTP and TCP. The default
port is set to `10101`, while the default transport type is HTTP.

```javascript
seneca.ready(function (err) {
  if (err) return

  seneca.listen()
})
```

___Example: calling listen on port 10101 over http___

The options object for this method allows you to set the `type`, `host` and `port`
settings for the default transport. The exact options that you need vary by
transport plugin. If you are using a custom transport, consult its documentation
for information on the available options.


```javascript
seneca.ready(function (err) {
  if (err) return

  seneca.listen({
    type: 'tcp',
    host: '192.168.1.200',
    port: '4050'
  })
})
```

___Example: calling listen on a custom host and port over tcp___

Seneca allows multiple transport types to be run simultaneously over different
ports. This gives clients maximum flexibility with minimal setup.

# Plugin Interface

Each plugin has the option to define an action with the pattern `init: name`. If
this action is defined, it is called in series and in order for any plugins that
define it. You can ensure that database connections and other external
dependencies are in place before using them. **Just a reminder:** the order of
plugin registration is significant.

[plugins]: /plugins/
[get in touch]: https://gitter.im/senecajs/seneca
[Data entity]: /tutorials/understanding-data-entities.html
[Entity canon format]:
