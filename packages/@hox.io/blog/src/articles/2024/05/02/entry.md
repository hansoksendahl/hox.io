Welcome to our second installment of articles covering the TypeScript
utility type library [@recon-struct/utility-types](https://recon-struct.github.io).
Last time we talked about [Logic](https://blog.hox.io/articles/2024-05-01)
specifically antecedents (conditional types that return true or false). Using
these types we can make complex statements by composing true or false statements
together with boolean operators like And, Or, Xor, Not.

This article will continue to expand on that theme. This time however we will
be talking about literal types... literally. So stay tuned as we continue to
cover antecedents in more depth and look at how we can use them to hone
conditional types for our purposes.

## Levels of Ambiguity

What is a type? There are multiple levels of ambiguity describing types with
TypeScript. We'll start at the most general and work our way to the center
where only types that are pure of heart and fixed on their values are allowed to
tread.

> Disclaimer: This heirarchy is not exact. Type Systems are just that systems
> and in any sufficiently complex system heirarchies break down because some
> types are containers for other types. This is meant as a conceptual aid to
> those that may be new to TypeScript.

### Anything goes

TypeScript is great at generalizing. Sometimes it can be too good at it.
TypeScript is meant to be an iron clad fortress of type safety but many the
errant programmer has opened a side passage that barbarous type errors can
enter through by the use of the `any` keyword. Any means just that anything. It
offers know type safety at all. A variable once assigned a value of any
compromises every type safe function or class method it touches. It can be used
as a catchers mit on occasion but should be used very cautiously if at all. In
fact many authors choose to set the TypeScript compilerOption noImplicitAny
just to stop `any` from sneaking into their type safe code base.

```typescript
type Ex1 = 'Hello World!' extends any ? true : false // true
type Ex2 = false extends any ? true : false // true
type Ex3 = unknown extends any ? true : false // true
type Ex4 = Map<string, number> extends any ? true : false // true
type Ex5 = never extends any ? true : false // true
// You could do this all day... all types are swallowed up by any...
```

### Unknown

A mysterious type enters the code base at dusk their hat is pulled low over
their face. Who is it? It has a type we just don't know what type it is. The
`uknown` type wandered into TypeScript in version 3.0. The authors have this to
say about the `uknown` type.

> Much like `any`, any value is assignable to `unknown`; however, unlike `any`,
> you cannot access any properties on values with the type `unknown`, nor can
> you call/construct them. Furthermore, values of type `unknown` can only be
> assigned to `unknown` or `any`.

A type once set as unknown isn't allowed to mingle with the other types. They
must stay at the edge of town avoiding the town types' gaze as they whisper
at their approach.

### Object Keyword

Now don't confuse Object types with the `object` keyword. The `object` keyword
sits alone in its own category in the levels of ambiguity. JavaScript the
language TypeScript compiles down to has a fundamental weakness. TypeScript even
broadens the definition of object from JavaScript. Everything that is not a
primitive value can be defined as an object in TypeScript even functions! Use
`object` sparingly if at all when defining types.

Knowing something is a structured data type of some kind if everything else you
are comparing against is a primitive value can be useful but in practice based
on this author's experience it does not come into play that often.

### Generics classes, Records, Arrays

TypeScript provides a wide array of generic types but if there is a specific
sequence or relationship between the types they contain. We can say that a
particular `Map` maps a `string` to an `number` but we can't say which `string`
maps to which `number` and we can't say what order the keys are in by looking
at the object alone. Both `Record` and `Array` similarly are generic types they
do not provide as much specificity as objects or tuples.

At this point we have just enough specificity that we can start using things
like discriminated unions and conditional types to narrow things down to be
fairly exact.

Examples:

```typescript
type Ex1 = Map<string, number>
type Ex2 = Record<string, string>
type Ex3 = string[] // Also the less used `Array<string>`
```

### Mapped Types

Mapped types are have the capability of being unambiguous. It is possible to
create a mapped type in which we know the value

### Primitive Types

For each of TypeScript's primitive types there is a general way of describing it

Examples:

```typescript
type Ex1 = string
type Ex2 = number
type Ex3 = bigint
type Ex4 = boolean
type Ex5 = symbol
```

### Literals, Tuples, Objects

Now here is what we're interested in! This is the highest level of specificity
in the TypeScript type system. Literals are types where the compiler has no
question about what the identity of each type is. Each type has not only a name
but a value. They are types that are pure of heart and they wear their hearts on
their sleeves to be seen by all.

What's interesting about literals is that we can do real work with them. More on
that later!

Examples

```typescript
type Ex1 = 'Hello World!'
type Ex2 = 1337
type Ex3 = 123n
type Ex4 = true
type Ex5 = null
type Ex6 = undefined
type Ex7 = typeof Symbol("And isn't it symbolic?")
```

### Overview

I skipped over a few edge and corner cases like mapped types. But these are the
levels of specificity in general from my experience.
