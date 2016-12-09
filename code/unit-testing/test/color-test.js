// Unit test for the color Seneca plugin
// Uses https://github.com/hapijs/lab but easy to refactor for other unit testers.

// The utility function test_seneca constructs an instance of Seneca
// suitable for test execution, using the seneca.test() method.

var Lab = require('lab')
var Code = require('code')
var Seneca = require('seneca')

var lab = exports.lab = Lab.script()
var describe = lab.describe
var it = lab.it
var expect = Code.expect

// A suite of unit tests for this Seneca plugin.
describe('color', function () {

  // A unit test (the test callback is named 'fin' to distinguish it from others).
  it('to-hex', function (fin) {

    // Create a Seneca instance for testing.
    var seneca = test_seneca(fin)

    // Gate the execution of actions for this instance. Gated actions are executed
    // in sequence and each action waits for the previous one to complete. Gating
    // is not required, but avoids excessive callbacks in the unit test code.
    seneca
      .gate()

    // Send an action, and validate the response.
      .act({
        role: 'color',
        to: 'hex',
        color: 'red'
      }, function (ignore, result) {
        expect(result.hex).to.equal('FF0000')
      })

      .act({
        role: 'color',
        to: 'hex',
        color: 'not-a-color'
      }, function (ignore, result) {
        expect(result.hex).to.equal('000000')
      })

    // Under gating, `ready` will wait until all actions have completed.
      .ready(fin)
  })
})


// Construct a Seneca instance suitable for unit testing
function test_seneca (fin) {
  return Seneca({log: 'test'})

  // activate unit test mode. Errors provide additional stack tracing context.
  // The fin callback is called when an error occurs anywhere.
    .test(fin)
  
  // For detailed logs, use this version instead
  // .test(fin, 'print')

  // Load the microservice business logic
    .use(require('../color'))
}
