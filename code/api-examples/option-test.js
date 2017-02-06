var Seneca = require('seneca')

function unit_test(done) {
  var seneca = Seneca().test(done)

  // prints true
  console.log(true === seneca.options().test)

  seneca
    .add('a:1', function () { 
      throw new Error('failed!') 
    })
    .act('a:1')
}

// prints lots of error information
unit_test(console.log)
