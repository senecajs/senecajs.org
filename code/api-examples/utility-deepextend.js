var Seneca = require('seneca')

var seneca = Seneca()

var extended = seneca.util.deepextend(
  {a: 1, b: 2, c: {d: 3, e: 4}},
  {a: 10, c: {d: 30, f: 50}, g: 60}
)

// prints { a: 10, c: { d: 30, f: 50, e: 4 }, g: 60, b: 2 }
console.log(extended)
