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
[nodezoo workshop](https://github.com/nodezoo/nodezoo-workshop) is a good
place to find one.

