---
layout: content.html
---

# Plugins
*Seneca* plugins enable you to build awesome microservices, incredibly fast.
Some plugins are maintained in-house, while others are provided by the community.

On this page, we provide an `npm` link and total dls per month for any plugins
we find or publish ourselves, so you only need to look in one place.

- __SenecaJs -__ Seneca, core modules, and supported plugins.
- __SenecaJs Labs -__ Plugins of varying quality, candidates for support.
- __SenecaJs Attic -__ Deprecated modules and plugins.

The most popular plugins form the SenecaJs organisation are listed below for your
convenience. To see the full list please visit the [SenecaJs org]() page. To see the
list of lab plugins please visit [SenecaJs Labs]().

## Transport plugins
Seneca supports many different transports. Use the one that fits best with your project
right now; swap it out if you scale. Each plugin is named after the transport it supports,
making it easy to find the right solution.

### [Http][transport-url]
[![ver][transport-ver]][transport-url]
[![dls][transport-dls]][transport-url]

### [Beanstalk][]
[![ver][seneca-beanstalk-transport-ver]][seneca-beanstalk-transport-url]
[![dls][seneca-beanstalk-transport-dls]][seneca-beanstalk-transport-url]

### [Redis PubSub][]
[![ver][redis-transport-ver]][redis-transport-url]
[![dls][redis-transport-dls]][redis-transport-url]

### [Redis Queue](https://npmjs.com/package/seneca-redis-queue-transport)
[![ver][seneca-redis-queue-transport-ver]][seneca-redis-queue-transport-url]
[![dls][seneca-redis-queue-transport-dls]][seneca-redis-queue-transport-url]

## Feature plugins
Use these plugins to kick-start your application development. They provide the basic business logic for
many common use cases, like user accounts, shopping carts and administration.  You can customize their behavior
by overriding their actions.

### [Web][]
[![ver][web-ver]][web-url]
[![dls][web-dls]][web-url]

### [User](https://npmjs.org/package/seneca-user)
[![ver][user-ver]][user-url]
[![dls][user-dls]][user-url]

### [Auth](https://npmjs.org/package/seneca-auth)
[![ver][auth-ver]][auth-url]
[![dls][auth-dls]][auth-url]

## Storage plugins
Storage plugins work with our built-in [Entity API](). Storage plugins can be used on a per-entity
basis, so feel free to mix and match. Each plugin is named after the storage it supports, making it simple to find
the right solution.

### [Mongo store](https://npmjs.org/package/seneca-mongo-store)
[![ver][mongo-store-ver]][mongo-store-url]
[![dls][mongo-store-dls]][mongo-store-url]


### [Postgres store](https://npmjs.org/package/seneca-postgres-store)
[![ver][postgres-store-ver]][postgres-store-url]
[![dls][postgres-store-dls]][postgres-store-url]


### [MySQL store](https://npmjs.org/package/seneca-mysql-store)
[![ver][mysql-store-ver]][mysql-store-url]
[![dls][mysql-store-dls]][mysql-store-url]


### [Level store](https://npmjs.org/package/seneca-level-store)
[![ver][level-store-ver]][level-store-url]
[![dls][level-store-dls]][level-store-url]


### [Redis store](https://npmjs.org/package/seneca-redis-store)
[![ver][redis-store-ver]][redis-store-url]
[![dls][redis-store-dls]][redis-store-url]



[auth-ver]: https://img.shields.io/npm/v/seneca-auth.svg?style=flat-square
[auth-dls]: https://img.shields.io/npm/dm/seneca-auth.svg?style=flat-square
[auth-url]: https://npmjs.org/package/seneca-auth

[mongo-store-ver]: https://img.shields.io/npm/v/seneca-mongo-store.svg?style=flat-square
[mongo-store-dls]: https://img.shields.io/npm/dm/seneca-mongo-store.svg?style=flat-square
[mongo-store-url]: https://npmjs.org/package/seneca-mongo-store

[postgres-store-ver]: https://img.shields.io/npm/v/seneca-postgres-store.svg?style=flat-square
[postgres-store-dls]: https://img.shields.io/npm/dm/seneca-postgres-store.svg?style=flat-square
[postgres-store-url]: https://npmjs.org/package/seneca-postgres-store

[level-store-ver]: https://img.shields.io/npm/v/seneca-level-store.svg?style=flat-square
[level-store-dls]: https://img.shields.io/npm/dm/seneca-level-store.svg?style=flat-square
[level-store-url]: https://npmjs.org/package/seneca-level-store

[mysql-store-ver]: https://img.shields.io/npm/v/seneca-mysql-store.svg?style=flat-square
[mysql-store-dls]: https://img.shields.io/npm/dm/seneca-mysql-store.svg?style=flat-square
[mysql-store-url]: https://npmjs.org/package/seneca-mysql-store

[user-ver]: https://img.shields.io/npm/v/seneca-user.svg?style=flat-square
[user-dls]: https://img.shields.io/npm/dm/seneca-user.svg?style=flat-square
[user-url]: https://npmjs.org/package/seneca-user

[redis pubsub]: https://npmjs.com/package/seneca-redis-transport
[redis-transport-ver]: https://img.shields.io/npm/v/seneca-redis-transport.svg?style=flat-square
[redis-transport-dls]: https://img.shields.io/npm/dm/seneca-redis-transport.svg?style=flat-square
[redis-transport-url]: https://npmjs.org/package/seneca-redis-transport

[beanstalk]: https://npmjs.com/package/seneca-beanstalk-transport
[seneca-beanstalk-transport-ver]: https://img.shields.io/npm/v/seneca-beanstalk-transport.svg?style=flat-square
[seneca-beanstalk-transport-dls]: https://img.shields.io/npm/dm/seneca-beanstalk-transport.svg?style=flat-square
[seneca-beanstalk-transport-url]: https://npmjs.org/package/seneca-beanstalk-transport

[web]: https://npmjs.org/package/seneca-web
[web-ver]: https://img.shields.io/npm/v/seneca-web.svg?style=flat-square
[web-dls]: https://img.shields.io/npm/dm/seneca-web.svg?style=flat-square
[web-url]: https://npmjs.org/package/seneca-web

[redis-store-ver]: https://img.shields.io/npm/v/seneca-redis-store.svg?style=flat-square
[redis-store-dls]: https://img.shields.io/npm/dm/seneca-redis-store.svg?style=flat-square
[redis-store-url]: https://npmjs.org/package/seneca-redis-store

[seneca-redis-queue-transport-ver]: https://img.shields.io/npm/v/seneca-redis-queue-transport.svg?style=flat-square
[seneca-redis-queue-transport-dls]: https://img.shields.io/npm/dm/seneca-redis-queue-transport.svg?style=flat-square
[seneca-redis-queue-transport-url]: https://npmjs.org/package/seneca-redis-queue-transport

[transport]: https://npmjs.org/package/seneca-transport
[transport-ver]: https://img.shields.io/npm/v/seneca-transport.svg?style=flat-square
[transport-dls]: https://img.shields.io/npm/dm/seneca-transport.svg?style=flat-square
[transport-url]: https://npmjs.org/package/seneca-transport
