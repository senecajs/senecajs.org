---
layout: main.html
---

# Frequently Asked Questions

Having an issue with Seneca? The answer might be here!

## Got a question?

Please post an issue, marking as "FAQ:" in the title.

[I want to ask a question!](https://github.com/senecajs/senecajs.org/issues/new?title=FAQ:%20)

### Why is pattern-matching so important?

Because it gives you a clean component model. This lets you build big
things out of small things without ending up with spaghetti code.

The trick is to make composition easy. That way you can combine and
extend microservices. Instead of modifying an existing microservice,
simply add a new one with more functionality. This is a much more
scalable way to handle changing requirements without building up
technical debt.

There's a [great talk by Gerald Sussman](https://vimeo.com/151465912)
(co-inventor of Scheme) on the basic principles of this idea. There's
also a
[maintainer blog post](http://www.richardrodger.com/seneca-microservices-nodejs#.Vqi9LBiLT-k)
explaining this from a Seneca perspective.

<pre style="margin-bottom:0px">
A diamond is very pretty.
But it is hard to add to a diamond.
&nbsp;
A ball of mud is not so pretty.
But you can always add more mud to a ball of mud.
</pre>
<div style="text-align:right"><small>[Joel Moses](https://en.wikipedia.org/wiki/Joel_Moses) / [Paul Penfield](http://www-mtl.mit.edu/~penfield/)</small></div>


### What is the recommended structure for Seneca apps?

Some things that work well:

   * Separate the business logic from the execution. Put your business
     logic into separate plugins - either separate node modules,
     different repositories, or simply different files in the same
     repository.

   * Use execution scripts to compose your app. Don't be afraid to use
     different scripts for different contexts. They should be pretty
     short any way. You want your scripts to look something like:

```
var SOME_CONFIG = process.env.SOME_CONFIG || 'some-default-value' 

require('seneca')({ some_options: 123 })

  // existing Seneca plugins
  .use('community-plugin-0')
  .use('community-plugin-1', {some_config: SOME_CONFIG})
  .use('community-plugin-2')

  // your own plugins with your own business logic
  .use('project-plugin-module')
  .use('../plugin-repository')
  .use('./lib/local-plugin')

  .listen( ... )
  .client( ... )

  .ready( function() {
    // your own custom code - executed once Seneca is spun up
  })
```

   * Plugin loading order _is significant_. This is a good thing. It
     lets you control the [composition of your message language](http://www.richardrodger.com/seneca-microservices-nodejs#.VqdKAhiLT-k).

Things that don't work well:

   * Mixing Seneca initialization with other framework
     initialization. Define your express or hapi app in one file, and
     Seneca in another. Keep it separate and simple.

   * Passing the Seneca instance around. Don't create a Seneca
     instance and then pass it as a parameter to stuff you've
     `required` in, and only then start adding plugins and
     actions. Instead, use small execution scripts with clear and
     linear construction of your service from a list of plugins.

Looking for an example structure to copy? The
[nodezoo workshop](https://github.com/rjrodger/nodezoo) is a good
place to find one.



