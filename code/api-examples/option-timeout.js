require('seneca')({

  // Change global timeout to 1000 milliseconds.
  timeout: 1000
})

  // Add an action pattern that takes at least 2000 milliseconds.
  .add('a:1', function (msg, reply) {
    setTimeout(function () {
      reply({z: msg.z})
    }, 2000)
  })

  // Times out and prints an error, as 1000 < 2000 milliseconds.
  .act('a:1, z:never', console.log)

  // Override the global timeout with the timeout$ directive.
  // This message works fine and prints a result:
  .act('a:1, z:works, timeout$:3000', console.log)
