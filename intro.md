## Fully Functional

### Dojo North, July 2016


## Why this topic?

- We've done a few Dojos which were underpinned by functional thinking
  - MapReduce
  - Event stores
  - React and Redux



## What is functional programming?


## Assignment

"... enables us to model objects that have local state. However, this advantage comes at a price. Our programming language can no longer be interpreted in terms of the substitution model" (S.I.C.P. p229)

<figure>
<a href="https://www.mitpress.mit.edu/sicp/"><img height=250 src="https://www.mitpress.mit.edu/sicp/full-text/book/cover.jpg" /></a>
</figure>


## Mutable state

Functions should always return the same output for a given input.
```
var someValue = 0;

function doSomething(number) {
  someValue += number;
  return someValue;
}

console.log(doSomething(2));
// 2

console.log(doSomething(2));
// 4
```


## Imperative Looping

Boilerplate, as in a for loop, should be avoided:
```
var counter = 0;
for (var i = 0; i<50; i++) {
  if (i % 2 == 0) {
    counter++;
  }
}
```


## Functional 'looping'

Instead, use map, filter and reduce to transform your arrays:
```
var array = [1,2,3,4,5,6];
var doubled = array.map(function(x) { return x*2 });
var evens = array.filter(function(x) { return x % 2 == 0; });
var sumOfEvens = evens.reduce(
  function(acc, x) { return acc + x },
  0
);
```


## New fangled JavaScript

ECMAScript 6 introduces `const` and a more terse lambda syntax:
```
const array = [1,2,3,4,5,6];
const doubled = array.map(x => x*2);
const evens = array.filter(x => x % 2 == 0);
const sumOfEvens = evens.reduce(
  (acc, x) => acc + x,
  0
);
```


## Side effects

It really boils down to avoiding side effects.
- no throwing of exceptions
- no mutation
- no printing/logging


## Error handling

<iframe src="//giphy.com/embed/13HgwGsXF0aiGY" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/13HgwGsXF0aiGY">via GIPHY</a></p>


## Functional error handling

You have probably heard about Monads...

<iframe src="//giphy.com/embed/fXm3axbRDLBII" width="480" height="202" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/the-matrix-keanu-reeves-neo-fXm3axbRDLBII">via GIPHY</a></p>


## Railway oriented programming

<img src="http://fsharpforfunandprofit.com/assets/img/Recipe_Railway_Transparent.png" />
