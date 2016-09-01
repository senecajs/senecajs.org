---
layout: content.html
---

# API reference
The Seneca API is pretty tiny. We try hard to keep any non-essential functionality out of
core. Instead, we push it out to plugins. The core API is documented below. If you have
any further questions, get in touch. We love to talk!

## Table of Contents
- [Seneca()](#seneca-options-this)
- [.close()](#close-done-void)
- [.act()](#act-msg-payload-reply)
- [.add()](#add-pattern-spec-handler-this)
- [.has()](#has-pattern-boolean)
- [.sub()](#sub-pattern-handler)
- [.listen()](#listen-options-this)
- [.client()](#client-options-this)
- [.use()](#use-plugin-options-this)
- [.ready()](#ready-callback-void)
- [.export()](#export-name-this)
- [.log.level()](#log-level-entry)
- [.decorate()](#decorate-name-handler)

<hr>

## Seneca([options]) : this
Creates a new instance of Seneca with the provided options.

### Params

#### options - object
Optional. The options you wish to provide to the instance of seneca being created. When
no options are provided the defaults in the usage section below are provided.

### Usage

##### Requiring an an instance of Seneca with various options
```js
var Seneca = require('seneca')

var seneca = Seneca({
  tag: 'some-name',
  timeout: 500,
  log: 'silent',
  debug: {
    undead: false,
    short_logs: false,
  },
  strict: {
    result: true,
    add: false,
    find: true,
    maxloop: 11
  }
})
```

##### Requiring multiple instances of Seneca
```js
var Seneca = require('seneca')
var instanceA = Seneca()
var instanceB = Seneca()
```

##### Using require and chain
```js
require('seneca')
  .use('entity')
  .client({pin: 'cmd:start', port: 4300})
  .listen()
```

### Notes

- Many of Seneca's methods are _chainable_. See each methods _Usage_ and _Notes_.
- The default for `options.tag` is `'-'`.
- The default for `options.timeout` is ``
- The default for `options.log` is ``

<hr>

## close([done]) : void
The close method gracefully closes Seneca. An optional callback can be provided to check
for completion and handle any errors that occur during gracefully closing.

### Params

#### done - function(err)
A callback that is fired when `.close` is complete. If an error occurred during close it
will be provided to you in the callback you supply.

### Usage

##### Closing an instance of seneca
```js
var seneca = require('seneca')

seneca.close((err) => {
  if (err) console.log(err)
  else console.log('close complete!')
})
```

### Notes
...

<hr>

## act(msg [,payload] [, reply]) : this
The `.act` method sends a given message to any interested handlers. The message sent is
'matched' by 1 or more handlers and a reply may or may not be returned. A message is
processed is based on the transport mechanism used to send it.

### Params

#### msg - object | string
The message you wish to send over seneca's transport pipeline. Alternatively, if using
Jsonic, this param will be merged with the `payload` param to form the complete message.

#### payload - object
Optional. An object payload to handle cases where Jsonic strings are used.

#### reply - function(err, reply)
Optional. When an act is fired the handler can optionally respond. To handle this reply
provide a callback function with the signature `function (err, reply)`. If no callback
is provided Seneca will simply discard the reply.

### Usage

##### Sending a message to a handler that doesn't respond
```js
seneca.act(data)
```

##### Sending a message to a handler that sends a reply
```js
seneca.act(data, (err, reply) => {
  if (err) console.log(err)
  else console.log(reply)
})
```

##### Using JSonic strings
```js
seneca.act('role:store,cmd:update', data)

seneca.act('role:store,cmd:save', data, (err, reply) => {
  if (err) console.log(err)
  else console.log(reply)
})
```

### Notes
...

<hr>

## add(pattern [, spec], handler) : this
The `.add` method allows handlers to be added to an instance of Seneca for the purposes
of processing messages. Messages are matched against the `pattern` param and optionally
validated using the `spec` param. Handlers must call done but do not have to provide a
return value if one does not make sense.

### Params

#### pattern - object | string
The pattern to filter the handler to; only messages which match the pattern provided will
be passed to the handler. The pattern can be a plain object or JSonic string.

#### spec - object
Optional. A parambulator spec object for validating the matched message. Messages that do
not match are rejected with an error returned to the caller if applicable.

#### handler - function (msg, done)
The handler that processes the message. Messages are provided as plain objects via the
`msg` param. When processing is complete or errors the `done` callback can be used to
complete execution. The signature for `done` is `function (err, reply)`.

### Usage
...

### Notes
...

<hr>

## has(pattern) : boolean
The `.has` method will return a true or false depending on wether or not the provided
pattern has a matching handler. Has will also emit true if a pattern has been pinned
via a `.client()`.

### Params

#### pattern - object | string
The pattern to verify against. The input can be either a plain Javascript object or a
JSonic string. It does not matter if a string or object was used when adding the handler.

### Usage

##### Check for existing handlers

```js
'use strict'

var seneca = require('seneca')()

seneca.add('some:pattern', (msg, done) => {done()})

console.log(seneca.has('some:pattern'))
console.log(seneca.has({some:'pattern'}))

// Output:
// true
// true
```

##### Checking for client pins

```js
'use strict'

var seneca = require('seneca')()

seneca.client({pin: 'some:pin'})

console.log(seneca.has('some:pin'))

// Output:
// true

```

### Notes

- Patterns pinned via `.listen` will not match to true, since they are used as a filter.
- A response of `true` does not ensure a successful call, only that a handler is known.

<hr>

## sub(pattern, handler)
The `.sub` method allows the ability to listen for any messages that are emitted in the
local Seneca instance. It provides a way to listen for the message sent, not the result
of that message.

### Params

#### pattern - object | string
The pattern to match against for the provided handler.

#### handler - function (err, msg)
...

### Usage
...

### Notes
...

<hr>

## listen(options): this
The `.listen` methods creates a listener that can handle messages external from external
sources. By default HTTP is used but both transport and related options can be set via
the `options` param.

### Params

#### options - object
The options used to decide which underlying transport to use. Additional options in this
object will be passed on to the chosen transport.


### Usage
...

### Notes
...

<hr>

## client(options): this
The `.client` methods creates a client that can send messages to external sources. By
default HTTP is used. Transport type and other options can be set by passing an object
via the `options` param.

### Params

#### options - object
The options used to decide which underlying transport to use. Additional options in this
object will be passed on to the chosen transport.

### Usage

##### Mimicking default options for client
```js
seneca.listen({
  type:
})
```

##### Using pins to filter outbound messages to a given client
```js
seneca
  .listen({type: 'tcp', port: '3060', pin: 'role:supplier'})
  .listen({type: 'http', port: '3060', pin: 'role:supplier'})
```

### Notes

- The listen method is _chainable_.
- The default for `options.type` is `HTTP`.
- The default for `options.port` is `101010`.
- Pins via `options.pin` can be a JSonic string or plain object.

<hr>

## use(plugin [, options]) : this
The `.use()` method provides the ability to load plugins into seneca. Plugins are the
primary method of composition in Seneca and should be used liberally.

### Params

#### plugin - string | object
...

#### options - object
...

### Usage
...

### Notes
...

<hr>

## ready(callback)
The `.ready()` method fires the provided callback every time a set of plugins has been
loaded. Ready will only fire if one or more plugins are loaded. Multiple calls are
supported.

### Params

#### callback - function(err)
The callback to execute when a set of plugins have been loaded. Any errors raised during
plugin loading will be reported to the callback via the `err` param.


### Usage

##### Waiting on plugins to load
```js
'use strict'

var seneca = require('seneca')()

function a () {console.log('plugin 1')}
function b () {console.log('plugin 2')}

seneca.use(a)
seneca.use(b)

seneca.ready(function (err) {
  if (err) process.exit(1)
  console.log('ready fired')
})
```

##### Nested waiting and loading
```js
'use strict'

var seneca = require('seneca')()

function a () {console.log('plugin 1')}
function b () {console.log('plugin 2')}
function c () {console.log('plugin 3')}
function d () {console.log('plugin 4')}

seneca.use(a)
seneca.use(b)

seneca.ready((err) => {
  if (err) process.exit(1)
  console.log('ready 1 fired')

  seneca.use(c)
  seneca.use(d)

  seneca.ready (function (err) {
    if (err) process.exit(1)
    console.log('ready 2 fired')
  })
})
```

### Notes

- Usage of `ready` inside of plugins is not considered supported
- Fires once per set of loaded plugins, not once per plugin
- Multiple `ready` methods will be fired in the order they are encountered

<hr>

## export(name) : this
The `export` method provides the ability for plugins to export named functions or objects
for use in later loaded plugins or in your own implementations.

### Params

#### name - string
The name of the object or function you wish to export.

### Usage
...

<hr>

## log.level([entry, ..])
The `log.x` method set provides the ability to log.

- Supported log levels are: `debug`, `info`, `warn`, `error`, `fatal`
- Logging suports level+ syntax: info+ means info and above: info, warn, error, fatal

Convenience shortcut log levels:
- `test` represents the `error+` level,
- `silent` sets log level to `none`.

The default logging level is `info+`.

### Params

#### entry - string or object or array
The data to be logged.

### Usage

##### Configuring a `warn` log level in Seneca
```js
var seneca = Seneca({
  log: { level: 'warn+' }
})
seneca.log.debug('debug log level')
seneca.log.info('info log level')
seneca.log.warn('warn log level')
seneca.log.error('error log level')
seneca.log.fatal('fatal log level')

// Output:
// ["warn log level"]
// ["error log level"]
// ["fatal log level"]

```

##### Configuring a `test` log level in Seneca
```js
var seneca = Seneca({
  log: 'test'
})
```

<hr>

## decorate(name, handler)
The `decorate` method provides the ability to decorate Seneca with functions or objects
in a safe manner. Trying to register a name that is already reserved will throw.

### Params

#### name - string
The name you wish to call the decorated function or object.

#### handler - object | function (...)
The handler the decorate seneca with. This can be a function or an object.

### Usage

##### Using decoration to extend Seneca
```js
var seneca = require('seneca')

seneca.decorate('stamp', (pattern) => {
  console.log(Date.now(), pattern)
})

seneca.stamp('role:echo')
```

##### Abstracting decorations into plugins
```js
var seneca = require('seneca')()

function plugin (opts) {
  var seneca = this

  seneca.decorate('stamp', (pattern) => {
    console.log(Date.now(), pattern)
  })

  return {name: 'timestamper'}
}

seneca
  .use(plugin)
  .ready((err) => {
    seneca.stamp('role:echo')
  })
```

### Notes
- Decoration attempts will throw if the name provided is already in use.
