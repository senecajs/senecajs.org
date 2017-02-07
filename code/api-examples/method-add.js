require('seneca')()

  // Add an action for pattern a:1 using an object to define the pattern.
  .add({a: 1}, function (msg, reply) {
    reply({z: msg.z})
  })

  // Add an action for pattern a:2, using a jsonic String to define the pattern.
  .add('a:2', function (msg, reply) {
    reply({y: msg.y})
  })

  // Add an action for pattern a:3,b:4, merging a jsonic String and an Object to
  // define the pattern. Precedence is left to right.
  .add('a:3', {a:1, b: 4}, function (msg, reply) {
    reply({x: msg.x})
  })


  // Prints: null { z: 'A' }
  .act('a:1,z:A', console.log)

  // Prints: null { y: 'B' }
  .act('a:2,y:B', console.log)

  // Prints: null { x: 'C' }
  .act('a:3,b:4,x:C', console.log)

  
