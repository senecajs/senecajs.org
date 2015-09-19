# senecajs.org
This branch contains the static documentation website for [Seneca][]. It is built
using [MetalSmith][] and can be built and served via npm scripts.

Get the dependencies:

```
npm install
```

Build the site:

```
npm run build
```

Build and serve the site to port `4000`:

```
npm run docs
```

## Making changes

Seneca and it's Docs are __open projects__ and encourage participation. If you feel you can help in any
way, be it with examples, extra testing, tutorials, or new features please be our guest.

Please make all content changes to the [/src/pages](https://github.com/senecajs/senecajs.github.io/tree/master/src/pages)
folder.  After this, you can either submit a pull request or run `npm run build`
before submitting a pull request.  Since the site uses metalsmith and not jekyll
there is a two stage process where we must manually build before a change is live.  



## License
Copyright Seneca Contributors 2015, Licensed under [MIT][].

[MIT]: ./LICENSE


[Seneca]: http://senecajs.org
[Metalsmith]: http://metalsmith.io
