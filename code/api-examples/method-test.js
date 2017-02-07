var seneca = require('seneca')()
      .test(console.log, 'print')

      .add('a:1', function (msg, reply) { 
        reply() 
      })

      .add('b:1', function (msg, reply) { 
        reply(new Error('bad')) 
      })

      .act('a:1')
      .act('b:1')

