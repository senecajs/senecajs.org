require('seneca')()

  .add('a:1', function (msg, reply) {
    console.log('STARTING: '+msg.z)

    setTimeout(function () {
      reply({z: msg.z})
    }, 100)
  })

  .act('a:1, z:0', console.log)
  .act('a:1, z:1, gate$:true', console.log)
  .act('a:1, z:2', console.log)

// Prints:
// STARTING: 0
// STARTING: 1   &lt;- z:1 does not have to wait for z:0
// null { z: 0 }
// null { z: 1 }
// STARTING: 2   &lt;- z:2 cannot start until z:1 completes
// null { z: 2 }
