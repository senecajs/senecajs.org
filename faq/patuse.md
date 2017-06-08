Because it gives you a clean component model. This lets you build big
things out of small things without ending up with spaghetti code.

The trick is to make composition easy. That way you can combine and
extend microservices. Instead of modifying an existing microservice,
simply add a new one with more functionality. This is a much more
scalable way to handle changing requirements without building up
technical debt.

There's a [great talk by Gerald Sussman](https://vimeo.com/151465912)
(co-inventor of Scheme) on the basic principles of this idea. There's
also a
[maintainer blog post](http://www.richardrodger.com/seneca-microservices-nodejs#.Vqi9LBiLT-k)
explaining this from a Seneca perspective.

<pre style="margin-bottom:0px">
A diamond is very pretty.
But it is hard to add to a diamond.
&nbsp;
A ball of mud is not so pretty.
But you can always add more mud to a ball of mud.
</pre>
<div style="text-align:right"><small>[Joel Moses](https://en.wikipedia.org/wiki/Joel_Moses) / [Paul Penfield](http://www-mtl.mit.edu/~penfield/)</small></div>

<p>&nbsp;</p>
