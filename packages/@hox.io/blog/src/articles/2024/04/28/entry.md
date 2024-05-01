I had a nice lazy day today. Of course me being who I am I couldn't help but
write some code. Sometimes I get something in my head and I can't get it out
until I build it.

Once again the creative impulse hit me hard. For over a year I've been pushing
the TypeScript type system to it's limit. I've figured out how to create a lot
of ismorphisims between TypeScript pre-compilation and the JavaScript that gets
evaluated at run-time. Now this may be interesting by itself but there's now a
method to my madness other than just my usual tendencies to fixate on things.

## 🤨 What's the big idea?

Giving the compiler a sense of not just what types of inputs and outputs to
functions but the actual return values superchargess AI tools like CoPilot.
Now suddenly it knows not just that a variable is of type `string` but now it
knows what that actual string is and it uses that in its context when suggesting
auto-completions.

I've created TypeScript utility types supporting math on natural numbers and
followed that up by supporting the integers. This can be very useful for
doing things like converting a string representation of a number into an actual
numeric format. There is a great blog post about implementing mathematics using
TypeScripts type system here
[blog](https://itnext.io/implementing-arithmetic-within-typescripts-type-system-a1ef140a6f6f).

The unfortunate trade off is that TypeScript has a recursion limit of 999 in my
testing. So it's useful to a point and then it breaks down but in that case my
implementations just switch to treating things as `number` so no biggie.

I resurrected an old project that I have been using in my daily work but I've
been dusting it off for public release. I have in mind a community of
programmers that are focused on making AI tools more effective so that we can
work on bigger projects. I envision a creative consortium of programmers that
are pushing the integration points to make AI tools able to have deep insights
into not just how code is structured but its actual intent.

Type system development might seem like a silly thing to focus on an far as AI
integration points but hear me out. Imagine a programming language written in
TypeScript. What if the type system was aware of the return value when
something parsed successfully? This could open the door to a whole new suite
of products.

Anyway, yesterday I started working on a
[Parsing Expression Grammar](https://en.wikipedia.org/wiki/Parsing_expression_grammar)
(PEG) that is implemented in TypeScript. I've managed to create string matchers
that follow all of the rules related to how the operators in a Parsing
Expression Grammar are meant to work.

Here is a little taste. 😋

```typescript
type ConsumeRight<
  A extends string,
  B extends string,
> = B extends `${A}${infer C}` ? C : never

type Sequence<
  A extends string,
  B extends string,
  C extends string,
> = ConsumeRight<B, ConsumeRight<A, C>>

// Hover over `TestSequence`
type TestSequence = Sequence<'abc', 'def', 'abcdefghi'>
```
