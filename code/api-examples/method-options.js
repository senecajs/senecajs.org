var Seneca = require('seneca')

var seneca = Seneca({foo:1})

// Prints: 1
console.log(seneca.options().foo)

seneca.options({foo: 2, bar: 3})

// Prints: 2
console.log(seneca.options().foo)

// Prints: 3
console.log(seneca.options().bar)
