---
layout: content.html
title: Learn
---

<style>
ul {
  margin-top: 0px;
}
</style>


# Learn Seneca

Want to learn how to use Seneca to build microservice systems? Enter
the Seneca _dojo_ and follow the seven steps to enlightenment.


* [<span style="color:black">&#9649;</span> &nbsp;White Belt](#white-belt): learn the basics.
* [<span style="color:orange; font-size:2em; line-height:1px; vertical-align:-6px">&#9648;</span> Orange Belt](#orange-belt): get microservices talking to each other.
* [<span style="color:green; font-size:2em; line-height:1px; vertical-align:-6px">&#9648;</span> Green Belt](#green-belt): write some business logic.
* [<span style="color:purple; font-size:2em; line-height:1px; vertical-align:-6px">&#9648;</span> Purple Belt](#purple-belt): transporting messages and talking to strangers.
* [<span style="color:blue; font-size:2em; line-height:1px; vertical-align:-6px">&#9648;</span> Blue Belt](#blue-belt): run a minimum viable product with containers.
* [<span style="color:red; font-size:2em; line-height:1px; vertical-align:-6px">&#9648;</span> Red Belt](#red-belt): design and run a full system.
* [<span style="color:black; font-size:2em; line-height:1px; vertical-align:-6px">&#9648;</span> Black Belt](#black-belt): contribute by writing plugins and helping the community.


<br><a href="#" class="linkable" style="color: rgba(41, 125, 134, 0.20); display:inline-block; float:left; margin: 43px -80px">[&#8679;]</a><a name="white-belt"></a>
## &#9649; White Belt

#### Learn how to:
  * Install, run and use Seneca
  * Use pattern matching to model your business requirements
  * Use logging to figure out what's going on

#### Follow these tutorials:
  * [Getting started](/getting-started)
  * **TODO** [Using pattern matching](/docs/tutorials/patterns)

#### Try this example code:
  * **TODO** [helloworld](https://github.com/senecajs/seneca/blob/master/docs/examples/helloworld/README.md)
  * **TODO** [colors](https://github.com/senecajs/seneca/blob/master/docs/examples/colors/README.md)
  * **TODO** [salestax](https://github.com/senecajs/seneca/blob/master/docs/examples/salestax/README.md)

#### Use this reference material: 
  * **TODO** [Core API](/api#core)

#### Blood, sweat, and tears:
(AKA: Don't worry, this part is supposed to be hard.)
  * Learning the pattern matching rules and running them "in your head".
  * Grokking the log output.



<br><a href="#" class="linkable" style="color: rgba(41, 125, 134, 0.20); display:inline-block; float:left; margin: 43px -80px">[&#8679;]</a><a name="orange-belt"></a>
## <span style="color:orange; font-size:2em; line-height:1px; vertical-align:-13px">&#9648;</span> Orange Belt

#### Learn how to:
  * Get microservices talking to each other over the network
  * Unit test your microservices
  * Work with databases
  * Understand Seneca prior actions
  * Control log output
  * Submit issues and ask questions
  
#### Follow these tutorials:
  * [Logging](/docs/tutorials/logging-with-seneca.html)
  * [Unit tests](/docs/tutorials/unit-testing.html)
  * [Entities](/docs/tutorials/understanding-data-entities.html)
  * [Understanding priors](/docs/tutorials/understanding-prior-actions.html)
  * **TODO** [The Seneca community](/docs/tutorials/seneca-community.html)

#### Try this example code:
  * **TODO** [two-microservices](https://github.com/senecajs/seneca/blob/master/docs/examples/two-microservices/README.md)
  * **TODO** [color-service](https://github.com/senecajs/seneca/blob/master/docs/examples/color-service/README.md)
  * **TODO** [salestax-system](https://github.com/senecajs/seneca/blob/master/docs/examples/salestax-system/README.md)
  * **TODO** [basic-data](https://github.com/senecajs/seneca/blob/master/docs/examples/basic-data/README.md)
  * **TODO** [cmdline](https://github.com/senecajs/seneca/blob/master/docs/examples/cmdline/README.md)

#### Use this reference material: 
  * [Seneca instance](/api/#instance)
  * [Seneca methods](/api/#methods)
  * [Seneca utilities](/api/#utilities)
  * **TODO** [Seneca entities](/api/#entities)
  * **TODO** [Seneca command line](/api/#cmdline)

#### Blood, sweat, and tears:
  * Connecting things over the network never works the first time. Invest in understanding the log output to help debug.
  * Timeouts are annoying.
  * Prior actions make writing components easy, but you need to understand the rules.
  * Entities are opinionated, so they might not be what you need. You should still understand them as they are used by many plugins.
  * The Seneca community and maintainers probably won't respond in real-time. Sorry.


<br><a href="#" class="linkable" style="color: rgba(41, 125, 134, 0.20); display:inline-block; float:left; margin: 42px -80px">[&#8679;]</a><a name="green-belt"></a>
## <span style="color:green; font-size:2em; line-height:1px; vertical-align:-13px">&#9648;</span>Green Belt

#### Learn how to:
  * Connect your web framework (express, hapi, etc.) to Seneca
  * Write business logic plugins and expose them as microservices (this is why you're here!)
  * Use pins to pattern match the patterns (meta!)
  * Configure custom logging and integrate with analytics services so you can debug your microservices
  * Give a meetup talk about Seneca
  * Configure Seneca

#### Follow these tutorials:
  * [Write a plugin](/docs/tutorials/how-to-write-a-plugin.html)
  * **TODO** [Route messages](/docs/tutorials/route-messages.html)
  * **TODO** [Advanced logging](/docs/tutorials/advanced-logging.html)
  * **TODO** [Debugging](/docs/tutorials/debugging.html)
  * **TODO** [Give meetup talks](/docs/tutorials/meeting-talks.html)
  * **TODO** [Configure Seneca](/docs/tutorials/configure-seneca.html)

#### Try this example code:
  * **TODO** [seneca-express](https://github.com/senecajs/seneca/blob/master/docs/examples/seneca-express/README.md)
  * **TODO** [seneca-hapi](https://github.com/senecajs/seneca/blob/master/docs/examples/seneca-hapi/README.md)
  * **TODO** more

#### Use this reference material: 
  * [Seneca messages](/api/#messages)
  * [Seneca modifiers](/api/#modifiers)
  * [Seneca options](/api/#options)

#### Blood, sweat, and tears:
  * **TODO**


<br><a href="#" class="linkable" style="color: rgba(41, 125, 134, 0.20); display:inline-block; float:left; margin: 42px -80px">[&#8679;]</a><a name="purple-belt"></a>
## <span style="color:purple; font-size:2em; line-height:1px; vertical-align:-13px">&#9648;</span>Purple Belt

#### Learn how to:
  * foo

#### Follow these tutorials:
  * [bar](/bar)

#### Try this example code:
  * **TODO** [eg]()

#### Use this reference material: 
  * **TODO** [zed](/api#zed)

#### Blood, sweat, and tears:
  * zee





<br><a href="#" class="linkable" style="color: rgba(41, 125, 134, 0.20); display:inline-block; float:left; margin: 42px -80px">[&#8679;]</a><a name="blue-belt"></a>
## <span style="color:blue; font-size:2em; line-height:1px; vertical-align:-13px">&#9648;</span>Blue Belt

#### Learn how to:
  * foo

#### Follow these tutorials:
  * [bar](/bar)

#### Try this example code:
  * **TODO** [eg]()

#### Use this reference material: 
  * **TODO** [zed](/api#zed)

#### Blood, sweat, and tears:
  * zee




<br><a href="#" class="linkable" style="color: rgba(41, 125, 134, 0.20); display:inline-block; float:left; margin: 42px -80px">[&#8679;]</a><a name="red-belt"></a>
## <span style="color:red; font-size:2em; line-height:1px; vertical-align:-13px">&#9648;</span>Red Belt

#### Learn how to:
  * foo

#### Follow these tutorials:
  * [bar](/bar)

#### Try this example code:
  * **TODO** [eg]()

#### Use this reference material: 
  * **TODO** [zed](/api#zed)

#### Blood, sweat, and tears:
  * zee




<br><a href="#" class="linkable" style="color: rgba(41, 125, 134, 0.20); display:inline-block; float:left; margin: 42px -80px">[&#8679;]</a><a name="black-belt"></a>
## <span style="color:black; font-size:2em; line-height:1px; vertical-align:-13px">&#9648;</span>Black Belt

#### Learn how to:
  * foo

#### Follow these tutorials:
  * [bar](/bar)

#### Try this example code:
  * **TODO** [eg]()

#### Use this reference material: 
  * **TODO** [zed](/api#zed)

#### Blood, sweat, and tears:
  * zee





### Acknowledgment

This learning approach is inspired by [Kathy Sierra's](http://seriouspony.com/badass-users-the-book/)
book
[Badass: Making Users Awesome](http://shop.oreilly.com/product/0636920036593.do). You
should read it. It will make you awesome.

