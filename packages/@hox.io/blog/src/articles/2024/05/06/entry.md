```index.d.ts
@declare module '@recon-struct/utility-types' {

export type IsNever<A> = [A] extends [never] ? true : false

export type IsExtension<A, B> =
  IsNever<A> extends true ? false : A extends B ? true : false
****
export type IsEqual<A, B> =
  IsExtension<A, B> extends true
    ? IsExtension<B, A> extends true
      ? true
      : false
    : false

export type IsTrue<A extends boolean> = IsEqual<A, true>

export type If<A extends boolean, B = true, C = false> =
  IsTrue<A> extends true ? B : C

export type Not<A extends boolean> = If<IsTrue<A>, false, true>

export type Xor<A extends boolean, B extends boolean> = If<IsTrue<A>, Not<B>, B>

export type IsExtensionAndNotEqual<A, B> = Xor<
  IsExtension<A, B>,
  IsExtension<B, A>
>

export type IsLiteralBigInt<A> = IsExtensionAndNotEqual<A, bigint>

export type IsLiteralBoolean<A> = IsExtensionAndNotEqual<A, boolean>

export type IsLiteralKey<A> = A extends any
  ? A extends string
    ? IsLiteralString<A>
    : A extends number
      ? IsLiteralNumber<A>
      : A extends symbol
        ? IsLiteralSymbol<A>
        : false
  : false

export type IsLiteralNull<A> = IsExtension<A, null>

export type IsLiteralNumber<A> = IsExtensionAndNotEqual<A, number>

export type IsLiteralPrimitive<A> = A extends any
  ? A extends string
    ? IsLiteralString<A>
    : A extends number
      ? IsLiteralNumber<A>
      : A extends symbol
        ? IsLiteralSymbol<A>
        : A extends null
          ? IsLiteralNull<A>
          : A extends undefined
            ? IsLiteralUndefined<A>
            : A extends bigint
              ? IsLiteralBigint<A>
              : false
  : false

export type IsLiteralString<A> = IsExtensionAndNotEqual<A, string>

export type IsLiteralSymbol<A> = IsExtensionAndNotEqual<A, symbol>

export type IsLiteralUndefined<A> = IsExtension<A, undefined>

export type IsLiteralVoid<A> = IsEqual<A, void>

}
```

![Illustration of a laptop at night](https://storage.googleapis.com/hox-io-blog-assets/2024-05-06-literals.webp)

Welcome to our second installment of articles covering the TypeScript utility
type library [@recon-struct/utility-types](https://recon-struct.github.io). Last
time we talked about [Logic](https://blog.hox.io/articles/2024-05-01)
specifically **antecedents** (conditional types that return `true` or `false`).
Using these types we can make complex statements by composing true or false
statements together with antecedents like
[And](https://blog.hox.io/articles/2024-05-01#and),
[Or](https://blog.hox.io/articles/2024-05-01#or),
[Xor](https://blog.hox.io/articles/2024-05-01#xor), and
[Not](https://blog.hox.io/articles/2024-05-01#not).

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

### Any

TypeScript is great at generalizing. Sometimes it can be too good at it.
TypeScript is meant to be an iron clad fortress of type safety but many the
errant programmer has opened a side passage that barbarous type errors can
enter through by the use of the `any` keyword. Any means just that anything. It
offers know type safety at all. A variable once assigned a value of any
compromises every type safe function or class method it touches. It can be used
as a catchers mit on occasion but should be used very cautiously if at all. In
fact many authors choose to set the TypeScript compilerOption `noImplicitAny`
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

As dusk falls upon your codebase, a mysterious figure, the `unknown` type,
enters, its hat pulled low over its face. Who could it be? It’s a type we just
can’t pinpoint. Introduced in TypeScript version 3.0, the `unknown` type carries
a certain mystique.

The creators of TypeScript describe `unknown` with the following insights:

> Much like `any`, any value is assignable to `unknown`; however, unlike `any`,
> you cannot access any properties on values with the type `unknown`, nor can
> you call or construct them. Additionally, values of type `unknown` can only be
> assigned to `unknown` or `any`.

Once a type is designated as `unknown`, it’s forced to linger on the outskirts
of your type system. It avoids interacting with other established types,
remaining an enigmatic presence, spoken of in hushed tones by the rest of the
types.

```typescript
const enigma: unknown = 'mystery'

const ex1: unknown = enigma // This is fine...
const ex2: any = enigma // This is fine...
const ex3: string = enigma // Produces an error!
```

### Object Keyword

It's important not to confuse object types with the `object` keyword. In
TypeScript, the `object` keyword occupies a unique position amid levels of
ambiguity. TypeScript, which compiles down to JavaScript, expands on
JavaScript’s definition of an object. In TypeScript, anything that isn't a
primitive value is considered an object — yes, even functions!

However, it’s advisable to use the `object` keyword sparingly. While knowing
that something is a structured data type—especially when everything else is a
primitive—can be helpful, in practice, the utility of the `object` keyword is
limited. This observation comes from the author's personal experience in the
field.

```typescript
const ex1: object = { '🙂': '🙂' }
const ex2: object = ['😅']
const ex3: object = () => '😓'
```

### Generic Classes, Records, and Arrays

TypeScript offers a robust selection of generic types, particularly useful when
defining specific sequences or relationships between the types they contain. For
instance, we can declare that a `Map` associates `string` keys with `number`
values, but we can't specify which exact `string` corresponds to which `number`,
nor can we determine the order of the keys just by examining the object.

Both `Record` and `Array` are generic types as well, but they lack the
specificity provided by objects or tuples. With the basic level of specificity
provided by these generics, we can begin employing more advanced constructs like
discriminated unions and conditional types to achieve greater precision in our
type definitions.

Examples:

```typescript
type Ex1 = Map<string, number>
type Ex2 = Record<string, string>
type Ex3 = string[] // Also the synonymous, less used `Array<string>`
```

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

### Mapped Types

Mapped types in TypeScript excel at precision, offering the ability to clearly
define the value associated with every key. This characteristic of being
unambiguous often makes mapped object types more practical than `Map` for
intricate type system tasks.

Consider the following example:

```typescript
type Animals = {
  dog: 'woof'
  cat: 'meow'
  cow: 'moo'
}

type Sounds = {
  [A in keyof Animals as `the${Capitalize<A>}`]: {
    says: Animals[A]
  }
}
```

In this code, Sounds is a mapped type that dynamically constructs new properties
based on the keys from the `Animals` type. Each property is prefixed with 'the'
and includes the sound associated with each animal, illustrating the power of
mapped types to transform and extend existing type definitions.

### Literals, Tuples, Objects

This is where the fun begins! Literals represent the pinnacle of specificity
within the TypeScript type system. When dealing with literals, there's no
ambiguity—each type is precisely defined, not just by its name but also by its
immutable value. These types are transparent and unambiguous, much like wearing
their hearts on their sleeves.

Literals allow us to perform definitive and accurate programming, which we will
explore in more depth shortly.

```typescript
const MY_SYMBOL = Symbol("And isn't it symbolic?")

// Literals
type Ex1 = 'Hello World!'
type Ex2 = 1337
type Ex3 = 123n
type Ex4 = true
type Ex5 = null
type Ex6 = undefined
type Ex7 = typeof MY_SYMBOL

// Structured data with literal values
type Ex8 = [1, 2, 3] // tuple
type Ex9 = { x: 1; y: 2; z: 3 } // object
```

These examples highlight how literals can be used to ensure that values conform
strictly to specified types, providing a robust framework for precise and safe
type-checking in your applications. Similarly tuple and object types can
represent structured data in which all of the _leaves_ are literals making for
unambiguous structured data.

## Literal Antecedents

In the context of the TypeScript type system, the following conditional types
from [@recon-struct/utility-types](https://recon-struct.github.io) are referred
to as **antecedents**. These are conditional types that produce a binary
outcome: true or false. Literal types, known for their precision, are the least
ambiguous types in TypeScript. Given their clarity, there are often cases where
it’s necessary to check if a value corresponds to a specific literal type.

These tools are especially useful for maintaining type safety in applications
that rely heavily on strict type definitions.

### Is Literal BigInt

BigInt is a relatively recent addition to JavaScript, capable of representing
integers much larger than those allowed by the IEEE-754 standard used in
TypeScript’s `number` type.

This conditional type allows you to ascertain whether a given value `A` is a
literal BigInt.

```typescript
import { IsLiteralBigInt } from '@recon-struct/utility-types'

type Ex1 = IsLiteralBigInt<42n> // true
type Ex2 = IsLiteralBigInt<bigint> // false
```

### Is Literal Boolean

This conditional type enables you to determine whether a given value A is a
literal boolean.

```typescript
import { IsLiteralBoolean } from '@recon-struct/utility-types'

type Ex1 = IsLiteralBoolean<true> // true
type Ex2 = IsLiteralBoolean<false> // true
type Ex3 = IsLiteralBoolean<boolean> // false
```

### Is Literal Key

This conditional type can be used to check if a given value `A` is a literal
key, typically used to index properties or elements.

```typescript
import { IsLiteralKey } from '@recon-struct/utility-types'

type MY_SYMBOL = Symbol()

type Ex1 = IsLiteralKey<'id'> // true
type Ex2 = IsLiteralKey<2> // true
type Ex3 = IsLiteralKey<typeof MY_SYMBOL> // true
type Ex4 = IsLiteralKey<string> // false
type Ex5 = IsLiteralKey<number> // false
type Ex6 = IsLiteralKey<symbol> // false
```

### Is Literal Null

Determine whether a value `A` is the literal `null`.

```typescript
import { IsLiteralNull } from '@recon-struct/utility-types'

type Ex1 = IsLiteralNull<null> // true
type Ex2 = IsLiteralNull<undefined> // false
```

### Is Literal Number

This conditional type checks if a value `A` is a literal number.

```typescript
import { IsLiteralNumber } from '@recon-struct/utility-types'

type Ex1 = IsLiteralNumber<42> // true
type Ex2 = IsLiteralNumber<number> // false
```

### Is Literal Primitive

Verify if a given value `A` is one of the primitive types (`string`, `number`,
`boolean`, `null`, `undefined`, `symbol`, `bigint`).

```typescript
import { IsLiteralPrimitive } from '@recon-struct/utility-types'

type Ex1 = IsLiteralPrimitive<true> // true
type Ex2 = IsLiteralPrimitive<boolean> // false
```

### Is Literal String

This type checks if a given value `A` is a literal string.

```typescript
import { IsLiteralString } from '@recon-struct/utility-types'

type Ex1 = IsLiteralString<'hello'> // true
type Ex2 = IsLiteralString<string> // false
```

### Is Literal Symbol

Determine whether a given value `A` is a literal symbol.

```typescript
import { IsLiteralSymbol } from '@recon-struct/utility-types'

const MY_SYMBOL = Symbol()

type Ex1 = IsLiteralSymbol<typeof MY_SYMBOL> // true
type Ex2 = IsLiteralSymbol<symbol> // false
```

### Is Literal Undefined

This conditional type allows you to check if a given value `A` is literally
`undefined`.

```typescript
import { IsLiteralUndefined } from '@recon-struct/utility-types'

type Ex1 = IsLiteralUndefined<undefined> // true
type Ex2 = IsLiteralUndefined<void> // false
```

### Is Literal Void

Check if a given value `A` is of type `void`, commonly used in TypeScript for
functions that do not return a value.

```typescript
import { IsLiteralVoid } from '@recon-struct/utility-types'

type Ex1 = IsLiteralVoid<void> // true
type Ex2 = IsLiteralVoid<undefined> // false
```

## Conclusion

Understanding and utilizing literal type antecedents in TypeScript can
significantly enhance the robustness and reliability of your type-checking
processes. These conditional types not only enforce stricter compliance with
expected data types but also provide a clearer, more predictable structure for
your code. By mastering these constructs, developers can avoid common pitfalls
associated with dynamic type languages and ensure that their applications behave
as intended under various circumstances. Embrace these tools in your TypeScript
toolkit to craft more precise and error-resistant code, paving the way for
smoother development experiences and more maintainable software.

We invite you to dive deeper into the world of TypeScript with us! If you found
this exploration of literal type antecedents enlightening, consider following
our blog for more insightful posts and discussions. Your participation not only
fuels our community but also expands the collective knowledge and skills of
everyone involved. Share your experiences, ask questions, and stay connected to
stay ahead in the ever-evolving landscape of software development. Let’s learn
and grow together!
