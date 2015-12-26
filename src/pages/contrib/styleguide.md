## Coding Conventions

All repositories under the [/senecajs](https://github.com/senecajs) org use the [standard style](http://standardjs.com/) guide with some added defensive measures.  

Please visit the [rules](http://standardjs.com/rules.html) section of the standard style to understand the rules.
Additionally, the following conventions are used, which are borrowed from the [hapi style guide](http://hapijs.com/styleguide)

Assume the standard style except for any additions/exceptions made below.  These additional rules come directly from the [hapi style guide](http://hapijs.com/styleguide), with semicolons being removed from the examples. 

#### Curly indentation

Use [Stroustrup](https://en.wikipedia.org/wiki/Indent_style#Variant:_Stroustrup) indentation for curly brackets.

  ```javascript
  // Right
  if (foo) {
  
  }
  else if (bar) {
  
  }
  
  
  // Wrong
  if (foo) {
  
  } else if (bar) {
  
  }
  ```

#### Multi-line statements

  - Statements should only be broken into multiple lines to improve readability
  - Break statements if they are longer than 150 characters long
  - No empty lines in the middle of a single statement
  - Indent multi-line statements

  - Conditions should be indented to the first character of the condition in the first line

  ```javascript
  if (result &&
    result.status &&
    result.status.statusCode === 200) {

    console.log('success')
  }
  ```
  
## Node

### Require

  - Use uppercase variable names for imported modules
  - All require statements must be declared at the top of the module
  - Always use relative paths

### Module globals

  - Every module can only have two top level globals (except for imported modules):
    - `exports` - defined automatically by node
    - `internals` - must be declared as an object at the top of each module immediate following the `require` section
  - Any variable global to the module must be a property of `internals`, including constants
  - If a module has automatically executing code, it must be contained within a function (using the `internals` namespace) and called at the top of the module after the `internals` declaration.
  
  ````javascript
  // Right
  
  var Hapi = require('hapi')
  var Hoek = require('hoek')
  var Package = require('./package.json')
  
  var internals = {
    foo: 'bar'
  }
  
  internals.init = function () {
  
    var server = new Hapi.Server()
    ...
  }
  
  internals.init();
  
  // Also right
  
  var Hapi = require('hapi')
  
  var internals = {}
  
  internals.package = require('./package.json')
  internals.foo = 'bar'
  internals.init = function () {
     
    var server = new Hapi.server()
    ...
  }
  
  internals.init()
  
  // Wrong
  
  var hapi = require('hapi') // Use uppercase name
  
  var foo = 'bar' // No global vars outside of internals
  
  var internals = {
    Foo: 'bar' // Don't use uppercase vars inside internals
  }
  
  var server = new Hapi.Server() // No global vars outside of internals and exports / Set up your module inside an  init() function
  ...
  
  var Hoek = require('hoek') // Declare modules at the top of the module
  
  ````

### Variable names

  - `err` is reserved for errors received via a callback. Use `error` for local function variables

### Callback

  - First argument must always be `err`
