var seneca = require('seneca')()
  .add('a:1', function (msg, reply) { reply() })
  .add('b:1', function (msg, reply) { reply() })

// Exact match. Prints: true
console.log(seneca.has('a:1'))

// Exact match. Prints: true
console.log(seneca.has('b:1'))

// Not found. Prints: false
console.log(seneca.has('c:1'))
