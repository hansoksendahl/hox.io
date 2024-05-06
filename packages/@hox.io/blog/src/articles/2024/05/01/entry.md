```index.d.ts
declare module '@recon-struct/utility-types' {

export type IsNever<A> = [A] extends [never] ? true : false

export type IsExtension<A, B> =
  IsNever<A> extends true ? false : A extends B ? true : false

export type IsEqual<A, B> =
  IsExtension<A, B> extends true
    ? IsExtension<B, A> extends true
      ? true
      : false
    : false

export type IsTrue<A extends boolean> = IsEqual<A, true>

export type If<A extends boolean, B = true, C = false> =
  IsTrue<A> extends true ? B : C

export type And<A extends boolean, B extends boolean> = If<IsTrue<A>, IsTrue<B>>

export type Or<A extends boolean, B extends boolean> = If<
  IsTrue<A>,
  true,
  IsTrue<B>
>

export type Xor<A extends boolean, B extends boolean> = If<IsTrue<A>, Not<B>, B>

export type Not<A extends boolean> = If<IsTrue<A>, false, true>

export type IsLiteralString<A> = IsExtensionAndNotEqual<A, string>

export type IsExtensionAndNotEqual<A, B> = Xor<
  IsExtension<A, B>,
  IsExtension<B, A>
>

interface JoinOpts<A extends string = string> extends Internal {
  value: A
}

type StringLike = AnyStringish | ToStringInterface

export type Join<
  A extends StringLike[],
  B extends StringLike = '',
  C extends JoinOpts = JoinOpts<''>,
> = A extends [infer D, ...infer E]
  ? D extends StringLike
    ? E extends StringLike[]
      ? Join<
          E,
          B,
          JoinOpts<
            If<
              IsEmptyString<C['value']>,
              ToString<D>,
              `${C['value']}${ToString<B>}${ToString<D>}`
            >
          >
        >
      : never
    : never
  : C['value']

export type IsEmptyString = IsEqual<A, ''>

export type AnyStringish = string | number | bigint | boolean | null | undefined

export type ToString<A> = A extends AnyStringish
  ? `${A}`
  : A extends { toString(): string }
    ? ReturnType<A['toString']>
    : never

interface SplitOpts<A extends string[] = string[]> extends Internal {
  value: A
}

export type Split<
  A extends string,
  B extends string = '',
  Z extends SplitOpts = SplitOpts<[]>,
> = B extends ''
  ? A extends `${infer D}${infer E}`
    ? Split<E, B, SplitOpts<[...Z['value'], D]>>
    : Z['value']
  : A extends `${string}${B}${string}`
    ? A extends `${infer D}${B}${infer E}`
      ? Split<E, B, SplitOpts<[...Z['value'], D]>>
      : never
    : [...Z['value'], A]

interface ReverseOpts<A extends AnyArray = AnyArray> extends Internal {
  value: A
}

export type Reverse<
  A extends AnyArray,
  Z extends ReverseOpts = ReverseOpts<[]>,
> = A extends [...infer B, infer C]
  ? Reverse<B, ReverseOpts<[...Z['value'], C]>>
  : Z['value']

}
```

![Utility Types: Logic image](https://storage.googleapis.com/hox-io-blog-assets/2024-05-01-utility-type-logic.webp)

Welcome to the premiere of my blog series on the magic spells of TypeScript,
specifically diving into the
[@recon-struct/utility-types](https://recon-struct.github.io) library. Imagine a
treasure trove of utility types that turbocharge your dealings with TypeScript's
type system, letting you conjure up code as powerful and precise as mathematical
equations and Boolean logic.

This kick-off post zooms in on the Logic module of
[@recon-struct/utility-types](https://recon-struct.github.io).

## Conditional Types

Unleashed in [TypeScript
2.8](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html),
[Conditional
types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
are your coding cauldron where types transform based on a ternary incantation
(if-then-else).

A conditional type is a three-part spell:

1. **Antecedent** ("if")
2. **Consequent** ("then")
3. **Alternative** ("else")

In TypeScript, the spell's formula goes like this:

`[antecedent] ? [consequent] : [alternative]`

### Antecedent

Using the `extends` keyword, the **antecedent** acts as the question `A extends
B?` to narrow down the type by checking if type `A` is a subtype of type `B`.

`A extends B ? [consequent] : [alternative]`

### Consequent

If the **antecedent** is true, the **consequent** takes over, delivering the
"then" part of our conditional magic.

### Alternative

If the **antecedent** says nay, the **alternative** swings into action, serving
the "else" slice of the pie.

## Logic: Antecedents

[@recon-struct/utility-types](https://recon-struct.github.io) spins out a rich
catalog of
[antecedents](https://recon-struct.github.io/utility-types/modules.html) for
crafting true/false questions within your types.

Antecedents always yield `true` or `false`:

`A extends B ? true : false`

This opens up a playground for chaining antecedents with [Boolean
expressions](https://en.wikipedia.org/wiki/Boolean_expression) to build a more
intricate system of conditional types.

### And

The [And](https://recon-struct.github.io/utility-types/types/And.html)
antecedent is true if both `A` and `B` are true.

```typescript
import type { And } from '@recon-struct/utility-types'

type TT = And<true, true> // true
type TF = And<true, false> // false
type FT = And<false, true> // false
type FF = And<false, false> // false
```

### Or

The [Or](https://recon-struct.github.io/utility-types/types/Or.html) antecedent
checks if at least one of `A` or `B` is true.

```typescript
import type { Or } from '@recon-struct/utility-types'

type TT = Or<true, true> // true
type TF = Or<true, false> // true
type FT = Or<false, true> // true
type FF = Or<false, false> // false
```

### Xor

The [Xor](https://recon-struct.github.io/utility-types/types/Xor.html)
(exclusive or) is true if exactly one of `A` or `B` is true, but not both.

```typescript
import type { Xor } from '@recon-struct/utility-types'

type TT = Xor<true, true> // false
type TF = Xor<true, false> // true
type FT = Xor<false, true> // true
type FF = Xor<false, false> // false
```

### Not

The [Not](https://recon-struct.github.io/utility-types/types/Not.html)
antecedent flips the truth value of `A`.

```typescript
import type { Not } from '@recon-struct/utility-types'

type Ex1 = Not<true> // false
type Ex2 = Not<false> // true
```

## Logic: Utility Types

The [If](https://recon-struct.github.io/utility-types/types/If.html) utility
type embodies the ternary statement (if-then-else) and can return more than just
booleans.

```typescript
import type { If } from '@recon-struct/utility-types'

type Ex1 = If<true, 'a', 'b'> // 'a'
type Ex2 = If<false, 'a', 'b'> // 'b'
```

## Practical Magic ✨

Dive into this conjuring of code where we harness the mystical powers of various
antecedents available at
[@recon-struct/utility-types](https://recon-struct.github.io):

```typescript
import type {
  And,
  IsLiteralString,
  IsEqual,
  Join,
  Split,
  Reverse,
} from '@recon-struct/utility-types'

// A spell to check if a string is a palindrome
type IsPalindrome<A extends string> = And<
  IsLiteralString<A>, // Must be a string literal
  IsEqual<A, Join<Reverse<Split<A>>>>
>

type Ex1 = IsPalindrome<'ABBA'> // true, classic palindrome
type Ex2 = IsPalindrome<'Rush'> // false, no mirror magic here
type Ex3 = IsPalindrome<string> // false, vague strings tell us nothing
```

Ready to see TypeScript not just as a language, but as an enchanter’s toolkit?
This snippet is just the beginning of unraveling the potent incantations
possible with utility types.

## Epic Finale 🌟

So, what have we stumbled upon in the deep, cryptic woods of TypeScript? Yes,
the enigmatic and utterly modular conditional types provided by
[@recon-struct/utility-types](https://recon-struct.github.io). These types
aren't just standalone entities; oh no, they are the beginning of a beautiful
symphony. They can be intertwined, layered, and composed, crafting robust
expressions that dance elegantly through your codebase.

Keep your eyes peeled and your minds wide open! This series isn't just a
guide—it's a full-on expedition into the heart of TypeScript's utility types, a
journey that promises more arcane knowledge and clever coding tricks. Stay
tuned, as we continue to explore and unravel the mystical, almost alchemical
depths of utility types! 🧙‍♂️✨
