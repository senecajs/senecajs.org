<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <link rel="shortcut icon" href="/images/favicon.png" type="image/png" />
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Merriweather:400,700|Open+Sans:400,400italic,700">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/docsearch.js/1/docsearch.min.css" />
    <link rel="stylesheet" href="/stylesheets/style.css" />
    
    <title>Seneca, a microservices toolkit for Node.js</title>  </head>
  <body>
    <nav class="nav-main" role="navigation">
      <div class="container-fluid cf">
        <a class="logo logo-seneca" href="/" title="Seneca">Seneca</a>
    
        <div class="nav-search">
          <input type="search" id="seneca-search-input" placeholder="Search the docs...">
        </div>
        <!-- nav search -->
    
        <div class="nav-bar">
    
          <input type="checkbox" name="nav-menu-handle" id="nav-menu-handle" class="nav-menu-handle">
          <label for="nav-menu-handle"></label>
    
          <ul class="list-unstyled list-inline nav-items">
            <li><a href='/api/'>API</a></li>
            <li><a href='/docs/'>Docs</a></li>
            <li><a href='/faq/'>FAQ</a></li>
            <li><a href='/plugins/'>Plugins</a></li>
            <li><a href='/roadmap/'>Roadmap</a></li>
            <li><a href='/support/'>Support</a></li>
          </ul>
          <!-- nav items -->
        </div>
    
      </div>
      <!-- container -->
    </nav>

    <div class="container-fluid">
      <div class="row center-xs">
        <div class="col-xs-12 col-md-10 col-lg-10 txt-left">
          

<h1 id="seneca-api"><a href="#seneca-api" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Seneca API</h1>


<div class="row">




<div class="col-xs-12"><div class="box" style="margin-bottom:2rem">

The API documentation is organized alphabetically into topics, subtopics and entries. Each entry contains a code example to show API usage
(The <a href="old.html">old API documentation</a> is still available).

</div></div>


<!-- Top level descriptions -->


<div class="col-xs-12 col-sm-4"><a href="#instance"><div class="api-box">
<h4>Instance</h4>
<p class="top">Creating and using the Seneca instance object.</p>
</div></a></div>

<div class="col-xs-12 col-sm-4"><a href="#messages"><div class="api-box">
<h4>Messages</h4>
<p class="top">The message metadata properties.</p>
</div></a></div>

<div class="col-xs-12 col-sm-4"><a href="#methods"><div class="api-box">
<h4>Methods</h4>
<p class="top">The public methods of the Seneca instance.</p>
</div></a></div>

<div class="col-xs-12 col-sm-4"><a href="#modifiers"><div class="api-box">
<h4>Modifiers</h4>
<p class="top">Message modifiers that control message processing.</p>
</div></a></div>

<div class="col-xs-12 col-sm-4"><a href="#options"><div class="api-box">
<h4>Options</h4>
<p class="top">The configuration options for Seneca.</p>
</div></a></div>

<div class="col-xs-12 col-sm-4"><a href="#plugins"><div class="api-box">
<h4>Plugins</h4>
<p class="top">The plugin interface.</p>
</div></a></div>

<div class="col-xs-12 col-sm-4"><a href="#utilities"><div class="api-box">
<h4>Utilities</h4>
<p class="top">Utility functions and formats.</p>
</div></a></div>


</div>




<!-- Short instance descriptions -->

<div class="cf">
<h2 class="api-subhead" id="instance"><a href="#instance" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Instance</h2>
<a class="api-back" href="#seneca-api">up</a>
</div>
<div class="row">

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="instance-id">
<h5><b>id</b></h5>
<p>The unique identifier string of this Seneca instance.</p>
</div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="instance-start_time">
<h5><b>start_time</b></h5>
<p>The start time (in local milliseconds) of this Seneca instance.</p>
</div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="instance-tag">
<h5><b>tag</b></h5>
<p>The tag string of this Seneca instance, defined by the <a href="#option-tag">tag</a> option.</p>
</div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="instance-util">
<h5><b>util</b></h5>
<p>A namespace object for the <a href="#utilities">utility</a> functions.</p>
</div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="instance-version">
<h5><b>version</b></h5>
<p>The current version of Seneca.</p>
</div></div>

</div>




<!-- Short options descriptions -->

<div class="cf">
<h2 class="api-subhead" id="options"><a href="#options" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Options</h2>
<a class="api-back" href="#seneca-api">up</a>
</div>
<div class="row">

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="option-debug">
<h5><b>debug</b> <u>Object</u> <u>{...}</u></h5>
<p>Namespace object for options related to debugging. They should all be <code>false</code> for production deployments.</p>
</div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="option-plugin">
<h5><b>plugin</b> <u>Object</u> <u>{...}</u></h5>
<p>Namespace for plugin options. Once loaded, plugin options are stored here for ease of shared access.</p>
</div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="option-strict">
<h5><b>strict</b> <u>Object</u> <u>{...}</u></h5>
<p>Namespace object for options related to strict behaviors. Mostly this is for backwards compatibility with older versions of Seneca that were not as strict.</p>
</div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="option-tag">
<h5><b>tag</b> <u>String</u> <u>&quot;-&quot;</u></h5>
<p>Tag the Seneca instance with a short code that will be added to the instance identifier. Useful for tracing and debugging.</p>
</div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="option-test">
<h5><b>test</b> <u>Boolean</u> <u>false</u></h5>
<p>When <code>true</code> Seneca is in unit testing mode. To enter enter this mode, use the <a href="#method-test">test</a> method.</p>
</div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="option-timeout">
<h5><b>timeout</b> <u>Integer</u> <u>22222</u></h5>
<p>The global timeout for actions. Once this timeout is exceeded, the sender of the message receives an error response via the callback of the <a href="#method-act">act</a> method.</p>
</div></div>

</div>




<!-- Short method descriptions -->

<div class="cf">
<h2 class="api-subhead" id="methods"><a href="#methods" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Methods</h2>
<a class="api-back" href="#seneca-api">up</a>
</div>
<div class="row">

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="method-seneca">
<h5>
<b>Seneca</b>

<i>options?</i>

</h5>
<p>Create an instance of the Seneca object.</p>
<ul>

<li><i>options</i> :


<u>Object</u> |

<u>String</u> 


</li>

<ul>
</ul></ul></div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="method-act">
<h5>
<b>act</b>

<i>message</i>

<i>callback?</i>

</h5>
<p>Send a <i>message</i> and receive a response via the <i>callback</i>. If there is no <i>callback</i> the message is asynchronous.</p>
<ul>

<li><i>message</i> :


<u>jsonic</u> |

<u>Object</u> 


</li>

<li><i>callback</i> :


<u>Function</u> 


</li>

<ul>
</ul></ul></div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="method-add">
<h5>
<b>add</b>

<i>pattern</i>

<i>action</i>

</h5>
<p></p><p>Add an <i>action</i> function to be called when inbound messages match the <i>pattern</i>.</p><p></p>
<ul>

<li><i>pattern</i> :


<u>jsonic</u> |

<u>Object</u> 


</li>

<li><i>action</i> :


<u>Function</u> 


</li>

<ul>
</ul></ul></div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="method-client">
<h5>
<b>client</b>

<i>port?</i>

<i>host?</i>

</h5>
<p>Send outbound messages.</p>
<ul>

<li><i>port</i> :


<u>Integer</u> |

<u>String</u> 


</li>

<li><i>host</i> :


<u>String</u> 


</li>

<ul>
</ul></ul></div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="method-find">
<h5>
<b>find</b>

<i>pattern</i>

</h5>
<p>Find the unique action metadata for the given pattern. Returns null if the pattern has not been <a href="#method-add">added<a>.</a></a></p>
<ul>

<li><i>pattern</i> :


<u>Object</u> |

<u>String</u> 


</li>

<ul>
</ul></ul></div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="method-gate">
<h5>
<b>gate</b>

</h5>
<p>Enter gated mode, where all actions must complete before new actions can start. This is used to give plugin initialization a deterministic order.</p>
<ul>

<ul>
</ul></ul></div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="method-has">
<h5>
<b>has</b>

<i>pattern</i>

</h5>
<p>Returns <code>true</code> if the given pattern has been <a href="#method-add">added<a>.</a></a></p>
<ul>

<li><i>pattern</i> :


<u>Object</u> |

<u>String</u> 


</li>

<ul>
</ul></ul></div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="method-list">
<h5>
<b>list</b>

<i>pattern</i>

</h5>
<p>List all added patterns that partially match the given pattern.</p>
<ul>

<li><i>pattern</i> :


<u>Object</u> |

<u>String</u> 


</li>

<ul>
</ul></ul></div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="method-listen">
<h5>
<b>listen</b>

<i>port?</i>

<i>host?</i>

</h5>
<p>Listen for inbound messages.</p>
<ul>

<li><i>port</i> :


<u>Integer</u> |

<u>String</u> 


</li>

<li><i>host</i> :


<u>String</u> 


</li>

<ul>
</ul></ul></div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="method-log">
<h5>
<b>log</b>

<i>object</i>

</h5>
<p>Create log entries.</p>
<ul>

<li><i>object</i> :


<u>Object</u> 


</li>

<ul>
</ul></ul></div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="method-options">
<h5>
<b>options</b>

<i>object?</i>

<i>chain?</i>

</h5>
<p>Get and set options.</p>
<ul>

<li><i>object</i> :


<u>Object</u> 


</li>

<li><i>chain</i> :


<u>Boolean</u> 


</li>

<ul>
</ul></ul></div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="method-ready">
<h5>
<b>ready</b>

<i>callback</i>

</h5>
<p>Wait for plugins to initialize fully.</p>
<ul>

<li><i>callback</i> :


<u>Function</u> 


</li>

<ul>
</ul></ul></div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="method-test">
<h5>
<b>test</b>

<i>callback</i>

<i>logspec</i>

</h5>
<p>Enter <a href="/docs/tutorials/unit-testing.html">unit testing</a> mode.</p>
<ul>

<li><i>callback</i> :


<u>Function</u> 


</li>

<li><i>logspec</i> :


<u>Object</u> |

<u>String</u> 


</li>

<ul>
</ul></ul></div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="method-ungate">
<h5>
<b>ungate</b>

</h5>
<p>Exit gated mode. Actions now execute immediately and do not wait for each other. This is the default mode.</p>
<ul>

<ul>
</ul></ul></div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="method-use">
<h5>
<b>use</b>

<i>plugin</i>

<i>options?</i>

</h5>
<p>Load a plugin and use the action patterns that it defines. <a href="/docs/tutorials/how-to-write-a-plugin.html">Plugin initialization</a> must complete before further actions are executed.</p>
<ul>

<li><i>plugin</i> :


<u>String</u> |

<u>Function</u> |

<u>Object</u> 


</li>

<li><i>options</i> :


<u>Object</u> 


</li>

<ul>
</ul></ul></div></div>


</div>




<!-- Short messages descriptions -->

<div class="cf">
<h2 class="api-subhead" id="messages"><a href="#messages" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Messages</h2>
<a class="api-back" href="#seneca-api">up</a>
</div>
<div class="row">

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="message-id">
<h5><b>id</b></h5>
<p>The full message identifier, which concatenates the message and correlation identifiers.</p>
</div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="message-sync">
<h5><b>sync</b></h5>
<p>When <code>true</code> the message is synchronous, otherwise the message is asynchronous.</p>
</div></div>

</div>




<!-- Short modifier descriptions -->

<div class="cf">
<h2 class="api-subhead" id="modifiers"><a href="#modifiers" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Modifiers</h2>
<a class="api-back" href="#seneca-api">up</a>
</div>
<div class="row">

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="modifier-default">
<h5><b>default$</b></h5>
<p>If the pattern is not found, provide a default response.</p>
</div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="modifier-fatal">
<h5><b>fatal$</b></h5>
<p>Any errors in this action, or sub actions, will be fatal. Used for plugin definition and initialization.</p>
</div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="modifier-gate">
<h5><b>gate$</b></h5>
<p>This action is gated and must complete before any other actions can start.</p>
</div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="modifier-timeout">
<h5><b>timeout$</b></h5>
<p>Specify a local timeout in milliseconds for this particular action execution.</p>
</div></div>

</div>




<!-- Short plugin descriptions -->

<div class="cf">
<h2 class="api-subhead" id="plugins"><a href="#plugins" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Plugins</h2>
<a class="api-back" href="#seneca-api">up</a>
</div>
<div class="row">

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="plugin-init">
<h5><b>init</b></h5>
<p>The plugin initialization action. Executed in order deterministically with other plugin initialization actions.</p>
</div></div>

</div>





<!-- Short utilities descriptions -->

<div class="cf">
<h2 class="api-subhead" id="utilities"><a href="#utilities" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Utilities</h2>
<a class="api-back" href="#seneca-api">up</a>
</div>
<div class="row">

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="utility-clean">
<h5>
<b>clean</b>

<i>message</i>

</h5>
<p>Clean messages by removing metadata and directives. All (and only) top level property names containing a <code>$</code> character are removed.</p>
<ul>

<li><i>message</i> :


<u>Object</u> 


</li>

<ul>
</ul></ul></div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="utility-deepextend">
<h5>
<b>deepextend</b>

<i>object...</i>

</h5>
<p>Combine the listed objects into one new object, overwriting properties from right to left.</p>
<ul>

<li><i>object...</i> :


<u>Object</u> 


</li>

<ul>
</ul></ul></div></div>

<div class="col-xs-12 col-sm-4"><div class="api-box" data-api-box-ref="utility-pattern">
<h5>
<b>pattern</b>

<i>object</i>

</h5>
<p>Convert a pattern object into a normalized jsonic String.</p>
<ul>

<li><i>object</i> :


<u>Object</u> 


</li>

<ul>
</ul></ul></div></div>


</div>




<div class="api-vs"></div>
<!-- Full instance descriptions -->


<div class="cf">
<h2 class="api-subhead" id="instance-id"><a href="#instance-id" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Instance: <b>id</b></h2>
<a class="api-back" href="#instance">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<h4>Description</h4>
<p class="desc">The unique identifier string of this Seneca instance.</p>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">var seneca = require(&apos;seneca&apos;)()

// Prints the instance identifier string.
console.log(seneca.id)</code></pre>



</div></div>

<div class="cf">
<h2 class="api-subhead" id="instance-start_time"><a href="#instance-start_time" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Instance: <b>start_time</b></h2>
<a class="api-back" href="#instance">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<h4>Description</h4>
<p class="desc">The start time (in local milliseconds) of this Seneca instance.</p>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">var seneca = require(&apos;seneca&apos;)()

// Prints the start time of the instance in local milliseconds.
console.log(seneca.start_time)</code></pre>



</div></div>

<div class="cf">
<h2 class="api-subhead" id="instance-tag"><a href="#instance-tag" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Instance: <b>tag</b></h2>
<a class="api-back" href="#instance">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<h4>Description</h4>
<p class="desc">The tag string of this Seneca instance, defined by the <a href="#option-tag">tag</a> option.</p>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">var seneca = require(&apos;seneca&apos;)({tag: &apos;foo&apos;})

// Prints the tag string of the instance.
console.log(seneca.tag)</code></pre>



</div></div>

<div class="cf">
<h2 class="api-subhead" id="instance-util"><a href="#instance-util" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Instance: <b>util</b></h2>
<a class="api-back" href="#instance">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<h4>Description</h4>
<p class="desc">A namespace object for the <a href="#utilities">utility</a> functions.</p>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">var seneca = require(&apos;seneca&apos;)()

// Prints the utility functions.
console.log(seneca.util)</code></pre>



</div></div>

<div class="cf">
<h2 class="api-subhead" id="instance-version"><a href="#instance-version" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Instance: <b>version</b></h2>
<a class="api-back" href="#instance">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<h4>Description</h4>
<p class="desc">The current version of Seneca.</p>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">var seneca = require(&apos;seneca&apos;)()

// Prints the version of the Seneca instance.
console.log(seneca.version)</code></pre>



</div></div>





<div class="api-vs"></div>
<!-- Full option descriptions -->


<div class="cf">
<h2 class="api-subhead" id="option-debug"><a href="#option-debug" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Option: <b>debug</b></h2>
<a class="api-back" href="#options">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<ul>

<li><u>Object</u>, <u>{...}</u></li>

</ul>

<h4>Description</h4>
<p class="desc">Namespace object for options related to debugging. They should all be <code>false</code> for production deployments.</p>


<h4>Sub-options</h4>
<table>

<tr>
  <td><i>deprecation</i></td>
  <td>

    <u>Boolean</u>

  </td>
  <td title="Default value."><u>true</u></td>
  <td>Deprecation warnings are logged at the debug level. Should be <code>false</code> in production. You should update your code.</td>
</tr>

<tr>
  <td><i>undead</i></td>
  <td>

    <u>Boolean</u>

  </td>
  <td title="Default value."><u>false</u></td>
  <td>When <code>true</code>, fatal errors will not exit the process. Should only be used for debugging, and fatal errors are fatal because they leave Seneca in an indeterminate invalid state.</td>
</tr>

</table>





<h4>Example</h4>
<pre><code class="lang-js hljs javascript">require(&apos;seneca&apos;)({

  // Set option via Seneca constructor.
  debug: {
    undead: true
  }
})

  // Test mode has easy to read logs.
  .test() 

  // Normally, this would be fatal, but with debug.undead = true,
  // you get error logs instead.
  .use(function bad_plugin () {
    throw new Error(&apos;plugin definition failed&apos;)
  })

  // Add a deprecated action pattern.
  .add(&apos;a:1,deprecate$:&quot;a:1 is too old&quot;&apos;, function (msg, reply) {reply()})

  // As debug.deprecation is true by default, you get a deprecation log entry:
  // 232/zq	act/DEPRECATED	ic/rt		{a:1}	a:1 is too old
  .act(&apos;a:1&apos;)

  // Wait for above actions to complete before changing options.
  .ready(function () {
    this
      .options({debug: {deprecation: false}}, true) // (true =&gt; chainable)

    // Now, no warnings are logged.
      .act(&apos;a:1&apos;)
  })</code></pre>



</div></div>

<div class="cf">
<h2 class="api-subhead" id="option-plugin"><a href="#option-plugin" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Option: <b>plugin</b></h2>
<a class="api-back" href="#options">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<ul>

<li><u>Object</u>, <u>{...}</u></li>

</ul>

<h4>Description</h4>
<p class="desc">Namespace for plugin options. Once loaded, plugin options are stored here for ease of shared access.</p>






<h4>Example</h4>
<pre><code class="lang-js hljs javascript">// The foo plugin
function foo (options) {

  // Prints: hello Mars
  console.log(&apos;hello &apos;+options.hello)

  // Prints: bye Earth
  console.log(&apos;bye &apos;+options.bye)

  // A plugin can change its own options
  this.options({
    plugin: {
      foo: {
        why: &apos;wait&apos;
      }
    }
  })
}

require(&apos;seneca&apos;)({

  // Namespace for plugin options.
  plugin: {

    // Preset options for the foo plugin.
    foo: {
      hello: &apos;Mars&apos;
    }
  }
})

  // Define the foo plugin
  .use(foo, {
    bye: &apos;Earth&apos;
  })

  .ready(function () {
    // Prints: { why: &apos;wait&apos;, hello: &apos;moon&apos;, bye: &apos;earth&apos; }
    console.log(this.options().plugin.foo)
  })</code></pre>



</div></div>

<div class="cf">
<h2 class="api-subhead" id="option-strict"><a href="#option-strict" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Option: <b>strict</b></h2>
<a class="api-back" href="#options">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<ul>

<li><u>Object</u>, <u>{...}</u></li>

</ul>

<h4>Description</h4>
<p class="desc">Namespace object for options related to strict behaviors. Mostly this is for backwards compatibility with older versions of Seneca that were not as strict.</p>


<h4>Sub-options</h4>
<table>

<tr>
  <td><i>result</i></td>
  <td>

    <u>Boolean</u>

  </td>
  <td title="Default value."><u>true</u></td>
  <td>The result provided by an action must be an Object or an Array that can be fully serialized to JSON. When <code>false</code> scalar values (Strings, Numbers, etc) are permitted. Use only to keep old code working while you migrate.</td>
</tr>

</table>





<h4>Example</h4>
<pre><code class="lang-js hljs javascript">require(&apos;seneca&apos;)({

  // Namespace for strict options.
  strict: {

    // Allow results to be non-Objects.
    result: false 
  }
})

  .add(&apos;a:1&apos;, function (msg, reply) {

    // Normally, this would fail, as the response is not an Object.
    reply(&apos;Hi there!&apos;)
  })

  // Prints null Hi There!
  .act(&apos;a:1&apos;, console.log)</code></pre>



</div></div>

<div class="cf">
<h2 class="api-subhead" id="option-tag"><a href="#option-tag" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Option: <b>tag</b></h2>
<a class="api-back" href="#options">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<ul>

<li><u>String</u>, <u>&quot;-&quot;</u></li>

</ul>

<h4>Description</h4>
<p class="desc">Tag the Seneca instance with a short code that will be added to the instance identifier. Useful for tracing and debugging.</p>




<h4>Details</h4>

<p>
The <b>tag</b> value is a free form String that is appended to the end of the Seneca identifier. It is not meant to be a unique value. You use it identify groups of microservices.
</p>
<p>
The public member variable <code>Seneca.tag</code> can be used to retrieve the tag value.
</p>
   



<h4>Example</h4>
<pre><code class="lang-js hljs javascript">var seneca = require(&apos;seneca&apos;)({tag: &apos;foo&apos;})

// prints foo
console.log(seneca.tag)

// prints .../foo
console.log(seneca.id)</code></pre>



</div></div>

<div class="cf">
<h2 class="api-subhead" id="option-test"><a href="#option-test" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Option: <b>test</b></h2>
<a class="api-back" href="#options">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<ul>

<li><u>Boolean</u>, <u>false</u></li>

</ul>

<h4>Description</h4>
<p class="desc">When <code>true</code> Seneca is in unit testing mode. To enter enter this mode, use the <a href="#method-test">test</a> method.</p>






<h4>Example</h4>
<pre><code class="lang-js hljs javascript">var Seneca = require(&apos;seneca&apos;)

function unit_test(done) {
  var seneca = Seneca().test(done)

  // prints true
  console.log(true === seneca.options().test)

  seneca
    .add(&apos;a:1&apos;, function () { 
      throw new Error(&apos;failed!&apos;) 
    })
    .act(&apos;a:1&apos;)
}

// prints lots of error information
unit_test(console.log)</code></pre>



</div></div>

<div class="cf">
<h2 class="api-subhead" id="option-timeout"><a href="#option-timeout" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Option: <b>timeout</b></h2>
<a class="api-back" href="#options">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<ul>

<li><u>Integer</u>, <u>22222</u></li>

</ul>

<h4>Description</h4>
<p class="desc">The global timeout for actions. Once this timeout is exceeded, the sender of the message receives an error response via the callback of the <a href="#method-act">act</a> method.</p>






<h4>Example</h4>
<pre><code class="lang-js hljs javascript">require(&apos;seneca&apos;)({

  // Change global timeout to 1000 milliseconds.
  timeout: 1000
})

  // Add an action pattern that takes at least 2000 milliseconds.
  .add(&apos;a:1&apos;, function (msg, reply) {
    setTimeout(function () {
      reply({z: msg.z})
    }, 2000)
  })

  // Times out and prints an error, as 1000 &lt; 2000 milliseconds.
  .act(&apos;a:1, z:never&apos;, console.log)

  // Override the global timeout with the timeout$ directive.
  // This message works fine and prints a result:
  .act(&apos;a:1, z:works, timeout$:3000&apos;, console.log)</code></pre>



</div></div>





<div class="api-vs"></div>
<!-- Full method descriptions -->


<div class="cf">
  <h2 class="api-subhead" id="method-seneca"><a href="#method-seneca" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Method: <b>Seneca</b></h2>
  <a class="api-back" href="#methods">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<p>Create an instance of the Seneca object.</p>

<h4>Signatures</h4>
<ul>

<li><b>Seneca</b> &#xA0;&#xA0;

<i>options</i> 

</li>

</ul>

<h4>Parameters</h4>
<table>

<tr>
  <td><i>options</i></td>
  <td>

    <u>Object</u>|

    <u>String</u>

  <small>(optional)</small>
  </td>
  <td></td>
</tr>

</table>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">var Seneca = require(&apos;seneca&apos;)

var senecaA = Seneca()

var senecaB = Seneca({tag: &apos;foo&apos;})</code></pre>



</div></div>

<div class="cf">
  <h2 class="api-subhead" id="method-act"><a href="#method-act" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Method: <b>act</b></h2>
  <a class="api-back" href="#methods">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<p>Send a <i>message</i> and receive a response via the <i>callback</i>. If there is no <i>callback</i> the message is asynchronous.</p>

<h4>Signatures</h4>
<ul>

<li><b>act</b> &#xA0;&#xA0;

<i>message</i>, 

<i>callback</i> 

</li>

<li><b>act</b> &#xA0;&#xA0;

<i>message</i>, 

<i>sub_message</i>, 

<i>callback</i> 

</li>

</ul>

<h4>Parameters</h4>
<table>

<tr>
  <td><i>message</i></td>
  <td>

    <u>jsonic</u>|

    <u>Object</u>

  <small></small>
  </td>
  <td>The pattern that inbound messages must match to trigger this action.</td>
</tr>

<tr>
  <td><i>sub_message</i></td>
  <td>

    <u>Object</u>

  <small>(optional)</small>
  </td>
  <td>A convenience parameter that is merged into the <i>message</i> parameter with lower precedence.</td>
</tr>

<tr>
  <td><i>callback</i></td>
  <td>

    <u>Function</u>

  <small>(optional)</small>
  </td>
  <td>The function that executes the action for this pattern.</td>
</tr>

</table>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">require(&apos;seneca&apos;)()

  // Add an action for pattern a:1,b:2.
  .add({a: 1, b: 2}, function (msg, reply) {
    reply({z: msg.z})
  })

  // Use a jsonic String as the message. Prints: null { z: 9 }
  .act(&apos;a:1,b:2,z:9&apos;, console.log)

  // Use an Object as the message. Prints: null { z: 9 }
  .act({a: 1, b: 2, z: 9}, console.log)

  // Merge a jsonic String and an Object to form the message. Prints: null { z: 9 }
  .act(&apos;a:1,b:2&apos;, {z: 9}, console.log)

  // Merge two Objects. Precedence is left to right. Prints: null { z: 9 }
  .act({a: 1, b: 2}, {b: 3, z: 9}, console.log)</code></pre>



</div></div>

<div class="cf">
  <h2 class="api-subhead" id="method-add"><a href="#method-add" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Method: <b>add</b></h2>
  <a class="api-back" href="#methods">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<p></p><p>Add an <i>action</i> function to be called when inbound messages match the <i>pattern</i>.</p><p></p>

<h4>Signatures</h4>
<ul>

<li><b>add</b> &#xA0;&#xA0;

<i>pattern</i>, 

<i>action</i> 

</li>

<li><b>add</b> &#xA0;&#xA0;

<i>pattern</i>, 

<i>sub_pattern</i>, 

<i>action</i> 

</li>

</ul>

<h4>Parameters</h4>
<table>

<tr>
  <td><i>pattern</i></td>
  <td>

    <u>jsonic</u>|

    <u>Object</u>

  <small></small>
  </td>
  <td>The pattern that inbound messages must match to trigger this action.</td>
</tr>

<tr>
  <td><i>sub_pattern</i></td>
  <td>

    <u>Object</u>

  <small>(optional)</small>
  </td>
  <td>A convenience parameter that is merged into the <i>pattern</i> parameter with lower precedence.</td>
</tr>

<tr>
  <td><i>action</i></td>
  <td>

    <u>Function</u>

  <small></small>
  </td>
  <td>The function that executes the action for this pattern.</td>
</tr>

</table>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">require(&apos;seneca&apos;)()

  // Add an action for pattern a:1 using an object to define the pattern.
  .add({a: 1}, function (msg, reply) {
    reply({z: msg.z})
  })

  // Add an action for pattern a:2, using a jsonic String to define the pattern.
  .add(&apos;a:2&apos;, function (msg, reply) {
    reply({y: msg.y})
  })

  // Add an action for pattern a:3,b:4, merging a jsonic String and an Object to
  // define the pattern. Precedence is left to right.
  .add(&apos;a:3&apos;, {a:1, b: 4}, function (msg, reply) {
    reply({x: msg.x})
  })


  // Prints: null { z: &apos;A&apos; }
  .act(&apos;a:1,z:A&apos;, console.log)

  // Prints: null { y: &apos;B&apos; }
  .act(&apos;a:2,y:B&apos;, console.log)

  // Prints: null { x: &apos;C&apos; }
  .act(&apos;a:3,b:4,x:C&apos;, console.log)</code></pre>



</div></div>

<div class="cf">
  <h2 class="api-subhead" id="method-client"><a href="#method-client" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Method: <b>client</b></h2>
  <a class="api-back" href="#methods">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<p>Send outbound messages.</p>

<h4>Signatures</h4>
<ul>

<li><b>client</b> &#xA0;&#xA0;

<i>port</i>, 

<i>host</i> 

</li>

<li><b>client</b> &#xA0;&#xA0;

<i>object</i> 

</li>

</ul>

<h4>Parameters</h4>
<table>

<tr>
  <td><i>port</i></td>
  <td>

    <u>Integer</u>|

    <u>String</u>

  <small>(optional)</small>
  </td>
  <td></td>
</tr>

<tr>
  <td><i>host</i></td>
  <td>

    <u>String</u>

  <small>(optional)</small>
  </td>
  <td></td>
</tr>

</table>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">var Seneca = require(&apos;seneca&apos;)

// Create server. Hide logging noise.
Seneca({log:&apos;silent&apos;})

  // Define some action patterns.

  .add({a: 1}, function (msg, reply) {
    reply({z: msg.z})
  })

  .add({b: 1}, function (msg, reply) {
    reply({y: msg.y})
  })


  // Define an action pattern that fails.
  .add({a: 2}, function (msg, reply) {
    reply(new Error(&apos;bad&apos;))
  })


  // Listen on localhost:9000 for any messages
  .listen(9000)

  // Listen on localhost:9001 for any messages that match b:1
  .listen({port: 9001, pin: &apos;b:1&apos;})


// Create client. Hide logging noise.
Seneca({log:&apos;silent&apos;})

  // Define a local action.
  .add({c: 1}, function (msg, reply) {
    reply({x: msg.x})
  })


  // Send any unrecognized messages to localhost:9000     
  .client(9000)

  // Send any messages that match b:1 to localhost:9001     
  .client({port: 9001, pin: &apos;b:1&apos;})


  // Executes remotely. Prints: { z: &apos;A&apos; }
  .act(&apos;a:1,z:A&apos;, Seneca.util.print)

  // Executes remotely. Prints: ERROR: seneca: Action a:2 failed: bad.
  .act(&apos;a:2&apos;, Seneca.util.print)

  // Executes remotely. Prints: { y: &apos;B&apos; }
  .act(&apos;b:1,y:B&apos;, Seneca.util.print)

  // Executes locally. Prints: { x: &apos;C&apos; }
  .act(&apos;c:1,x:C&apos;, Seneca.util.print)</code></pre>



</div></div>

<div class="cf">
  <h2 class="api-subhead" id="method-find"><a href="#method-find" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Method: <b>find</b></h2>
  <a class="api-back" href="#methods">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<p>Find the unique action metadata for the given pattern. Returns null if the pattern has not been <a href="#method-add">added<a>.</a></a></p>

<h4>Signatures</h4>
<ul>

<li><b>find</b> &#xA0;&#xA0;

<i>pattern</i> 

</li>

</ul>

<h4>Parameters</h4>
<table>

<tr>
  <td><i>pattern</i></td>
  <td>

    <u>Object</u>|

    <u>String</u>

  <small></small>
  </td>
  <td></td>
</tr>

</table>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">var seneca = require(&apos;seneca&apos;)()
  .add(&apos;a:1&apos;, function (msg, reply) { reply() })
  .add(&apos;b:1&apos;, function (msg, reply) { reply() })

// Exact match. Prints: action metadata
console.log(seneca.find(&apos;a:1&apos;))

// Exact match. Prints: action metadata
console.log(seneca.find(&apos;b:1&apos;))

// Not found. Prints: null
console.log(seneca.find(&apos;c:1&apos;))</code></pre>



</div></div>

<div class="cf">
  <h2 class="api-subhead" id="method-gate"><a href="#method-gate" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Method: <b>gate</b></h2>
  <a class="api-back" href="#methods">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<p>Enter gated mode, where all actions must complete before new actions can start. This is used to give plugin initialization a deterministic order.</p>

<h4>Signatures</h4>
<ul>

<li><b>gate</b> &#xA0;&#xA0;

</li>

</ul>

<h4>Parameters</h4>
<table>

</table>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">var Seneca = require(&apos;seneca&apos;)

Seneca()
  .test(console.log, &apos;print&apos;)

  .add(&apos;a:1&apos;, function (msg, reply) { 
    setTimeout(function () {
      reply({z: msg.z}) 
    }, 100)
  })

  .add(&apos;b:1&apos;, function (msg, reply) { 
    setTimeout(function () {
      reply({y: msg.y}) 
    }, 100)
  })

  // Wait for initialization log entries to print
  .ready(function () {

    this
      .gate()

      .act(&apos;a:1,z:A&apos;, Seneca.util.print)
      .act(&apos;b:1,y:B&apos;, Seneca.util.print)

      .ungate()

      .act(&apos;a:1,z:AA&apos;, Seneca.util.print)
      .act(&apos;b:1,y:BB&apos;, Seneca.util.print)
  })</code></pre>



</div></div>

<div class="cf">
  <h2 class="api-subhead" id="method-has"><a href="#method-has" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Method: <b>has</b></h2>
  <a class="api-back" href="#methods">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<p>Returns <code>true</code> if the given pattern has been <a href="#method-add">added<a>.</a></a></p>

<h4>Signatures</h4>
<ul>

<li><b>has</b> &#xA0;&#xA0;

<i>pattern</i> 

</li>

</ul>

<h4>Parameters</h4>
<table>

<tr>
  <td><i>pattern</i></td>
  <td>

    <u>Object</u>|

    <u>String</u>

  <small></small>
  </td>
  <td></td>
</tr>

</table>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">var seneca = require(&apos;seneca&apos;)()
  .add(&apos;a:1&apos;, function (msg, reply) { reply() })
  .add(&apos;b:1&apos;, function (msg, reply) { reply() })

// Exact match. Prints: true
console.log(seneca.has(&apos;a:1&apos;))

// Exact match. Prints: true
console.log(seneca.has(&apos;b:1&apos;))

// Not found. Prints: false
console.log(seneca.has(&apos;c:1&apos;))</code></pre>



</div></div>

<div class="cf">
  <h2 class="api-subhead" id="method-list"><a href="#method-list" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Method: <b>list</b></h2>
  <a class="api-back" href="#methods">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<p>List all added patterns that partially match the given pattern.</p>

<h4>Signatures</h4>
<ul>

<li><b>list</b> &#xA0;&#xA0;

<i>pattern</i> 

</li>

</ul>

<h4>Parameters</h4>
<table>

<tr>
  <td><i>pattern</i></td>
  <td>

    <u>Object</u>|

    <u>String</u>

  <small></small>
  </td>
  <td></td>
</tr>

</table>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">var seneca = require(&apos;seneca&apos;)()
  .add(&apos;a:1&apos;, function (msg, reply) { reply() })
  .add(&apos;a:2&apos;, function (msg, reply) { reply() })
  .add(&apos;a:1,b:1&apos;, function (msg, reply) { reply() })

// Partial match. Prints: [ { a: &apos;1&apos; }, { a: &apos;1&apos;, b: &apos;1&apos; } ]
console.log(seneca.list(&apos;a:1&apos;))

// Partial match. Prints: [ { a: &apos;1&apos;, b: &apos;1&apos; } ]
console.log(seneca.list(&apos;b:1&apos;))

// None. Prints: []
console.log(seneca.list(&apos;c:1&apos;))</code></pre>



</div></div>

<div class="cf">
  <h2 class="api-subhead" id="method-listen"><a href="#method-listen" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Method: <b>listen</b></h2>
  <a class="api-back" href="#methods">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<p>Listen for inbound messages.</p>

<h4>Signatures</h4>
<ul>

<li><b>listen</b> &#xA0;&#xA0;

<i>port</i>, 

<i>host</i> 

</li>

<li><b>listen</b> &#xA0;&#xA0;

<i>object</i> 

</li>

</ul>

<h4>Parameters</h4>
<table>

<tr>
  <td><i>port</i></td>
  <td>

    <u>Integer</u>|

    <u>String</u>

  <small>(optional)</small>
  </td>
  <td></td>
</tr>

<tr>
  <td><i>host</i></td>
  <td>

    <u>String</u>

  <small>(optional)</small>
  </td>
  <td></td>
</tr>

</table>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">var Seneca = require(&apos;seneca&apos;)

// Create server. Hide logging noise.
Seneca({log:&apos;silent&apos;})

  // Define some action patterns.

  .add({a: 1}, function (msg, reply) {
    reply({z: msg.z})
  })

  .add({b: 1}, function (msg, reply) {
    reply({y: msg.y})
  })


  // Define an action pattern that fails.
  .add({a: 2}, function (msg, reply) {
    reply(new Error(&apos;bad&apos;))
  })


  // Listen on localhost:9000 for any messages
  .listen(9000)

  // Listen on localhost:9001 for any messages that match b:1
  .listen({port: 9001, pin: &apos;b:1&apos;})


// Create client. Hide logging noise.
Seneca({log:&apos;silent&apos;})

  // Define a local action.
  .add({c: 1}, function (msg, reply) {
    reply({x: msg.x})
  })


  // Send any unrecognized messages to localhost:9000     
  .client(9000)

  // Send any messages that match b:1 to localhost:9001     
  .client({port: 9001, pin: &apos;b:1&apos;})


  // Executes remotely. Prints: { z: &apos;A&apos; }
  .act(&apos;a:1,z:A&apos;, Seneca.util.print)

  // Executes remotely. Prints: ERROR: seneca: Action a:2 failed: bad.
  .act(&apos;a:2&apos;, Seneca.util.print)

  // Executes remotely. Prints: { y: &apos;B&apos; }
  .act(&apos;b:1,y:B&apos;, Seneca.util.print)

  // Executes locally. Prints: { x: &apos;C&apos; }
  .act(&apos;c:1,x:C&apos;, Seneca.util.print)</code></pre>



</div></div>

<div class="cf">
  <h2 class="api-subhead" id="method-log"><a href="#method-log" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Method: <b>log</b></h2>
  <a class="api-back" href="#methods">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<p>Create log entries.</p>

<h4>Signatures</h4>
<ul>

<li><b>log</b> &#xA0;&#xA0;

<i>object</i> 

</li>

</ul>

<h4>Parameters</h4>
<table>

<tr>
  <td><i>object</i></td>
  <td>

    <u>Object</u>

  <small></small>
  </td>
  <td></td>
</tr>

</table>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">var Seneca = require(&apos;seneca&apos;)

var seneca = Seneca()

seneca.log({level:&apos;info&apos;, foo: 1})

seneca.log.info({foo: 2})</code></pre>



</div></div>

<div class="cf">
  <h2 class="api-subhead" id="method-options"><a href="#method-options" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Method: <b>options</b></h2>
  <a class="api-back" href="#methods">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<p>Get and set options.</p>

<h4>Signatures</h4>
<ul>

<li><b>options</b> &#xA0;&#xA0;

<i>object</i>, 

<i>chain</i> 

</li>

</ul>

<h4>Parameters</h4>
<table>

<tr>
  <td><i>object</i></td>
  <td>

    <u>Object</u>

  <small>(optional)</small>
  </td>
  <td></td>
</tr>

<tr>
  <td><i>chain</i></td>
  <td>

    <u>Boolean</u>

  <small>(optional)</small>
  </td>
  <td></td>
</tr>

</table>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">var Seneca = require(&apos;seneca&apos;)

var seneca = Seneca({foo:1})

// Prints: 1
console.log(seneca.options().foo)

seneca.options({foo: 2, bar: 3})

// Prints: 2
console.log(seneca.options().foo)

// Prints: 3
console.log(seneca.options().bar)</code></pre>



</div></div>

<div class="cf">
  <h2 class="api-subhead" id="method-ready"><a href="#method-ready" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Method: <b>ready</b></h2>
  <a class="api-back" href="#methods">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<p>Wait for plugins to initialize fully.</p>

<h4>Signatures</h4>
<ul>

<li><b>ready</b> &#xA0;&#xA0;

<i>callback</i> 

</li>

</ul>

<h4>Parameters</h4>
<table>

<tr>
  <td><i>callback</i></td>
  <td>

    <u>Function</u>

  <small></small>
  </td>
  <td></td>
</tr>

</table>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">require(&apos;seneca&apos;)()

  // Define the foo plugin
  .use(function foo () {
    
    // The special initialization action, which is automatically gated.
    this.add(&apos;init:foo&apos;, function (msg, reply) {
      setTimeout(reply, 100)
    })
  })

  // Define the bar plugin
  .use(function bar () {
    
    // The special initialization action, which is automatically gated.
    this.add(&apos;init:bar&apos;, function (msg, reply) {
      setTimeout(reply, 100)
    })
  })

  // Called once foo and bar initialization is complete.
  .ready(function () {
    console.log(&apos;Seneca ready!&apos;)
  })</code></pre>



</div></div>

<div class="cf">
  <h2 class="api-subhead" id="method-test"><a href="#method-test" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Method: <b>test</b></h2>
  <a class="api-back" href="#methods">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<p>Enter <a href="/docs/tutorials/unit-testing.html">unit testing</a> mode.</p>

<h4>Signatures</h4>
<ul>

<li><b>test</b> &#xA0;&#xA0;

<i>callback</i>, 

<i>logspec</i> 

</li>

</ul>

<h4>Parameters</h4>
<table>

<tr>
  <td><i>callback</i></td>
  <td>

    <u>Function</u>

  <small></small>
  </td>
  <td></td>
</tr>

<tr>
  <td><i>logspec</i></td>
  <td>

    <u>Object</u>|

    <u>String</u>

  <small></small>
  </td>
  <td></td>
</tr>

</table>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">var seneca = require(&apos;seneca&apos;)()
      .test(console.log, &apos;print&apos;)

      .add(&apos;a:1&apos;, function (msg, reply) { 
        reply() 
      })

      .add(&apos;b:1&apos;, function (msg, reply) { 
        reply(new Error(&apos;bad&apos;)) 
      })

      .act(&apos;a:1&apos;)
      .act(&apos;b:1&apos;)</code></pre>



</div></div>

<div class="cf">
  <h2 class="api-subhead" id="method-ungate"><a href="#method-ungate" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Method: <b>ungate</b></h2>
  <a class="api-back" href="#methods">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<p>Exit gated mode. Actions now execute immediately and do not wait for each other. This is the default mode.</p>

<h4>Signatures</h4>
<ul>

<li><b>ungate</b> &#xA0;&#xA0;

</li>

</ul>

<h4>Parameters</h4>
<table>

</table>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">var Seneca = require(&apos;seneca&apos;)

Seneca()
  .test(console.log, &apos;print&apos;)

  .add(&apos;a:1&apos;, function (msg, reply) { 
    setTimeout(function () {
      reply({z: msg.z}) 
    }, 100)
  })

  .add(&apos;b:1&apos;, function (msg, reply) { 
    setTimeout(function () {
      reply({y: msg.y}) 
    }, 100)
  })

  // Wait for initialization log entries to print
  .ready(function () {

    this
      .gate()

      .act(&apos;a:1,z:A&apos;, Seneca.util.print)
      .act(&apos;b:1,y:B&apos;, Seneca.util.print)

      .ungate()

      .act(&apos;a:1,z:AA&apos;, Seneca.util.print)
      .act(&apos;b:1,y:BB&apos;, Seneca.util.print)
  })</code></pre>



</div></div>

<div class="cf">
  <h2 class="api-subhead" id="method-use"><a href="#method-use" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Method: <b>use</b></h2>
  <a class="api-back" href="#methods">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<p>Load a plugin and use the action patterns that it defines. <a href="/docs/tutorials/how-to-write-a-plugin.html">Plugin initialization</a> must complete before further actions are executed.</p>

<h4>Signatures</h4>
<ul>

<li><b>use</b> &#xA0;&#xA0;

<i>plugin</i>, 

<i>options</i> 

</li>

</ul>

<h4>Parameters</h4>
<table>

<tr>
  <td><i>plugin</i></td>
  <td>

    <u>String</u>|

    <u>Function</u>|

    <u>Object</u>

  <small></small>
  </td>
  <td>The plugin definition is either: the name of a module; a file path; an initialization function; or a metadata object.</td>
</tr>

<tr>
  <td><i>options</i></td>
  <td>

    <u>Object</u>

  <small>(optional)</small>
  </td>
  <td>The options that control the plugin&apos;s behavior. These are placed under the property path <code>plugin.&lt;plugin-name&gt;</code> in the Seneca <a href="#option-plugin">options</a> object.</td>
</tr>

</table>





</div></div>





<!-- Full plugin descriptions -->
<div class="api-vs"></div>


<div class="cf">
  <h2 class="api-subhead" id="plugin-init"><a href="#plugin-init" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Plugin: <b>init</b></h2>
  <a class="api-back" href="#plugins">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<h4>Description</h4>
<p class="desc">The plugin initialization action. Executed in order deterministically with other plugin initialization actions.</p>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">require(&apos;seneca&apos;)()

  // Define the foo plugin
  .use(function foo () {
    
    // An external resource that takes time to initialize.
    var resource

    // An action that depends on the resource.
    this.add(&apos;a:1&apos;, function(msg, reply) {
      reply({z: resource[msg.z]})
    })

    // The special initialization action, which is automatically gated.
    this.add(&apos;init:foo&apos;, function (msg, reply) {
      setTimeout(function () {

        resource = {
          0: &apos;A&apos;
        }

        reply()
      }, 100)
    })
  })

  // Define the bar plugin
  .use(function bar (options) {
    
    // This init action will wait for the foo init action to complete.
    // Plugins initiate in the order they are defined.
    this.add(&apos;init:bar&apos;, function (msg, reply) {
      var seneca = this

      setTimeout(function () {

        // Delayed definition of an action.
        seneca.add(&apos;b:2&apos;, function(msg, reply) {
          reply({y: options.y[msg.y]})
        })

        reply()
      }, 100)
    })
  }, {

    // The options for the bar plugin
    y: {
      0: &apos;B&apos;
    }
  })


  // These actions are gated until the plugin init actions are complete.

  // Prints: null { z: &apos;A&apos; }
  .act(&apos;a:1,z:0&apos;, console.log)

  // Prints: null { y: &apos;B&apos; }
  .act(&apos;b:2,y:0&apos;, console.log)</code></pre>



</div></div>





<!-- Full messages descriptions -->
<div class="api-vs"></div>


<div class="cf">
<h2 class="api-subhead" id="message-id"><a href="#message-id" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Message: <b>id</b></h2>
<a class="api-back" href="#messages">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<h4>Description</h4>
<p class="desc">The full message identifier, which concatenates the message and correlation identifiers.</p>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">require(&apos;seneca&apos;)()
  .add(&apos;a:1&apos;, function (msg, reply) {

    // Prints message identifier in format
    // message-id/correlation-id
    console.log(msg.meta$.id)

    reply()
  })
  .act(&apos;a:1&apos;)</code></pre>



</div></div>

<div class="cf">
<h2 class="api-subhead" id="message-sync"><a href="#message-sync" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Message: <b>sync</b></h2>
<a class="api-back" href="#messages">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<h4>Description</h4>
<p class="desc">When <code>true</code> the message is synchronous, otherwise the message is asynchronous.</p>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">require(&apos;seneca&apos;)()
  .add(&apos;a:1&apos;, function (msg, reply) {

    console.log(msg.z+&apos; is synchronous: &apos;+msg.meta$.sync)

    if (msg.meta$.sync) {
      reply({z: msg.z})
    }
    else {
      // You must always call the reply function even when there is no response
      // data, as this lets Seneca know that the action is complete.
      reply()
    }
  })

  // Omitting the callback makes a message asynchronous.
  // Prints: 0 is synchronous: false
  .act(&apos;a:1,z:0&apos;)

  // Providing the callback makes a message synchronous.
  // Prints: 1 is synchronous: true
  .act(&apos;a:1,z:1&apos;, console.log)</code></pre>



</div></div>




<!-- Full modifiers descriptions -->
<div class="api-vs"></div>


<div class="cf">
<h2 class="api-subhead" id="modifier-default"><a href="#modifier-default" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Modifier: <b>default$</b></h2>
<a class="api-back" href="#modifiers">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<h4>Description</h4>
<p class="desc">If the pattern is not found, provide a default response.</p>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">require(&apos;seneca&apos;)({

  // run in quiet mode to reduce logging distraction
  log: &apos;silent&apos;
})

  .add(&apos;a:1&apos;, function (msg, reply) {
    reply({z: msg.z})
  })

  // Prints: null { z: 0 }
  .act(&apos;a:1, z:0&apos;, console.log)

  // Prints an error
  .act(&apos;a:2, z:1&apos;, console.log)

  // Prints: null { z: 9 }
  .act(&apos;a:2, z:2, default$:{z:9}&apos;, console.log)</code></pre>



</div></div>

<div class="cf">
<h2 class="api-subhead" id="modifier-fatal"><a href="#modifier-fatal" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Modifier: <b>fatal$</b></h2>
<a class="api-back" href="#modifiers">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<h4>Description</h4>
<p class="desc">Any errors in this action, or sub actions, will be fatal. Used for plugin definition and initialization.</p>


<h4>Details</h4>
<p>When this modifier is <code>true</code>, Seneca will terminate the Node.js process if an error occurs inside an action, or any actions that that action calls. This prevents a Seneca microservice from continuing to run when a plugin has failed to start up correctly.</p><p>For example, if an entity plugin cannot connect to the database, the microservice is not functional, and should die.</p><p>On death, Seneca will print out a detailed error message including summary information about the current process.</p>



<h4>Example</h4>
<pre><code class="lang-js hljs javascript">require(&apos;seneca&apos;)()

  // Add an action pattern that fails
  .add(&apos;a:1&apos;, function (msg, reply) {
    throw new Error(&apos;something bad happened&apos;)
  })

  // Logs an error, but Seneca process does not die
  .act(&apos;a:1&apos;)

  // Seneca causes Node.js process to die
  .act(&apos;a:1, fatal$:true&apos;)

// BUT - you can disable this for testing
require(&apos;seneca&apos;)({debug: {undead: true}})

  .add(&apos;a:1&apos;, function (msg, reply) {
    throw new Error(&apos;something bad happened&apos;)
  })

  // Now Seneca won&apos;t die
  .act(&apos;a:1, fatal$:true&apos;)</code></pre>



</div></div>

<div class="cf">
<h2 class="api-subhead" id="modifier-gate"><a href="#modifier-gate" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Modifier: <b>gate$</b></h2>
<a class="api-back" href="#modifiers">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<h4>Description</h4>
<p class="desc">This action is gated and must complete before any other actions can start.</p>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">require(&apos;seneca&apos;)()

  .add(&apos;a:1&apos;, function (msg, reply) {
    console.log(&apos;STARTING: &apos;+msg.z)

    setTimeout(function () {
      reply({z: msg.z})
    }, 100)
  })

  .act(&apos;a:1, z:0&apos;, console.log)
  .act(&apos;a:1, z:1, gate$:true&apos;, console.log)
  .act(&apos;a:1, z:2&apos;, console.log)

// Prints:
// STARTING: 0
// STARTING: 1   &lt;- z:1 does not have to wait for z:0
// null { z: 0 }
// null { z: 1 }
// STARTING: 2   &lt;- z:2 cannot start until z:1 completes
// null { z: 2 }</code></pre>



</div></div>

<div class="cf">
<h2 class="api-subhead" id="modifier-timeout"><a href="#modifier-timeout" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Modifier: <b>timeout$</b></h2>
<a class="api-back" href="#modifiers">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<h4>Description</h4>
<p class="desc">Specify a local timeout in milliseconds for this particular action execution.</p>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">require(&apos;seneca&apos;)({

  // Change global timeout to 1000 milliseconds.
  timeout: 1000
})

  // Add an action pattern that takes at least 2000 milliseconds.
  .add(&apos;a:1&apos;, function (msg, reply) {
    setTimeout(function () {
      reply({z: msg.z})
    }, 2000)
  })

  // Times out and prints an error, as 1000 &lt; 2000 milliseconds.
  .act(&apos;a:1, z:never&apos;, console.log)

  // Override the global timeout with the timeout$ directive.
  // This message works fine and prints a result:
  .act(&apos;a:1, z:works, timeout$:3000&apos;, console.log)</code></pre>



</div></div>





<div class="api-vs"></div>
<!-- Full utilties descriptions -->


<div class="cf">
  <h2 class="api-subhead" id="utility-clean"><a href="#utility-clean" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Utility: <b>clean</b></h2>
  <a class="api-back" href="#utilities">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<p>Clean messages by removing metadata and directives. All (and only) top level property names containing a <code>$</code> character are removed.</p>

<h4>Signatures</h4>
<ul>

<li><b>clean</b> &#xA0;&#xA0;

<i>message</i> 

</li>

</ul>

<h4>Parameters</h4>
<table>

<tr>
  <td><i>message</i></td>
  <td>

    <u>Object</u>

  <small></small>
  </td>
  <td>Message object to clean.</td>
</tr>

</table>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">var Seneca = require(&apos;seneca&apos;)

var seneca = Seneca()

var cleaned = seneca.util.clean(
  {a: 1, b$: 2, c: {d: 3, e$: 4 }}
)

// Prints: { a: 1, c: { d: 3, &apos;e$&apos;: 4 } }
console.log(cleaned)</code></pre>



</div></div>

<div class="cf">
  <h2 class="api-subhead" id="utility-deepextend"><a href="#utility-deepextend" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Utility: <b>deepextend</b></h2>
  <a class="api-back" href="#utilities">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<p>Combine the listed objects into one new object, overwriting properties from right to left.</p>

<h4>Signatures</h4>
<ul>

<li><b>deepextend</b> &#xA0;&#xA0;

<i>object...</i> 

</li>

</ul>

<h4>Parameters</h4>
<table>

<tr>
  <td><i>object...</i></td>
  <td>

    <u>Object</u>

  <small></small>
  </td>
  <td>Any number of parameters that are Objects.</td>
</tr>

</table>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">var Seneca = require(&apos;seneca&apos;)

var seneca = Seneca()

var extended = seneca.util.deepextend(
  {a: 1, b: 2, c: {d: 3, e: 4}},
  {a: 10, c: {d: 30, f: 50}, g: 60}
)

// prints { a: 10, c: { d: 30, f: 50, e: 4 }, g: 60, b: 2 }
console.log(extended)</code></pre>



</div></div>

<div class="cf">
  <h2 class="api-subhead" id="utility-pattern"><a href="#utility-pattern" class="linkable" style="margin-left:-2rem; margin-right:1rem; display:inline-block;font-size:1.2rem;color:rgba(41, 125, 134, 0.20);text-decoration:none;vertical-align:middle">&#xA7;</a>Utility: <b>pattern</b></h2>
  <a class="api-back" href="#utilities">up</a>
</div>

<div class="row"><div class="col-xs-12 api-desc">

<p>Convert a pattern object into a normalized jsonic String.</p>

<h4>Signatures</h4>
<ul>

<li><b>pattern</b> &#xA0;&#xA0;

<i>object</i> 

</li>

</ul>

<h4>Parameters</h4>
<table>

<tr>
  <td><i>object</i></td>
  <td>

    <u>Object</u>

  <small></small>
  </td>
  <td>An object defining a pattern.</td>
</tr>

</table>




<h4>Example</h4>
<pre><code class="lang-js hljs javascript">var Seneca = require(&apos;seneca&apos;)

var seneca = Seneca()

var jsonic_normal_pattern = seneca.util.pattern({
  c: 2,
  b: &apos;z&apos;,
  a: true
})

// Prints: a:true,b:z,c:2
console.log(jsonic_normal_pattern)</code></pre>



</div></div>








        </div>
      </div>

      <div class="row center-xs">
        <div class="col-xs-12 col-md-10 col-lg-10">
          <p class="txt-lead mb mt2x">Issues? From spelling errors to broken tutorials and everything in between, report
          them <a href="https://github.com/senecajs/senecajs.org/issues">here.</a></p>
        </div>
      </div>
    </div>

    <footer role="contentinfo">
    
      <div class="footer-top">
        <div class="container-fluid">
          <div class="row center-xs">
            <div class="col-xs-12">
              <img src="/images/logo-seneca-inversed.svg" class="logo-seneca-lg" alt="Seneca" />
            </div>
    
            <div class="col-xs-12 col-sm-4 col-md-3">
              <p class="mt"><a href="https://github.com/senecajs/seneca" class="link-has-icon icon icon-github">Github</a></p>
            </div>
    
            <div class="col-xs-12 col-sm-4 col-md-3">
              <p class="mt"><a href="/docs/" class="link-has-icon icon icon-docs">Documentation</a></p>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-3">
              <p class="mt"><a href="https://twitter.com/senecajs" class="link-has-icon icon icon-twitter">Twitter</a></p>
            </div>
          </div>
          <!-- row -->
        </div>
      </div>
      <!-- footer top -->
    
      <div class="footer-bottom">
        <div class="container-fluid txt-center">
          <p class="mb0">© <a href="https://github.com/rjrodger">Richard Rodger</a> and <a href="https://github.com/senecajs/senecajs.org/contributors">other</a> <a href="https://github.com/senecajs/seneca/contributors">contributors</a> 2010 - 2017. Powered by <a href="http://metalsmith.io">MetalSmith</a>, hosted by <a href="http://surge.sh">Surge</a>. A <a href="http://nearform.com">nearForm</a> project.</p>
        </div>
      </div>
      <!-- footer bottom -->
    </footer>
    
    <script src="http://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.0.0/highlight.min.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/zepto/1.2.0/zepto.min.js" integrity="sha256-vrn14y7WH7zgEElyQqm2uCGSQrX/xjYDjniRUQx3NyU=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/docsearch.js/1/docsearch.min.js"></script>
    <script type="text/javascript"> docsearch({
        apiKey: 'a5afa8843727758cbaa7fbacb932b215',
        indexName: 'senecajs',
        inputSelector: '#seneca-search-input'
    });
    </script>    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    
      ga('create', 'UA-57673-6', 'senecajs.org');
      ga('send', 'pageview');
    </script>


    <script>
      $('[data-api-box-ref]')
        .each(function (index, apibox) {
          $(apibox).find('a').on('click', function(ev) {
            ev.stopPropagation()
          })
        })
        .on('click', function (ev) {
          window.location.hash = $(this).attr('data-api-box-ref')
          return false
        })
    </script>

  </body>
</html>
