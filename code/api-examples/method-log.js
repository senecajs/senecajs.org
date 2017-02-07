var Seneca = require('seneca')

var seneca = Seneca()

seneca.log({level:'info', foo: 1})

seneca.log.info({foo: 2})

