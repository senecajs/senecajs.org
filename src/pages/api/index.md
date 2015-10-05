---
layout: main.html
---

# API reference
The Seneca API is pretty tiny. We try hard to keep any non-essential functionality out of core. Instead, we push it
out to plugins. The core API is documented below. If you have any further questions, [get in touch](). We
love to talk!

## use (name [, options])
- __name:__ - `string`: name of the plugin. Used to build the argument to the require function.
- __options:__ - `object`: options for the plugin. Contents depend on plugin.

The use method loads and registers plugins. You can refer directly to built-in plugins by name; for example,
echo, options, mem-store. External plugins need to be installed with npm install first. You can then 
refer to them by their npm module name. For convenience, you can omit the seneca- prefix on standard plugins.

``` js
seneca.use('mem-store', {
  web:{
    dump:true
  }
})
```

___Example: registering the built-in mem-store plugin with custom options___

The second argument to the use method is an options object containing configuration properties specific to the plugin. Refer to the documentation for each plugin to find out how to use them. If you're using the options
plugin, properties in the options argument override externally loaded options.

## ready (ready)
- __ready__ - `function(err)`: callback to execute after all plugins initialize.

Each plugin has the option to define an action with the pattern init:name. If this action is defined, it is
called in series and in order for any plugins that define it. You can ensure that database connections and other
external dependencies are in place before using them. Just a reminder: the order of plugin registration is
significant.

This method takes a callback function as an argument. You would normally complete the initialization of other parts of your app, such as setting up express, inside this callback.

``` js
seneca.use('mongo-store', {...})

seneca.ready(function (err) {
  // handle err / start inserting data.
})
```

___Example: waiting for the database connection before inserting data___

You can call ready more than once. If you need to register additional plugins dynamically (this is perfectly
fine), you can call ready again to wait for the new plugins to initialize. Seneca also emits a 'ready' event,
which you can use instead of this function:

``` js
seneca.on('ready', function (err) {...})
```

___Example: adding callback for the ready event, emitted by Seneca___

They both achieve the same result. It's a matter of preference which you use.

## add (pattern [, paramspec], action)
- __pattern__ - `object` or `string`: matches the pattern specification.
- __paramspec__ - `object`: matches the parameter specification.
- __action__ - `function(...)`: matches the action signature.

This method adds an action to the Seneca instance. You provide a key/value pair pattern that Seneca matches against objects that are submitted using the add method. When an object is submitted, Seneca checks the object's top-level
properties in alphabetical order to see if there is a matching action.

The action is a function that accepts two arguments. The first is the object that was submitted. The second
is a callback that you should call once your action has completed its work. The callback has the standard
signature function( err, result ). The callback must always be called, especially to report errors. The action
result is optional; you do not have to supply one if it does not make sense for your action.

``` js
seneca.add({foo:'bar'}, function (args, done) {
  done( null,{zoo:args.zoo})
})

seneca.act({foo:'bar', zoo:'qaz'}, function (err, out) {
  console.log( out.zoo )
})
```

___Example: defining an action___

You can define actions any time, anywhere. They don't need to be associated with a plugin. Actions defined
inside a plugin do get some logging metadata, however, so they're easier to manage in the long run.

## act (input [, callback])
- __input:__ object. Matches properties against previously added action patterns.
- __callback:__ function. Optional (<a href="desc-result-signature">result signature</a>).

## make (entity-canon [, properties])
- __entity-canon__ - `string`: see [Entity canon](/entity-canon-format) for information.
- __properties__ - `object`: optional, default data for the new entity.

This method creates new entities using the built-in [Data entity]() functionality. The `entity-canon` string
is documented in [Entity canon format](). It is essentially a namespaced way to refer to the same type or
shape of object for storage purposes:

```js
var stockItem = seneca.make('stock-item')
stockItem.price = 1.22
stockItem.quantity = 22
```

A set of default or pre-set options can be passed to the above method to create a pre-populated object:

```js
var stockItem = seneca.make('stock-item', {
  stockItem.price = 0.00  
  stockItem.quantity = 0
})

```

## export (name)
- __name:__ string, reference to an object provided by a plugin. 

## pin (pin-pattern)
- __pin-pattern:__ object or string (<a href="desc-pin-pattern-format">pin pattern format</a>).

## log._level_([entry, ..])
- __entry:__ JavaScript value, converted to string.

## close ([done])
- __done:__ function, optional, callback with signature function(err), called after all close actions are complete.

## client (options)
- __options:__ object, transport options.

## listen (options)
- __options__  - `object`: transport options.

The listen method tells the underlying transport to start listening for traffic. This method is usually called last,
after you have finished any setup and have loaded all plugins. The built-in transport supports HTTP and TCP. The
default port is set to `10101`, while the default transit type is HTTP.

```js
seneca.ready(function (err) {
  if (err) return

  seneca.listen()
})
```

___Example: calling listen on port 10101 over http___

The options object for this method allows you to set the `type`, `host` and `port` settings for the default transport. The exact options that you need vary by transport plugin. If you are using a custom transport, consult its documentation for information on the available options.

```js
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

Seneca allows multiple transport types to be run simultaneously over different ports. This gives clients maximum flexibility with minimal setup.
