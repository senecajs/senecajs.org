var Seneca = require('seneca')

var seneca = Seneca()

var jsonic_normal_pattern = seneca.util.pattern({
  c: 2,
  b: 'z',
  a: true
})

// Prints: a:true,b:z,c:2
console.log(jsonic_normal_pattern)
