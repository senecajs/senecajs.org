---
layout: main.html
---


# Principles

The ethos of the Seneca framework is to place the needs of developers
who use the framework above the needs of the maintainers. Seneca
should make your life easier, not harder. We will write more code so
that you have to write less. Achieving this goal is a process, and we
get closer with every contribution.

The core principles are:

   * Acceptance
   * Brevity
   * Continuity


# Acceptance

The principle of _acceptance_ is "we accept all uses of
Seneca". Seneca is very flexible. There is more than one way to do
things. There are many plugins, and some plugins are different takes
on the same problem.

You can use callbacks. You can use promises. You can write monoliths, or
microservices. You can embed, and you can run standalone.

To make this possible, we keep the core API small, and we provide a
plugin and decoration mechanism so you can make Seneca your own.


# Brevity

The principle of _brevity_ is "we keep your code concise and
clean". The less code you write, the less you have to think about, and
the fewer bugs you have. You should be able to tell what Seneca is
doing just by looking at your code.

In support of this principle, We provide a chainable API, an
abbreviated form of JSON, and an abbreviated way to load plugins.


# Continuity

The principle of _continuity_ is "we won't break your code". We will
respect semver. We will be careful to avoid regressions. We will
preserve underlying semantics. We will keep refining and extending our
documentation.

Major releases with API changes will provide a plugin to support the
previous release, so that you can continue to use your old code with a
one line addition.





