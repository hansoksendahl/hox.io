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
type TT = And<true, true> // true
type TF = And<true, false> // false
type FT = And<false, true> // false
type FF = And<false, false> // false
```

### Or

The [Or](https://recon-struct.github.io/utility-types/types/Or.html) antecedent
checks if at least one of `A` or `B` is true.

```typescript
type TT = Or<true, true> // true
type TF = Or<true, false> // true
type FT = Or<false, true> // true
type FF = Or<false, false> // false
```

### Xor

The [Xor](https://recon-struct.github.io/utility-types/types/Xor.html)
(exclusive or) is true if exactly one of `A` or `B` is true, but not both.

```typescript
type TT = Xor<true, true> // false
type TF = Xor<true, false> // true
type FT = Xor<false, true> // true
type FF = Xor<false, false> // false
```

### Not

The [Not](https://recon-struct.github.io/utility-types/types/Not.html)
antecedent flips the truth value of `A`.

```typescript
type Ex1 = Not<true> // false
type Ex2 = Not<false> // true
```

## Logic: Utility Types

The [If](https://recon-struct.github.io/utility-types/types/If.html) utility
type embodies the ternary statement (if-then-else) and can return more than just
booleans.

```typescript
type Ex1 = If<true, 'a', 'b'> // 'a'
type Ex2 = If<false, 'a', 'b'> // 'b'
```

Here's an example employing various antecedents available in
[@recon-struct/utility-types](https://recon-struct.github.io):

```typescript
type IsPalindrome<A extends string> = And<
  IsLiteralString<A>,
  IsEqual<A, Join<Reverse<Split<A>>>>
>

type Ex1 = IsPalindrome<'ABBA'> // true
type Ex2 = IsPalindrome<'Rush'> // false
type Ex3 = IsPalindrome<string> // false
```

Stay tuned as this series will continue to explore and unravel the mystical
depths of TypeScript's utility types!
