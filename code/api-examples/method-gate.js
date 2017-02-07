var Seneca = require('seneca')

Seneca()
  .test(console.log, 'print')

  .add('a:1', function (msg, reply) { 
    setTimeout(function () {
      reply({z: msg.z}) 
    }, 100)
  })

  .add('b:1', function (msg, reply) { 
    setTimeout(function () {
      reply({y: msg.y}) 
    }, 100)
  })

  // Wait for initialization log entries to print
  .ready(function () {

    this
      .gate()

      .act('a:1,z:A', Seneca.util.print)
      .act('b:1,y:B', Seneca.util.print)

      .ungate()

      .act('a:1,z:AA', Seneca.util.print)
      .act('b:1,y:BB', Seneca.util.print)
  })
