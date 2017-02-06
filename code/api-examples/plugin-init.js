require('seneca')()

  // Define the foo plugin
  .use(function foo () {
    
    // An external resource that takes time to initialize.
    var resource

    // An action that depends on the resource.
    this.add('a:1', function(msg, reply) {
      reply({z: resource[msg.z]})
    })

    // The special initialization action, which is automatically gated.
    this.add('init:foo', function (msg, reply) {
      setTimeout(function () {

        resource = {
          0: 'A'
        }

        reply()
      }, 100)
    })
  })

  // Define the bar plugin
  .use(function bar (options) {
    
    // This init action will wait for the foo init action to complete.
    // Plugins initiate in the order they are defined.
    this.add('init:bar', function (msg, reply) {
      var seneca = this

      setTimeout(function () {

        // Delayed definition of an action.
        seneca.add('b:2', function(msg, reply) {
          reply({y: options.y[msg.y]})
        })

        reply()
      }, 100)
    })
  }, {

    // The options for the bar plugin
    y: {
      0: 'B'
    }
  })


  // These actions are gated until the plugin init actions are complete.

  // Prints: null { z: 'A' }
  .act('a:1,z:0', console.log)

  // Prints: null { y: 'B' }
  .act('b:2,y:0', console.log)
