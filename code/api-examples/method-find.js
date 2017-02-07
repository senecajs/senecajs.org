var seneca = require('seneca')()
  .add('a:1', function (msg, reply) { reply() })
  .add('b:1', function (msg, reply) { reply() })

// Exact match. Prints: action metadata
console.log(seneca.find('a:1'))

// Exact match. Prints: action metadata
console.log(seneca.find('b:1'))

// Not found. Prints: null
console.log(seneca.find('c:1'))
