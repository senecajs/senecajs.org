require('seneca')({

  // run in quiet mode to reduce logging distraction
  log: 'silent'
})

  .add('a:1', function (msg, reply) {
    reply({z: msg.z})
  })

  // Prints: null { z: 0 }
  .act('a:1, z:0', console.log)

  // Prints an error
  .act('a:2, z:1', console.log)

  // Prints: null { z: 9 }
  .act('a:2, z:2, default$:{z:9}', console.log)


