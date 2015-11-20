---
layout: main.html
title: Ya
---

# Logging with Seneca
This tutorial shows you how to control Seneca's logging
output. Clone the [main Seneca repository][] from github, and open the _doc/examples_
folder.



You'll use the Sales Tax example code. This code shows you how to
handle sales tax rules using Seneca. Take a look at
the [main README][] for
details. For this tutorial, you'll focus on the logging output.





Here's some code to calculate sales tax. It won't work, because you
haven't actually told Seneca how to do that yet.



```js
var seneca = require('seneca')()

seneca.act({cmd: 'salestax', net: 100}, function (err, result) {
  if (err) return console.error(err)
  console.log(result.total)
})
```



This invokes a Seneca action that, hopefully, calculates sales
tax. Arbitrarily you're using the property _cmd_ to indicate what
you want done (calculate sales tax), and _net_ is net price
before tax. The callback function returns the total price, and uses
the standard Node.js signature (error object as first parameter).



Let's try to run this code, even though it will fail. In the examples
folder, this code is saved in the file _sales-tax-error.js_. Run
this file using Node.js, and you'll see the following output:



```bash
$ node sales-tax-error.js
[-isodate-]	INFO	init	start
[-isodate-]	INFO	init	end
[-isodate-]	ERROR	fail	seneca/act_not_found
Seneca: act(args,cb):
action not found for args = {"cmd":"salestax","net":100}
{ [Error: ...] }
```


Seneca outputs some logging information so you can track what's going
on. The _INIT_ entries log the start and end of the initialization phase, when Seneca loads plugins.
The _ERROR_ entry tells you what went wrong: no action pattern matched the input args in the JSON document:
`{"cmd":"salestax","net":100}`. The code also prints the JavaScript Error object to the console. That's the line:
`if( err ) return console.error(err);`





You can fix this by defining an action:


```js
seneca.add( {cmd:'salestax'}, function(args,callback){
  var rate= 0.23
  var total = args.net * (1+rate)
  callback(null,{total:total})
})
```


The file _sales-tax.js_ in the examples folder contains the new code. Run it:


```bash
$ node sales-tax.js
[-isodate-]	INFO	init	start
[-isodate-]	INFO	init	end
123
```



Well that worked! 23% sales tax on a price of $100 gives a total of $123. Fabulous!

You might find that logging output annoying. Turn it off with:

```bash
$ node sales-tax.js --seneca.log.quiet
123
```



Or you might be a logging freak, in which case, here's the all-you-can-eat version:.



```bash
node sales-tax.js --seneca.log.print
[-isodate-]	INFO	init	start
... lots of init stuff ...
[-isodate-]	INFO	init	end
[-isodate-]	INFO	add	{cmd=salestax}
[-isodate-]	DEBUG	act	in	90xkee	{cmd=salestax,net=100}
[-isodate-]	DEBUG	act	out	90xkee	{total=123}
123
```



So you might be wondering how to get finer-grained logging output. Logging can be filtered on:

- _level_: DEBUG, INFO, WARN, ERROR, FATAL_
- _type_: short string code, examples: init, plugin, error, ..._
- _plugin_: the names of the plugin_
- _tag_: an identifier tag, used when you have multiple instances of the same plugin_

Let do that now:




```bash
node sales-tax.js --seneca.log=type:act
[-isodate-]	DEBUG	act	in	actid0	{cmd=salestax,net=100}
[-isodate-]	DEBUG	act	out	actid0	{total=123}
123
```



The command line argument _--seneca.log_ accepts a
comma-separated list of filters. The filter _type:act_ means only
output the log entries of type _act_. The _type_ is the third
field. The _act_ entries are very low level debugging logs
showing the operation of individual actions. The logs show the input
arguments, _in_, and the eventual output of the
action _out_. Because these can be separated in time, a random
action identifier (above: _actid0_) is generated for each action, so that you
can match up the input and output.




## Logging from Plugins


Let's turn the sales tax calculator into a plugin. This plugin accepts
two configuration options. You can specify the tax rate, and the
country which applies that rate (using two letter country codes).



Here's the client code, in the file _sales-tax-log.js_:


``` js
var seneca = require('seneca')()

seneca.use('sales-tax-plugin', {country: 'IE', rate: 0.23})
seneca.use('sales-tax-plugin', {country: 'UK', rate: 0.20})

seneca.ready(function (err) {
  if (err) return process.exit(!console.error(err))

  seneca.act({role: 'shop', cmd: 'salestax', country: 'IE', net: 100})
  seneca.act({role: 'shop', cmd: 'salestax', country: 'UK', net: 200})
  seneca.act({role: 'shop', cmd: 'salestax', country: 'UK', net: 300})
})
```


Since you're using log files to trace the commands, you can drop the
callback function from the _act_ method call.



Now you need a plugin - that's in the _sales-tax-plugin.js_ file:


``` js
module.exports = function (options) {
  var seneca = this
  var plugin = 'shop'
  var country = options.country || 'IE'
  var rate = options.rate || 0.23

  var calc = function (net) {
    return net * (1 + rate)
  }

  seneca.add({ role: plugin, cmd: 'salestax', country: country }, function (args, callback) {
    var total = calc(parseFloat(args.net, 10))
    seneca.log.debug('apply-tax', args.net, total, rate, country)
    callback(null, { total: total })
  })

  seneca.add({ role: plugin, cmd: 'salestax' }, function (args, callback) {
    var total = calc(parseFloat(args.net, 10))
    seneca.log.debug('apply-tax', args.net, total, rate, country)
    callback(null, { total: total })
  })

  seneca.act({ role: 'web', use: {
    prefix: 'shop/',
    pin: { role: 'shop', cmd: '*' },
    map: {
      salestax: { GET: true }
    }
  }})

  return {
    name: plugin
  }
}
```


The plugin creates a separate instance of the _salestax_ object
for each country and one instance that matches a call with no country. This object stores the country rate, country code,
and the number of times that sales tax for that country is calculated
(hit count).



This plugin follows the standard format for Seneca plugins. You provide a function that takes
a set of options and it's called in the Seneca context (eg the `this` object). Using the Seneca instance, you add some actions, and
return a plugin object:


``` js
module.exports = function (options) {
  var seneca = this

  seneca.add( { ... }, function (args, callback) {
  ...
  })

  return {
    name: 'plugin-name'
  }
}
```

Run this code, and filter the log to show only debug output from the sales-tax plugin:


```bash
$ node sales-tax-log.js --seneca.log=plugin:shop

[-isodate-]	DEBUG	plugin	sales-tax	IE	annv4h
net:	100	total:	123	tax:	{hits=1,rate=0.23,country=IE}

[-isodate-]	DEBUG	plugin	sales-tax	UK	3rkaa2
net:	200	total:	240	tax:	{hits=1,rate=0.2,country=UK}

[-isodate-]	DEBUG	plugin	sales-tax	UK	cwxcts
net:	300	total:	360	tax:	{hits=2,rate=0.2,country=UK}
```


These logs appear because the plugin calls _seneca.log.debug_ and provides the information about the sales tax calculation:


``` js
seneca.add({ role: plugin, cmd: 'salestax', country: country }, function (args, callback) {
  var total = calc(parseFloat(args.net, 10))
  seneca.log.debug('apply-tax', args.net, total, rate, country)
  callback(null, { total: total })
})
```


The object _seneca.log_ has convenience functions for the built-in log levels:

- seneca.log.debug
- seneca.log.info
- seneca.log.warn
- seneca.log.error
- seneca.log.fatal

These functions concatenate all their arguments into an array, which is the content of the log message. This array is then
formatted for display or storage by a handler function (which you can provide).
To minimize impact on performance, log data is only evaluated if a
matching log filter is active. The last argument to the logging
function can be a function (which should return an array of values), which again is only executed if a logging
filter matches.



Here's another example. This time, you filter on the _act_ log
entry type. This allows you to see the data passing into and out of
actions:


```bash
$ node sales-tax-log.js --seneca.log=type:act
[-isodate-]	DEBUG	act	in	uk74hd	{cmd=salestax,country=IE,net=100}
[-isodate-]	DEBUG	act	out	uk74hd	{total=123}
[-isodate-]	DEBUG	act	in	qv5sts	{cmd=salestax,country=UK,net=200}
[-isodate-]	DEBUG	act	out	qv5sts	{total=240}
[-isodate-]	DEBUG	act	in	7j9q4a	{cmd=salestax,country=UK,net=300}
[-isodate-]	DEBUG	act	out	7j9q4a	{total=360}
```


You can see two entries for each action, _in_
and _out_. Each entry shows the JSON document data being passed
into Seneca, and out of, Seneca. You can also see that each pair has the same action identifier, such as _uk74hd_.



Let's put this all together. You want to see the input and output
data of the actions, and anything the sale tax plugin decides to log:


```bash
$ node sales-tax-log.js --seneca.log=plugin:sales-tax --seneca.log=type:act

[-isodate-]	DEBUG	act	in	cpvycd	{cmd=salestax,country=IE,net=100}
[-isodate-]	DEBUG	plugin	sales-tax	IE	cpvycd
net:	100	total:	123	tax:	{hits=1,rate=0.23,country=IE}
[-isodate-]	DEBUG	act	out	cpvycd	{total=123}

[-isodate-]	DEBUG	act	in	tx5zj3	{cmd=salestax,country=UK,net=200}
[-isodate-]	DEBUG	plugin	sales-tax	UK	tx5zj3
net:	200	total:	240	tax:	{hits=1,rate=0.2,country=UK}
[-isodate-]	DEBUG	act	out	tx5zj3	{total=240}

[-isodate-]	DEBUG	act	in	8ikumj	{cmd=salestax,country=UK,net=300}
[-isodate-]	DEBUG	plugin	sales-tax	UK	8ikumj
net:	300	total:	360	tax:	{hits=2,rate=0.2,country=UK}
[-isodate-]	DEBUG	act	out	8ikumj	{total=360}
```


This shows the detailed processing of the sales tax calculation. The
action identifiers, which you can get using _args.actid$_ inside
an action function.You need to specify two _--seneca.log_
filters, as the type is _plugin_ for one, and _act_ for the
other.



The _tag_ filter can be used to focus on a specific, tagged, plugin instance. Here's how you look at UK sales tax operations only:


```bash
$ node sales-tax-log.js --seneca.log=plugin:sales-tax,tag:UK
[-isodate-]	DEBUG	plugin	sales-tax	UK	i2r7wn
net:	200	total:	240	tax:	{hits=1,rate=0.2,country=UK}
[-isodate-]	DEBUG	plugin	sales-tax	UK	8ir490
net:	300	total:	360	tax:	{hits=2,rate=0.2,country=UK}
```



## Live Logs in Your Browser

Console logs are fun, but live logs in your web browser are awesome! Seneca can do this too:



You'll need to create an app that provides a sales-tax calculation HTTP JSON API. Using the
_web_ plugin this is easy. This plugin accepts JSON documents from remote clients
over HTTP and submits them to the local Seneca instance.


Here the code, in _sales-tax-app.js_, that sets up the app:

```js
var connect = require('connect')
var connect_query = require('connect-query')
var body_parser = require('body-parser')

var seneca = require('seneca')()

seneca.use('sales-tax-plugin', {country: 'IE', rate: 0.23})
seneca.use('sales-tax-plugin', {country: 'UK', rate: 0.20})
seneca.use('sales-tax-plugin', {country: '*', rate: 0.25})

var app = connect()

app.use(connect_query())
app.use(body_parser.json())
app.use(seneca.export('web'))

app.listen(3000)

seneca.use('data-editor')
seneca.use('admin', {server: app, local: true})
```

The script sets up a simple HTTP server, using the
Node.js _connect_ module. The _web_ plugin is preloaded by Seneca and works locally without any configuration,
so all you have to do is hook it as a [connect][]
or [express][] middleware, or directly
with the standard HTTP API:


``` js
var app = connect()
app.use(seneca.export('web'))
app.listen(3000)
```

The _admin_ and _data-editor_ plugins together provide a web administration interface for
Seneca. It uses web sockets, so you need to provide a reference to the
http server object in the plugin options. To expose the
administration web interface locally without requiring a password,
use the _local:true_ option:


``` js
seneca.use('data-editor')
seneca.use('admin', {server: app, local: true})
```


Run this app, and open [localhost:3000/admin][]. You can
still use command line logging - you can have multiple separate logging channels.


```bash
$ node sales-tax-app.js --seneca.log=plugin:shop
```



The administration interface let's you set filtering options. They work the same way as the command line options.
There's nothing to log yet, so let's generate some sales tax calculations!




The file _sales-tax-app-client.js_ contains the client
code. We're using the standard Node HTTP client here:


``` js
var http = require('http')

http.get({
  hostname: 'localhost',
  port: 3000,
  path: '/shop/salestax?net=100&country=UK'
}, function (res) {
  res.on('data', function (chunk) {
    console.log(JSON.parse(chunk.toString()))
  })
})
```

But you can also test it with cUrl:

```bash
$ curl -S 'http://localhost:3000/shop/salestax?net=100&country=UK'
$ {"total":120}
```

The sales tax operations code is as before. This is the key idea
behind Seneca - your business logic code stays the same, but you can
move around and reconfigure where it happens without worrying about
refactoring your code.



With the app up and running, run the client: you'll see log entries in the web interface.



## Log Handlers


You can define your own log handlers programmatically when you setup Seneca. The file
_sales-tax-log-handler.js_ shows you how to do this:


``` js
var seneca = require('seneca')

// need this to get a reference to seneca.loghandler
seneca = seneca({
  log: {
    map: [
      {plugin: 'shop', handler: 'print'},
      {level: 'all', handler: seneca.loghandler.file('shop.log')}
    ]
  }
})

seneca.use('sales-tax-plugin', {rate: 0.23})

seneca.ready(function (err) {
  if (err) return process.exit(!console.error(err))

  seneca.act({role: 'shop', cmd: 'salestax', net: 100})
  seneca.act({role: 'shop', cmd: 'salestax', net: 200})
  seneca.act({role: 'shop', cmd: 'salestax', net: 300})
})
```


Running this script will output log entries both to the console (only where plugin is "shop" ), and
to a log file _shop.log_, which gets everything. In production you mostly just want to output to the console and use
the operating system tools for file redirection. The file handler is mostly for creating special log files.



The logging map allows you to send log entries to multiple locations based on the filters you specify. You can still use the
command line argument _--seneca.log=..._ to add further filters.


The built-in handlers are:

- _seneca.loghandler.print_: logs to the console
- _seneca.loghandler.file(filepath)_: logs to a file
- _seneca.loghandler.stream(WriteStream)_: logs to a stream
- _seneca.loghandler.emitter(EventEmitter)_: logs using events


You can write your own handler. It's just a function that takes the
log entry as first argument. The log entry is an array of values.



Here's an example using the [LogEntries.com][] service. This is cloud logging service that
stores your logs and makes them searchable. I wrote their Node.js API module :) - `$ npm install node-logentries`.
This example is in the file _sales-tax-logentries.js_:


``` js
var logentries = require('node-logentries')

var log = logentries.logger({
  token: 'YOUR_TOKEN',

  // redefine log levels to match the ones seneca uses
  levels: {debug: 0, info: 1, warn: 2, error: 3, fatal: 4}
})

var seneca = require('seneca')({
  log: {
    map: [
      {level: 'all', handler: function () {
        log.log(arguments[1], Array.prototype.join.call(arguments, '\t'))
      }}
    ]
  }
})

seneca.use('sales-tax-plugin', {rate: 0.23})

seneca.ready(function (err) {
  if (err) return process.exit(!console.error(err))

  seneca.act({role: 'shop', cmd: 'salestax', net: 100})
  seneca.act({role: 'shop', cmd: 'salestax', net: 200})
  seneca.act({role: 'shop', cmd: 'salestax', net: 300})
})
```


You'll need to register a LogEntries.com account and get a token for this to work.



You can use custom handler functions to send logs anywhere you want, and process them anyway you need.



## One More Thing ...



Log filters are dynamic. You can add new ones at runtime using the _seneca.logroute_ method:


``` js
seneca.logroute( {level:'all', handler:seneca.handler.print} )
```


If you omit the handler, any previous filter is removed. If you add
multiple handlers for the same filter, the logs will be sent to all
the handlers.This feature enables the administration web site to
dynamically modify the filters at runtime.




That's all folks! Corrections and comments: please tweet [@senecajs][].

[main Seneca repository]: http://github.com/senecajs/seneca
[main README]: https://github.com/senecajs/seneca
[connect]: http://www.senchalabs.org/connect/
[express]: http://expressjs.com
[localhost:3000/admin]: localhost:3000/admin
[LogEntries.com]: http://logentries.com
[@senecajs]: https://twitter.com/senecajs
