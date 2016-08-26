---
layout: content.html
---

# Support
There are many different ways to get in touch with Seneca contributors or the community in general:

- For __issues__ or __questions__ open an [issue][] on github.
- For __discussions__ we have a [Gitter][].

No matter how minor your issue is or how basic your question appears to be we want to hear it. We
want you to get up and running as quickly as possible so please, ask away.

## Roadmap
Seneca tries to follow a quarterly release schedule with major changes gated
behind subsequent releases. This is to enforce continuity of development, and
to ensure that semver is properly followed. These goals may change at any time
based on challenges encountered or contributions from the community. High level
goals for major versions are noted below.

### 4.0 - Late 2016
* Reworking of the plugin system.
* Transport specification versioned and updated.
* Transport refactored fully into seneca-transport.
* New base Transport layer for preview.
* Full transport plug-ability supported.

### 5.0 - Early 2017
* Performance optimizations.

## Contributing
[Seneca][], [Senecajs.org][], and all official plugins are __open__ projects and encourage
participation. If you feel you can help in any way, be it with documentation, examples, extra
testing, or new features, please be our guest.

Contributing is not always about adding new features. There are plenty of other ways to get
involved. For instance:

- Add more tests, be they unit tests or performance-based tests.
- Write guides and documentation or proof-read and fix existing docs.
- Report, find or fix bugs, or all three.
- Add examples of usage, patterns or integration with other tools.

Like any other project, there is plenty to be done by people of all skill levels and
specialities. If you have any questions, or want to help out, please stop by our issues
boards.

- Seneca [Issue Board][code_issues]
- Site [Issue Board][org_issues]

Before you start, please read our code of [Code of Conduct][]. It contains very important
information for all contributors to Senecajs. Once done, it may also be helpful to read
up on Seneca's core principles listed below.

## Principles
The ethos of the Seneca framework is to place the needs of developers who use
the framework above the needs of the maintainers. Seneca should make your life
easier, not harder. We will write more code so that you have to write less.
Achieving this goal is a process, and we get closer with every contribution. The
core principles are,

### Acceptance
The principle of __acceptance__ is "we accept all uses of Seneca". Seneca is
very flexible. There is more than one way to do things. There are many plugins,
and some plugins are different takes on the same problem. You can use callbacks.
You can use promises. You can write monoliths, or micro-services. You can embed,
and you can run standalone.

To make this possible, we keep the core API small, and we provide a plugin and
decoration mechanism so you can make Seneca your own.

### Brevity
The principle of __brevity__ is "we keep your code concise and clean". The less
code you write, the less you have to think about, and the fewer bugs you have.
You should be able to tell what Seneca is doing just by looking at your code.

In support of this principle, We provide a chainable API, an abbreviated form of
JSON, and an abbreviated way to load plugins.

### Continuity
The principle of __continuity__ is "we won't break your code". We will
respect semver. We will be careful to avoid regressions. We will
preserve underlying semantics. We will keep refining and extending our
documentation.

Major releases with API changes will provide a plugin to support the
previous release, so that you can continue to use your old code with a
one line addition.

[issue]: https://github.com/senecajs/seneca/issues/new
[Gitter]: https://gitter.im/senecajs/seneca
[Seneca]: https://github.com/senecajs/seneca
[Senecajs.org]: https://github.com/senecajs/senecajs.org
[code_issues]: https://github.com/senecajs/seneca/issues
[org_issues]: https://github.com/senecajs/senecajs.org/issues
[code of conduct]: /code-of-conduct
