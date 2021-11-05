# @hox.io/meta

## Terms

- `combinator` - A two parameter function
- `pattern` - Any iterable instance.

## Overview

The central concept are `combinators` which build on the generator functions added in ES6.

> They are similar to the inner function passed to `Array.reduce`.

Combinators are called by passing them a `pattern` and an optional `initial` value.

## Utils

This library exposes a number of useful wrapper functions for working with combinators and
patterns

## History

Originally, the author developed these functions as a way of solving Project Euler problems
until he realized that generators are a reliable method of meta-programming.
