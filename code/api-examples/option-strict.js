require('seneca')({

  // Namespace for strict options.
  strict: {

    // Allow results to be non-Objects.
    result: false 
  }
})

  .add('a:1', function (msg, reply) {

    // Normally, this would fail, as the response is not an Object.
    reply('Hi there!')
  })

  // Prints null Hi There!
  .act('a:1', console.log)
