
// This version of the color plugin depends on some other microservice
// to implement the role:hexmap message.
module.exports = function color (options) {

  this.add('role:color,to:hex', function (msg, reply) {

    this.act('role:hexmap', {color:msg.color}, function (err, result) {
      if (err) return reply(err)

      var hex = result.hex || '000000'
      reply(null, {hex: hex})
    })
  })
}
