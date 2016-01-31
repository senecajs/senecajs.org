---
layout: main.html
---

# Understanding Query Syntax

Each seneca store has a set of utility functions. One of them is `list$`, which is used to query for a very specific selection of data.

**Note:** An awesome npm module <a href="https://www.npmjs.com/package/lodash">lodash</a> is used in examples here for neat display of results (`_` variable).

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

As with people, there may be many with the same name living in different locations.

``` js
var person = seneca.make$('person')

person
.make$().save$({name:'John', surname:'Smith', city:'Dublin', address:'Street 4'})
.make$().save$({name:'John', surname:'Smith', city:'Dublin', address:'Street 5'})
.make$().save$({name:'John', surname:'Smith', city:'Dublin', address:'Street 6'})
.make$().save$({name:'John', surname:'Smith', city:'Dublin', address:'Street 1'})
.make$().save$({name:'John', surname:'Smith', city:'Dublin', address:'Street 2'})
.make$().save$({name:'John', surname:'Smith', city:'Dublin', address:'Street 3'})
.make$().save$({name:'William', surname:'Smith', city:'Dublin', address:'Street 7'})
.make$().save$({name:'William', surname:'Smith', city:'Dublin', address:'Street 8'})
.make$().save$({name:'William', surname:'McDonald', city:'Dublin', address:'Street 9'},
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
person.list$({}, function (err, res) {
  if (err) console.error(err)

    _.each(res, function (entry) {
      console.log(entry)
    })
})
```

We can also remove the empty object altogether.

``` js
person.list$(function (err, res) {
  if (err) console.error(err)

    _.each(res, function (entry) {
      console.log(entry)
    })
})
```

Result:

```
$-/-/person;id=udl5h4;{name:John,surname:Smith,city:Dublin,address:Street 4}
$-/-/person;id=h0wxn8;{name:John,surname:Smith,city:Dublin,address:Street 5}
$-/-/person;id=szu6kd;{name:John,surname:Smith,city:Dublin,address:Street 6}
$-/-/person;id=wq0rz0;{name:John,surname:Smith,city:Dublin,address:Street 1}
$-/-/person;id=zl88s0;{name:John,surname:Smith,city:Dublin,address:Street 2}
$-/-/person;id=avzobw;{name:John,surname:Smith,city:Dublin,address:Street 3}
$-/-/person;id=ltdgwy;{name:William,surname:Smith,city:Dublin,address:Street 7}
$-/-/person;id=t4dmll;{name:William,surname:Smith,city:Dublin,address:Street 8}
$-/-/person;id=b2rodt;{name:William,surname:McDonald,city:Dublin,address:Street 9}

```

<a name="wp-filter"></a>
## Filter

In order to select a subset of entries, we add matching field to the query object.

``` js
list$({name:'William'}, function (err, res) {
  if (err) console.error(err)

  _.each(res, function (entry) {
    console.log(entry)
  })
})
```

Result:

```
$-/-/person;id=fvs3p6;{name:William,surname:Smith,city:Dublin,address:Street 7}
$-/-/person;id=lpdl0e;{name:William,surname:Smith,city:Dublin,address:Street 8}
$-/-/person;id=s8mh28;{name:William,surname:McDonald,city:Dublin,address:Street 9}
```

<a name="wp-and-filter"></a>
## AND Filter

In order to select a subset of entries, which comply with many constraints, we just simply add more matching fields to the query object.

``` js
list$({name:'William', surname:'McDonald'}, function (err, res) {
  if (err) console.error(err)

  _.each(res, function (entry) {
    console.log(entry)
  })
})
```

Result:

```
$-/-/person;id=r5g9fx;{name:William,surname:McDonald,city:Dublin,address:Street 9}
```

<a name="wp-sorting"></a>
## Sorting

In order to sort in ascending or descending order, we add a `sort$` field containing an object containing a field name and sort direction.

**Ascending**
``` js
list$({sort$:{address:1}}, function (err, res) {
  if (err) console.error(err)

  _.each(res, function (entry) {
    console.log(entry)
  })
})
```

Result:
```
$-/-/person;id=wq0rz0;{name:John,surname:Smith,city:Dublin,address:Street 1}
$-/-/person;id=zl88s0;{name:John,surname:Smith,city:Dublin,address:Street 2}
$-/-/person;id=avzobw;{name:John,surname:Smith,city:Dublin,address:Street 3}
$-/-/person;id=udl5h4;{name:John,surname:Smith,city:Dublin,address:Street 4}
$-/-/person;id=h0wxn8;{name:John,surname:Smith,city:Dublin,address:Street 5}
$-/-/person;id=szu6kd;{name:John,surname:Smith,city:Dublin,address:Street 6}
$-/-/person;id=ltdgwy;{name:William,surname:Smith,city:Dublin,address:Street 7}
$-/-/person;id=t4dmll;{name:William,surname:Smith,city:Dublin,address:Street 8}
$-/-/person;id=b2rodt;{name:William,surname:McDonald,city:Dublin,address:Street 9}
```

**Descending**
``` js
list$({sort$:{address:-1}}, function (err, res) {
  if (err) console.error(err)

  _.each(res, function (entry) {
    console.log(entry)
  })
})
```

Result:

```
$-/-/person;id=sfbvsw;{name:William,surname:McDonald,city:Dublin,address:Street 9}
$-/-/person;id=0611oy;{name:William,surname:Smith,city:Dublin,address:Street 8}
$-/-/person;id=l843pa;{name:William,surname:Smith,city:Dublin,address:Street 7}
$-/-/person;id=fmsp67;{name:John,surname:Smith,city:Dublin,address:Street 6}
$-/-/person;id=8xfr93;{name:John,surname:Smith,city:Dublin,address:Street 5}
$-/-/person;id=ynnvj8;{name:John,surname:Smith,city:Dublin,address:Street 4}
$-/-/person;id=iakb54;{name:John,surname:Smith,city:Dublin,address:Street 3}
$-/-/person;id=avlabl;{name:John,surname:Smith,city:Dublin,address:Street 2}
$-/-/person;id=as6k3n;{name:John,surname:Smith,city:Dublin,address:Street 1}
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
$-/-/person;id=u0ekqm;{name:John,surname:Smith,city:Dublin,address:Street 4}
$-/-/person;id=j3cm0w;{name:John,surname:Smith,city:Dublin,address:Street 5}
$-/-/person;id=2f9e24;{name:John,surname:Smith,city:Dublin,address:Street 6}
$-/-/person;id=4opp4t;{name:John,surname:Smith,city:Dublin,address:Street 1}
```

<a name="wp-combine"></a>
## Combine

A number of $ fields can be inserted into the query object to achieve desired output. For example, we could decide to sort in ascending order and limit results to first three.


``` js
list$({sort$:{address:1}, limit$:3}, function (err, res) {
  if (err) console.error(err)

  _.each(res, function (entry) {
    console.log(entry)
  })
})
```

Result:

```
$-/-/person;id=big0da;{name:John,surname:Smith,city:Dublin,address:Street 1}
$-/-/person;id=khg1i1;{name:John,surname:Smith,city:Dublin,address:Street 2}
$-/-/person;id=979zgb;{name:John,surname:Smith,city:Dublin,address:Street 3}
```

