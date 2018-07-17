
When a message pattern is matched, it triggers execution of the
associated action function that you have defined. Your action function
is passed three parameters:

* `msg`: the message that triggered this action.
* `reply`: a callback function that you can use to reply to the message.
* `meta`: a meta data object for tracing and debugging (normally ignored).

Thus a typical action definition looks like so:

```
const Seneca = require('seneca')

const seneca = Seneca()

seneca
  .add({a: 1}, function(msg, reply) {
    reply(null, {x: msg.y})
  })
```

And to use it, you call:

```
seneca.act({a: 1, y: 2}, function(err, out) {
  console.log(err) // prints null, as there was no error
  console.log(out) // prints {x: 2}, as that was the response given to `reply`
})
```

The `reply` callback follows the normal signature for callbacks:
`callback(err, result)`. But it also provides some convenience
abbreviations. You can provide a data response using:

* `reply(null, {z: 3})`
* `reply({z: 3})`

You can provide an error response using:

* `reply(new Error('my error message')`

And you can provide an empty response using:

* `reply()`

Thus, our example above can be more conveniently written as:

```
seneca
  .add({a: 1}, function(msg, reply) {
    reply({x: msg.y})
  })
```

It is also common practice to pass the `reply` callback into another
function expecting a standard signature callback. For example:

```
const Fs = require('fs')

seneca
  .add({file: 'read'}, function(msg, reply) {
    Fs.stat(msg.path, reply)
  })
```



