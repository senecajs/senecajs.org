require('seneca')()

  // Add an action for pattern a:1,b:2.
  .add({a: 1, b: 2}, function (msg, reply) {
    reply({z: msg.z})
  })

  // Use a jsonic String as the message. Prints: null { z: 9 }
  .act('a:1,b:2,z:9', console.log)

  // Use an Object as the message. Prints: null { z: 9 }
  .act({a: 1, b: 2, z: 9}, console.log)

  // Merge a jsonic String and an Object to form the message. Prints: null { z: 9 }
  .act('a:1,b:2', {z: 9}, console.log)

  // Merge two Objects. Precedence is left to right. Prints: null { z: 9 }
  .act({a: 1, b: 2}, {b: 3, z: 9}, console.log)

  
