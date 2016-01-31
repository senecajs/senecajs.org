---
layout: main.html
---

# Understanding Query Syntax

Each seneca store has a set of utility functions. One of them is `list$`, which is used to query for a very specific selection of data.

Note: An awesome npm module <a href="https://www.npmjs.com/package/lodash">lodash</a> is used in examples here for neat display of results (`_` variable).

## Contents

- [Sample Entities](#wp-sample-entities)
- [List All](#wp-list-all)
- [Filter](#wp-filter)
- [AND Filter](#wp-and-filter)
- [Sorting](#wp-sorting)
- [Limit](#wp-limit)
- [Combine](#wp-combine)


<a name="wp-sample-entities"></a>
## Sample Entities

For the purpose of this example, a small set of manual entries needs to be created(so that we have something to select from). This can be easily achieved using chaining. Note only one callback is needed - at the very end. Each `make$()` is needed to make sure instances are unique.

``` js
var thing = seneca.make$('thing')

thing
.make$().save$({f1:'foo', f2:'bar', f3:'baz', f4:'qux4'})
.make$().save$({f1:'foo', f2:'bar', f3:'baz', f4:'qux5'})
.make$().save$({f1:'foo', f2:'bar', f3:'baz', f4:'qux6'})
.make$().save$({f1:'foo', f2:'bar', f3:'baz', f4:'qux1'})
.make$().save$({f1:'foo', f2:'bar', f3:'baz', f4:'qux2'})
.make$().save$({f1:'foo', f2:'bar', f3:'baz', f4:'qux3'})
.make$().save$({f1:'other', f2:'bar', f3:'baz', f4:'qux7'})
.make$().save$({f1:'other', f2:'bar', f3:'baz', f4:'qux8'})
.make$().save$({f1:'other', f2:'another', f3:'baz', f4:'qux9'},
  function (err, res) {
    if (err) console.error(err)

    // all entities saved
})
```

Once we have our entities in our store, we can proceed to retrieving the data.

<a name="wp-list-all"></a>
## List All

In order to get all entries from the store, we make query object empty.

``` js
thing.list$({}, function (err, res) {
  if (err) console.error(err)

    _.each(res, function (entry) {
      console.log(entry)
    })
})
```

We can also remove the empty object altogether.

``` js
thing.list$(function (err, res) {
  if (err) console.error(err)

    _.each(res, function (entry) {
      console.log(entry)
    })
})
```

Result:

```
$-/-/thing;id=udl5h4;{f1:foo,f2:bar,f3:baz,f4:qux4}
$-/-/thing;id=h0wxn8;{f1:foo,f2:bar,f3:baz,f4:qux5}
$-/-/thing;id=szu6kd;{f1:foo,f2:bar,f3:baz,f4:qux6}
$-/-/thing;id=wq0rz0;{f1:foo,f2:bar,f3:baz,f4:qux1}
$-/-/thing;id=zl88s0;{f1:foo,f2:bar,f3:baz,f4:qux2}
$-/-/thing;id=avzobw;{f1:foo,f2:bar,f3:baz,f4:qux3}
$-/-/thing;id=ltdgwy;{f1:other,f2:bar,f3:baz,f4:qux7}
$-/-/thing;id=t4dmll;{f1:other,f2:bar,f3:baz,f4:qux8}
$-/-/thing;id=b2rodt;{f1:other,f2:another,f3:baz,f4:qux9}

```

<a name="wp-filter"></a>
## Filter

In order to select a subset of entries, we add matching field to the query object.

``` js
list$({f1:'other'}, function (err, res) {
  if (err) console.error(err)

  _.each(res, function (entry) {
    console.log(entry)
  })
})
```

Result:

```
$-/-/thing;id=fvs3p6;{f1:other,f2:bar,f3:baz,f4:qux7}
$-/-/thing;id=lpdl0e;{f1:other,f2:bar,f3:baz,f4:qux8}
$-/-/thing;id=s8mh28;{f1:other,f2:another,f3:baz,f4:qux9}
```

<a name="wp-and-filter"></a>
## AND Filter

In order to select a subset of entries, which comply with many constraints, we just simply add more matching fields to the query object.

``` js
list$({f1:'other', f2:'another'}, function (err, res) {
  if (err) console.error(err)

  _.each(res, function (entry) {
    console.log(entry)
  })
})
```

Result:

```
$-/-/thing;id=r5g9fx;{f1:other,f2:another,f3:baz,f4:qux9}
```

<a name="wp-sorting"></a>
## Sorting

In order to sort in ascending or descending order, we add a `sort$` field containing an object containing a field name and sort direction.

**Ascending**
``` js
list$({sort$:{f4:1}}, function (err, res) {
  if (err) console.error(err)

  _.each(res, function (entry) {
    console.log(entry)
  })
})
```

Result:
```
$-/-/thing;id=wq0rz0;{f1:foo,f2:bar,f3:baz,f4:qux1}
$-/-/thing;id=zl88s0;{f1:foo,f2:bar,f3:baz,f4:qux2}
$-/-/thing;id=avzobw;{f1:foo,f2:bar,f3:baz,f4:qux3}
$-/-/thing;id=udl5h4;{f1:foo,f2:bar,f3:baz,f4:qux4}
$-/-/thing;id=h0wxn8;{f1:foo,f2:bar,f3:baz,f4:qux5}
$-/-/thing;id=szu6kd;{f1:foo,f2:bar,f3:baz,f4:qux6}
$-/-/thing;id=ltdgwy;{f1:other,f2:bar,f3:baz,f4:qux7}
$-/-/thing;id=t4dmll;{f1:other,f2:bar,f3:baz,f4:qux8}
$-/-/thing;id=b2rodt;{f1:other,f2:another,f3:baz,f4:qux9}
```

**Descending**
``` js
list$({sort$:{f4:-1}}, function (err, res) {
  if (err) console.error(err)

  _.each(res, function (entry) {
    console.log(entry)
  })
})
```

Result:

```
$-/-/thing;id=sfbvsw;{f1:other,f2:another,f3:baz,f4:qux9}
$-/-/thing;id=0611oy;{f1:other,f2:bar,f3:baz,f4:qux8}
$-/-/thing;id=l843pa;{f1:other,f2:bar,f3:baz,f4:qux7}
$-/-/thing;id=fmsp67;{f1:foo,f2:bar,f3:baz,f4:qux6}
$-/-/thing;id=8xfr93;{f1:foo,f2:bar,f3:baz,f4:qux5}
$-/-/thing;id=ynnvj8;{f1:foo,f2:bar,f3:baz,f4:qux4}
$-/-/thing;id=iakb54;{f1:foo,f2:bar,f3:baz,f4:qux3}
$-/-/thing;id=avlabl;{f1:foo,f2:bar,f3:baz,f4:qux2}
$-/-/thing;id=as6k3n;{f1:foo,f2:bar,f3:baz,f4:qux1}
```

<a name="wp-limit"></a>
## Limit

We can limit the amount of results by adding the `limit$` field to the query. It has a numerical value.

``` js
list$({limit$:4}, function (err, res) {
  if (err) console.error(err)

  _.each(res, function (entry) {
    console.log(entry)
  })
})
```

Result:

```
$-/-/thing;id=u0ekqm;{f1:foo,f2:bar,f3:baz,f4:qux4}
$-/-/thing;id=j3cm0w;{f1:foo,f2:bar,f3:baz,f4:qux5}
$-/-/thing;id=2f9e24;{f1:foo,f2:bar,f3:baz,f4:qux6}
$-/-/thing;id=4opp4t;{f1:foo,f2:bar,f3:baz,f4:qux1}
```

<a name="wp-combine"></a>
## Combine

A number of $ fields can be inserted into the query object to achieve desired output. For example, we could decide to sort in ascending order and limit results to first three.


``` js
list$({sort$:{f4:1}, limit$:3}, function (err, res) {
  if (err) console.error(err)

  _.each(res, function (entry) {
    console.log(entry)
  })
})
```

Result:

```
$-/-/thing;id=big0da;{f1:foo,f2:bar,f3:baz,f4:qux1}
$-/-/thing;id=khg1i1;{f1:foo,f2:bar,f3:baz,f4:qux2}
$-/-/thing;id=979zgb;{f1:foo,f2:bar,f3:baz,f4:qux3}
```

