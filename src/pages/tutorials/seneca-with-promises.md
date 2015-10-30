---
layout: main.html
title: Seneca with Promises
---

# Seneca with Promises

Even though Seneca does not come with promises built in, it is pretty trivial to use your favorite promise library and use it. In this tutorial we will use one of the most popular libraries out there, [Bluebird][].

### Basic Example
```js
var Promise = require('bluebird');
var seneca = require('seneca')();

// Promisify the .act() method; to learn more about this technique see:
// http://bluebirdjs.com/docs/features.html#promisification-on-steroids
var act = Promise.promisify(seneca.act, seneca);

// Return no error and a success message to illustrate a resolved promise
seneca.add({cmd: 'resolve'}, function (args, done) {
    done(null, {message: "Yay, I've been resolved!"});
});

// Return an error to force a rejected promise
seneca.add({cmd: 'reject'}, function (args, done) {
    done(new Error("D'oh! I've been rejected."));
});

// Use the new promisified act() with no callback
act({cmd: 'resolve'})
  .then(function (result) {
    // result will be {message: "Yay, I've been resolved!"} since 
    // its guaranteed to resolve
  })
  .catch(function (err) {
    // Catch any error as usual if it was rejected
  });

act({cmd: 'reject'})
  .then(function (result) {
    // Never reaches here since we throw an error on purpose
  })
  .catch(function (err) {
    // err will be set with message "D'oh! I've been rejected."
  });
```

Note that Bluebird v3 has some [promisification API changes](http://bluebirdjs.com/docs/new-in-bluebird-3.html). Instead of
```js
var act = Promise.promisify(seneca.act, seneca);
```
we have to use
```js
var act = Promise.promisify(seneca.act, {context: seneca});
```

### Handling Gate Executor Timeouts

Luckily the timeouts thrown by the gate executer are errors so the promise ends up being rejected and we can `.catch()` them as any other error.

```js
var Promise = require('bluebird');
var seneca = require('seneca')({ timeout: 500 });

var act = Promise.promisify(seneca.act, seneca);

// Add a command that takes a longer time that the seneca's timeout period
seneca.add({cmd: 'timeout'}, function (args, done) {
    setTimeout(function () {
        done(null, {message: 'resolve'});
    }, 1000);
});

act({cmd: 'timeout'})
  .then(function (result) {
    // Never reaches here since the gate executer times out
  })
  .catch(function (err) {
    // err will be set with a timeout error thrown by the gate executer
  });
```

### Chaining `.act()` Commands

Since we have `.act()` promisified we can now chain them together and get really nice looking code.

```js
act({cmd: 'fetchOrderProducts', id: 'order-12345'})
  .then(function (products) {
    return act({cmd: 'adjustInventory', products: products});
  })
  .then(function (inventoryUpdates) {
    return act({cmd: 'generateInventoryReport', updates: inventoryUpdates})
  })
  .catch(function (err) {
    console.error(err);
  });
```

### Advanced Example

Since we have the power of promises on our side we can do some pretty awesome stuff. Lets say we needed to convert a list of product prices in US dollars into Euros.

```js
var Promise = require('bluebird');
var seneca = require('seneca')();

// Promisify the .act() method
var act = Promise.promisify(seneca.act, seneca);

// Add a conversion command
seneca.add({cmd: 'dollars-to-euros'}, function(args, done) {
  var exchangeRate = 0.88;
  var euros = args.product.price * exchangeRate;

  // Return the product with euros set
  done(null, {
    name: args.product.name,
    price: args.product.price,
    euros: euros
  });
});

var products = [
  {name: 'Product A', price: 9.99},
  {name: 'Product B', price: 23.99},
  {name: 'Product C', price: 10.00},
  {name: 'Product D', price: 100.99},
  {name: 'Product E', price: 0.99}
];

// Build an array of promisified commands
var cmds = [];
products.forEach(function (product) {
  var command = act({cmd: 'dollars-to-euros', product: product});

  cmds.push(command);
});

Promise.all(cmds)
  .then(function (results) {
    // results is now an array of each of the resolved promises
    // {name: 'Product A', price: 9.99, euros: 8.81}
    // {name: 'Product B', price: 23.99, euros: 21.15}
    // {name: 'Product C', price: 10.00, euros: 8.82}
    // {name: 'Product D', price: 100.99, euros: 89.05}
    // {name: 'Product E', price: 0.99, euros: 0.87}
    results.forEach(function (result) {
      console.log(result);
    });
  })
  .catch(function (err) {
    console.error(err);
  });
```

[Bluebird]: https://www.npmjs.com/package/bluebird
