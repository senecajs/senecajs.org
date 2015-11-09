---
layout: main.html
---

# Understanding Prior Actions

## The Seneca software component model
Software components are supposed to make your life easier. They are supposed to let you write production-ready code faster. They do this in four ways. Software components are:

* _self-contained_, so they don't step on each other's toes;
* _reusable_, so you don't have to write so much code;
* _extensible_, so they're actually useful in the real world;
* _composable_, so you can build bigger things.

[plugins][] are designed to deliver on these four features.


## Pattern-based APIs make this easy
Seneca plugins are fundamentally just a list of action patterns. This makes them self-contained because you must use messages (that match the patterns) to interact with the plugin. They are reusable, because you can load them into any Seneca microservice. They are extensible because you can override patterns with your own functionality. And they are composable because you can build up pattern behaviour with a function callback chain.

The ease of extensibility and composability are the primary benefits of the pattern-based approach. Let's look at a simple example. Here's a plugin that converts color values between representations.

``` js
var seneca = require('seneca')()

seneca.use( function color() {

  var map_name_hex = {
    black: '000000',
    red:   'FF0000',
    green: '00FF00',
    blue:  '0000FF',
    white: 'FFFFFF'
  }

  this
    .add('role:color,cmd:convert', function( msg, respond ) {
      var out = { hex: map_name_hex[msg.name] }
      respond( null, out )
    })
})

// prints { hex: 'FF0000' }
seneca.act('role:color,cmd:convert,name:red', console.log )

// prints { hex: undefined } as yellow not recognized
seneca.act('role:color,cmd:convert,name:yellow', console.log )
```

This plugin only supports a limited range of colors. One way you can extend the set of supported colors is by adding special cases (in this case, we're ignoring the fact that the color name to hex feature is just a simple mapping data structure).

``` js
seneca.add('role:color,cmd:convert,name:yellow', function( msg, respond ) {
  respond( null, { hex: 'FFFF00' })
})

// prints { hex: 'FFFF00' }
seneca.act('role:color,cmd:convert,name:yellow', console.log )
```

_This is standard Seneca best practice_. You are allowed to define your own special cases.

But what if you have many new colors you want to add? Another way to extend the _color_ plugin is to _override_ the existing pattern:

``` js
var more_name_hex = {
  cyan:    '00FFFF',
  fuchsia: 'FF00FF'
}

seneca.add('role:color,cmd:convert', function( msg, respond ) {
  this.prior( msg, function( err, out ) {
    if( err ) return respond( out )

    if( null == out.hex ) {
      out.hex = more_name_hex[msg.name]
    }

    respond( null, out )
  })
})

// prints { hex: 'FFFF00' }, from override
seneca.act('role:color,cmd:convert,name:cyan', console.log )

// prints { hex: '00FFFF' }, from more specific custom pattern
seneca.act('role:color,cmd:convert,name:yellow', console.log )

// prints { hex: 'FF0000' }, from color plugin
seneca.act('role:color,cmd:convert,name:red', console.log )
```

The function this.prior is a reference to the _original_ action function for the _role:color,cmd:convert_ pattern. This original action function knows how to handle the colors black, red, green, blue and white.

The new action function for _role:color,cmd:convert_ first passes on the input message to the original action function, and if the original action function does recognize a color and produce a hex value, then the new action function does nothing. This original action function is known as the _prior_. If the prior does not provide a hex value, then the new action function checks for the colors it knows about, cyan and fuchsia, and handles those. The color yellow is still handled by the special case action function that specifically matches _name:yellow_.

Priors can be used in this way to customize the behavior of any action pattern.


## Understanding priors
Priors can be stacked. Each time you override an action pattern, you get a prior. This prior may have its own prior from a previous definition of the action pattern. Thus you can compose layers of additional functionality.

For example, you can add validation, auditing, throttling, custom logging, input and output data manipulation, or trigger other messages. The calling code has no visibility of these customizations, and no need to know about them, so the plugin remains self-contained.

If you call `this.prior`, and there is no previous definition, then you get an empty response (null) back. In production code you should always handle this case.

Priors can be _strict_. This means that a prior only exists if there is an _exact_ matching action pattern. Normally, priors are not strict, so that sub-patterns will be priors. Here's an example.

For the following patterns, added in this order:

* **a:1**
* **a:1,b:2**
* **a:1,b:2,c:3**

The prior chain is:

a:1,b:2,c:3 → a:1,b:2 → a:1.

In the example above, for _role:color,cmd:convert,name:yellow_, the prior is _role:color,cmd:convert_.

If you use the strict setting, then the priors will only be for exact matches. For the following patterns, added in this order:

* **a:1**
* **a:1,b:2,strict$:{add:false}**
* **a:1,b:2,c:3**

The prior chain is

a:1,b:2,c:3 → a:1,b:2 only.

You can make every prior strict by setting the top level option:

`seneca( {strict:{add:true}} )`



## Add order is significant
In the same way that the order of plugin definition is significant, the order of pattern overrides is also significant. Seneca checks only at definition time for matching priors. This is deliberate, so that you have well-defined behaviour you can determine simply from reading the code.

Using the example above, if you add patterns in the order:

* **a:1**
* **a:1,b:2**
* **a:1,b:2,c:3**

Then there are _no_ priors.

For this reason, take care when adding plugins whose purpose is mainly to extend existing patterns. They should be added after the main plugin that adds functionality.

## Best practices for data entities
The Seneca [data entity patterns][] can be extended to handle special cases. You use calls to `this.prior` to perform the underlying data operations.

For example, Let's say you want to add a _last_updated_ field to every data entity. Override the _role:entity,cmd:save_ pattern to do this:

``` js
var seneca = require('seneca')()

seneca.add('role:entity,cmd:save', function( msg, respond ) {
  msg.ent.last_updated = Date.now()
  this.prior( msg, respond )
})

// prints $-/-/foo;id=9wl7sn;{bar:1,last_updated:1441383791347}
seneca.make$('foo').data$({bar:1}).save$( console.log )
```

The _role:entity,cmd:save_ message contains an _ent_ property with the Seneca entity data, which you can modify as desired.

In production systems, you'll tend to want to do a number of things to entities:

* **define general custom behaviors for all entities,**
* **define custom behaviors for certain types of entity,**
* **define custom behaviors for single entities.**

Use the standard `role:entity,cmd:save|load|remove|list` action patterns to define general customizations, as per the example above.

To define custom behaviour for a specific entity, make sure to add the pattern using the non-strict (default!) option:

``` js
seneca.add('role:entity,cmd:save,name:bar', function( msg, respond ) {
  msg.ent.zed = 1
  this.prior( msg, respond )
})

// prints $-/-/foo;id=m3l3zp;{a:1,last_updated:1441384489162}
seneca.make$('foo').data$({a:1}).save$( console.log )

// prints $-/-/bar;id=air0bm;{b:1,zed:1,last_updated:1441384489162}
seneca.make$('bar').data$({b:1}).save$( console.log )
```

The _bar_ entity still gets the _last_updated field_. If you had used `strict$:{add:true}`, then it would not have.

Take care when using the base and zone fields for name-spacing entities. If you define a custom behavior for all entities of the same base, this will work as intended. But if you also define custom behaviors only using a name, then an entity that matches both the name and base will not trigger the base behavior, as it will not have the correct prior. Here's a simple example of how the patterns work:

* **a:1**
* **a:1,b:2**
* **a:1,c:2**

has the prior chains:

* **a:1,b:2 → a:1**
* **a:1,c:2 → a:1**

Thus, the input message {a:1, b:2, c:3} will match \__a:1,b:2_ as b precedes c alphabetically, and patterns are disambiguated alphabetically. It will _not_ also match \__a:1,c:3\__.

Similarly, if you have:

* **role:entity,cmd:save,name:foo**
* **role:entity,cmd:save,base:bar**

Then `{role:entity,cmd:save,name:foo,base:bar}` will not trigger any custom priors for _base:bar_.

The rule to follow is: if you are defining _base_ behaviors, only define _name,base_ behaviors for specific entities. if you are defining _zone_ behaviors, only define _base,zone_ and _name,base,zone behaviors_.

## Debugging priors
You can trace the structure of action patterns priors using the `--seneca.print.tree` command line option. Run the following code:

``` js
// filename: prior-debug.js

var seneca = require('seneca')()

seneca
  .add('a:1', function( msg, respond ) {
    respond( null, { a:1 })
  })

  .add('a:1,b:2', function( msg, respond ) {
    this.prior( msg, function( err, out ) {
      out.b = 2
      respond( err, out )
    })
  })

  .add('a:1,b:2,c:3', function( msg, respond ) {
    this.prior( msg, function( err, out ) {
      out.c = 3
      respond( err, out )
    })
  })

  .act( 'a:1,b:2,c:3', console.log )
```

And you'll see the output:

``` js
$ node prior-debug.js --seneca.print.tree
2015-09-04T17:00:55.445Z 5ftqv0kxp9zn/1441386055436/36136/- INFO    hello    Seneca/0.6.4/5ftqv0kxp9zn/1441386055436/36136/-
Seneca action patterns for instance: 5ftqv0kxp9zn/1441386055436/36136/-
└─┬ a:1
  ├── # root$, (e7roo),
  └─┬ b:2
    ├── # root$, (d77dx),
    │   # root$, (e7roo),
    └─┬ c:3
      └── # root$, (nzgbq),
          # root$, (d77dx),
          # root$, (e7roo),

null { a: 1, b: 2, c: 3 }
```

The last line { a: 1, b: 2, c: 3 } is the expected output from the prior chain for the action pattern _a:1,b:2,c:3_. Above that is an textual tree diagram of the defined patterns in the Seneca instance.

Each pattern is represented by a leaf of the tree. On each leaf is a stack of prior function identifiers, showing the order in which the priors will be called.

For _a:1,b:2,c:3_, you can see that the priors for _a:1,b:2 (d77dx)_, and _a:1 (e7roo)_ will form the prior chain.

You can also use the option `--seneca.print.tree.all` to see all the system action patterns, not just your own.

Running the above program using `--seneca.log.all` also shows you the log output that allows you to trace the execution of the action patterns. Here's a sample run, showing only the lines of interest:

``` js
$ node prior-debug.js --seneca.log.all --seneca.log.short
...
     159 3h/- DEBUG plugin root$  ADD (kjnse) a:1
     159 3h/- DEBUG plugin root$  ADD (xtpzn) a:1,b:2
     160 3h/- DEBUG plugin root$  ADD (460jf) a:1,b:2,c:3
...
     160 3h/- DEBUG act root$ IN  0j/12 a:1,b:2,c:3 {a:1,b:2,c:3} ENTRY (460jf) - - -
     164 3h/- DEBUG act root$ IN  7e/12 a:1,b:2     {a:1,b:2,c:3} PRIOR;(460jf) (xtpzn) - - -
     165 3h/- DEBUG act root$ IN  me/12 a:1         {a:1,b:2,c:3} PRIOR;(460jf),(xtpzn) (kjnse) - - -
     165 3h/- DEBUG act root$ OUT me/12 a:1         {a:1}         PRIOR;(460jf),(xtpzn) (kjnse) - - 0 -
     167 3h/- DEBUG act root$ OUT 7e/12 a:1,b:2     {a:1,b:2}     PRIOR;(460jf) (xtpzn) - - 3 -
     167 3h/- DEBUG act root$ OUT 0j/12 a:1,b:2,c:3 {a:1,b:2,c:3} EXIT (460jf) - - 7 -
```

Here you can see the definitions of the action patterns, which gives the action identifiers:

* **a:1 → (kjnse)**
* **a:1,b:2 → (xtpzn)**
* **a:1,b:2,c:3 → (460jf)**

These identifiers are included in the log lines of the IN/OUT actions calls so that you can follow the prior calls.

In addition, the message and transaction identifiers, starting with 0j/12, allow you to trace all the messages generated by the initial message.

For more details on Seneca logging, read the [logging tutorial][].

## Help
If you have questions on priors, you can:

* Tweet to [@senecajs][],
* [github issue][],
* Start a [conversation][].


<br /><br /><br />

That's all folks! Corrections and comments: please tweet [@senecajs][].

[plugins]: http://senecajs.org/tutorials/how-to-write-a-plugin.html
[data entity patterns]: http://senecajs.org/tutorials/understanding-data-entities.html
[logging tutorial]: http://senecajs.org/tutorials/logging-with-seneca.html
[@senecajs]: https://twitter.com/senecajs
[github issue]: https://github.com/senecajs/seneca/issues
[conversation]: https://gitter.im/senecajs/seneca
