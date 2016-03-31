![logo](./assets/files/assets/seneca-logo.png)
> A Node.js toolkit for micro service architectures

#senecajs.org
This repo contains the documentation website for [Seneca.js][]. This documentation is available at
[senecajs.org][] or can be ran locally by cloning this repo and following the steps below.

__Lead Maintainer:__ [Naomi Feehan Moran][lead]

## Contributing
Seneca and its docs are __open projects__ and encourage participation. If you feel you can help in
any way, be it with examples, extra testing, tutorials, or new features please be our guest.

Please make all content changes in the [/src/pages][] folder. All changes are built just before we
redeploy the site so you only need to include changes in your PR. Upon your PR being accepted your
changes will be deployed.

Please see our [/contribute][] page for more information.

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

## License
Copyright Richard Rodger and other contributors, Licensed under [MIT][].

[MIT]: ./LICENSE
[/src/pages]: ./src/pages
[/contribute]: ./src/pages/contribute/index.md
[Seneca.js]: https://www.npmjs.com/package/seneca
[senecajs.org]: http://www.senecajs.org/
[lead]: https://github.com/naomifeehanmoran
[Seneca]: http://senecajs.org
[Metalsmith]: http://metalsmith.io
