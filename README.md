![logo](./assets/files/assets/seneca-logo.png)

# senecajs.org
[![Build Status][travis-badge]][travis-url]
[![Gitter][gitter-badge]][gitter-url]

This repo contains the documentation website for [Seneca.js][]. These docs are available at
[senecajs.org][] or can be ran locally by cloning this repo and following the steps below.

## Run Locally
After cloning, you will need to get dependencies via npm,

```
npm install
```

Next simply build and serve to port `4000`,

```
npm run build
npm run docs
```

## Contributing
Seneca is an __open__ project and encourage participation. If you feel you can help in
any way, be it with examples, extra testing, tutorials, or new features please be our
guest.

Please make all content changes in the [/src/pages][] folder. All changes are built
just before we redeploy the site so you only need to include changes in your PR. Upon
your PR being accepted your changes will be deployed.


## License

Copyright (c) 2010 - 2017 Richard Rodger and other contributors. Licensed under [MIT][].

[/src/pages]: ./src/pages
[Seneca.js]: https://www.npmjs.com/package/seneca
[senecajs.org]: http://www.senecajs.org/
[Seneca]: http://senecajs.org

[travis-badge]: https://travis-ci.org/senecajs/senecajs.org.svg?branch=master
[travis-url]: https://travis-ci.org/senecajs/senecajs.org.svg?branch=master
[gitter-badge]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/senecajs/seneca
[MIT]: ./LICENSE
