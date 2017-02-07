var seneca = require('seneca')()
  .add('a:1', function (msg, reply) { reply() })
  .add('a:2', function (msg, reply) { reply() })
  .add('a:1,b:1', function (msg, reply) { reply() })

// Partial match. Prints: [ { a: '1' }, { a: '1', b: '1' } ]
console.log(seneca.list('a:1'))

// Partial match. Prints: [ { a: '1', b: '1' } ]
console.log(seneca.list('b:1'))

// None. Prints: []
console.log(seneca.list('c:1'))
