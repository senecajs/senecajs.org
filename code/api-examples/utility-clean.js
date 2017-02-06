var Seneca = require('seneca')

var seneca = Seneca()

var cleaned = seneca.util.clean(
  {a: 1, b$: 2, c: {d: 3, e$: 4 }}
)

// Prints: { a: 1, c: { d: 3, 'e$': 4 } }
console.log(cleaned)
