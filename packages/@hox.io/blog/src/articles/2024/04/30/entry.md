Oh, Those kooky mathematicians!

“Inventing” or “discovering” (a debate for the ages) facts about the world
through mathematics. For much of its storied history, mathematical breakthroughs
served a practical need. Got a client who owes you a mountain of cash? Well,
negative numbers might just be your new best friend for keeping tabs on that
dicey business deal!

But let’s sidestep the corporate jungle gym for a sec. I’m here to spin a yarn.
It’s a tale of how math morphed from an aristocratic pastime into something
AUTOMATED, granting everyone the bliss of ignorance about
[limits](<https://en.wikipedia.org/wiki/Limit_(mathematics)>) or when to unleash
the [arc tangent](https://en.wikipedia.org/wiki/Inverse_trigonometric_functions)
function. Now, everyone is perpetually licensed to remain clueless about the
bytes piloting the simulation, because these days, everyone’s packing a
supercomputer in their pocket. 😮‍💨

## 🚀 Fire up the Wayback Machine!

Strap in and crank the dial on the wayback machine to the max! We’re diving
deep, past the age of Vercel and Next.js, beyond the reign of React. Back to a
time when individual mavericks, not faceless corporations, were the
trailblazers.

Ah, there’s [Mike Bostock](https://bost.ocks.org/mike/) scribbling furiously on
his seminal [D3.js](http://vis.stanford.edu/files/2011-D3-InfoVis.pdf) white
paper! And over there, [Mr. Doob](https://mrdoob.com/) is stitching the web
together with [Three.js](https://threejs.org/), lighting up the demo scene. But
don’t get too comfy—our journey through 2009 is just a pit stop. We just zoomed
by [\_why](https://viewsourcecode.org/why/), tossing
[metaid](https://github.com/whymirror/metaid) into the gears of the Rails
community. And look! [John Resig](https://johnresig.com/) is over there,
scheming to banish browser quirks to the shadow realm.

Flashing back to 1969, Frank Deremer’s crafting his [PhD
dissertation](https://dspace.mit.edu/bitstream/handle/1721.1/13628/24228988-MIT.pdf?sequence=2)
on the Look Ahead Left to Right (LALR) parsing algorithm—a tool that would
dominate coding projects into the early 2000s. And there’s [Donald
Knuth](https://cs.stanford.edu/~knuth/) at Bell Laboratories, pioneering the
Left to Right (LR) parsing algorithms, while Noam Chomsky, in the same hallowed
halls, sketches the Chomsky hierarchy of languages, a cornerstone in separating
formal grammars from natural language.

## 🦕 Into the Digital Paleolithic

Fast forward to the Cold War tech race, where the Soviets stumble upon the
balanced ternary system—brilliant, yet sadly, not sticky enough to revolutionize
computing. We’re now observing the dawn of magnetic tape reels as they’re
mounted on mainframes that devour entire buildings.

We’re not retracing all the way to the inception of natural numbers, but pausing
just before WWII. Back then, computing was merely a sparkle in the eye of
visionary thinkers.

The saga truly begins with [Alan
Turing](https://en.wikipedia.org/wiki/Alan_Turing) and his advisor, [Alonzo
Church](https://en.wikipedia.org/wiki/Alonzo_Church), at Princeton. Church had
already concocted a theory of computation with his lambda calculus, while
Turing, envisioning broader applications, introduced the Turing Machine—an
endlessly scrolling tape performing read, write, advance, and rewind operations.
Together, they published concepts so foundational that they birthed the term
“Turing Complete” system.

## 🧑‍💻 Coders Gonna Code

Rewinding to my college years at Evergreen State College, I dove headfirst into
parser theory and embarked on crafting an IDE in JavaScript, leveraging the
then-novel Three.js. Driven by inspiration from \_why, my project aimed to
democratize coding, making it visual and accessible, particularly for kids—a nod
to the simplicity of early Apple IIe systems, where mere lines of code could
conjure vivid images on-screen.

Despite my reliance on [Jison](https://gerhobbelt.github.io/jison/docs/), a
third-party parser, my relentless quest for deeper understanding spurred me to
build my own parser from the ground up. I explored parser theory and eventually
developed an optimized LALR parser in JavaScript called
[Cowbird](https://github.com/hansoksendahl/cowbird), paving the way for future
web-based parsers.

Fast forward, and all my work has been transpiled—my hands-on JavaScript skills
now relics of a bygone digital era.

## 🐉 Formulating the Ouroboros

At one job, patents were the gold standard for measuring employee value.
Initially resistant, I eventually succumbed, recognizing it might work to my
advantage. Reluctantly, I engaged in the very practices that I felt betrayed the
open, free ethos of the original web as envisioned by Tim Berners-Lee, filing
several patents ([1](https://patents.google.com/patent/US11244101B2/en),
[2](https://patents.google.com/patent/US11294616B2/en)).

I leaned heavily into my parser theory background for two of our patents. Tasked
with creating a UI that could adapt to numerous backend variations, it was
essential that the interface be fully serializable. Thus, my co-inventor and I
crafted every conceivable manipulation of application state and developed
components to enact these functions, inadvertently reinventing the JSON patch
([IEEE RFC 6902](https://www.rfc-editor.org/rfc/rfc6902)) along the way 🤦‍♂️.

Our second patent stemmed from a requirement that at any moment, a user could
contact a customer care agent who might then make edits on the user's behalf.
This necessitated communication through a websocket to synchronize state within
a dynamically generated UI—a formidable challenge. During this period, I
revisited my studies of Lambda calculus by Alonzo Church, which inspired me to
devise a new combinator I named the Ouroboros 🐉, symbolizing the ancient
concept of infinity with a serpent consuming its own tail.

## λ Revisiting Alonzo

Alonzo Church had conceptualized the entirety of computing within the syntactic
framework of lambda calculus. His framework captured concepts of scope and
message passing through the manipulation of inputs and outputs via functions
known as combinators. The simplest of these is the Identity function, `λx.x`,
which returns its input unchanged.

Church's vision included a variety of combinators that together formed a
universal computation model akin to Alan Turing's Turing Machine. Unlike my
co-inventor on our patents, he hadn't aimed to distill operations to their most
minimalistic form. This task would later be undertaken by Moses Schönfinkel and
Haskell Curry, who developed the SKI combinator calculus—a model capable of
representing all computations with just three combinators, `S`, `K`, and `I`
(`λx.x`), a simplification of Church's original work.

> An interesting aside: the SKI combinator calculus, despite its simplicity with
> only three operations, can be reduced even further to just the `S` and `K`
> combinators because `I=SKK`.

Engrossed in `S` and `K` combinators, I pondered workplace challenges, needing
an interface that could encapsulate all conceivable state manipulations in a
serializable format, and transmit this state via a websocket. This exploration
of lambda calculus during my free time led me to utilize the `S` and `K`
combinators in crafting my solution.

## 🚌 Further

The eureka moment hit me on the bus ride to work:

```
λx.λy.λz.x x (z y)
```

This function, akin to the famed Y-Combinator, enables recursion when applied to
itself. Unlike the Y-Combinator, however, this recursion unfolds incrementally,
akin to the pipe operator in some functional programming languages.

The full expression, when self-applied, is presented as:

```
(λx.λy.λz.x x (z y))λx.λy.λz.x x (z y)
```

I scribbled this formula on the wall of our office (thank goodness for
whiteboard walls) and it remained there quite a while, although its profound
significance seemed lost on my colleagues.

This combinator offers a framework for stepwise computation, particularly when
formulas are framed around the `SK` expression. Let's delve deeper into
combinators, starting with the simplest one, the `I` combinator.

## 🔬 Coming into Focus

Let's explore the `SKI` combinator calculus to unearth its practical
applications.

We'll begin with the most diminutive and straightforward combinator, the `I`
combinator. It simply takes an input and, upon invocation, returns that same
input.

> In combinatorial literature, variables are typically ordered as `x`, `y`, `z`,
> and on rare occasions as `w`, `x`, `y`, `z` for a fourth variable. However, I
> find this limiting when more variables are required. In my own work, I prefer
> the sequence `a`, `b`, `c`, which allows for more variables without
> complicating the choice of variable names.

```typescript
// The I Combinator
// λx.x
interface I {
  <A>(a: A): A
}
const i: I = a => a
```

The K combinator functions somewhat like the I combinator but with a delay. It
takes an input and returns that same input later down the line. Unlike the I
combinator, you need to invoke K twice before it returns anything.

```typescript
// The K Combinator
// λx.λy.x
interface K {
  <A, B>(a: A): (_: B) => A
}
const k: K = a => _ => a
```

If you're still with us, the S combinator is where it gets intricate. The S
combinator takes an expression a, another expression b, and finally a third
expression c. It applies c to both a and b, then invokes a(c) with the result of
b(c).

```typescript
// The S Combinator
// λx.λy.λz.x z (y z)
interface S {
  <A, B, C>(ca: (b: B) => (a: A) => C): (ba: (b: B) => A) => (b: B) => C
}
const s: S = a => b => c => a(c)(b(c))
```

That's the entirety of operations in the SKI combinator calculus. All computable
operations can be expressed with these tools. In fact, this system can be
further simplified to just the SK combinator calculus, as `I` is merely
syntactic sugar for `SKK`.

## 🍲 Feeding the Ouroboros

> What do you feed an Ouroboros? I mean, it's already busy munching on its own
> tail...

In this instance, the Ouroboros combinator is nourished by `SK`ooby
snacks—expressions framed by the combination of `S` and `K` combinators with `S`
applied to `K`.

What does SK imply? It entails taking a function, then an input, and finally
calling that function with the input but only returning the input itself, not
the function's result.

```typescript
// SK
// (λx.λy.λz.x z (y z))λx.λy.x
const sk = s(k)
```

## 🐲 Facing the serpent

When I introduced the combinator to my coworkers and my co-inventor on the two
patents, I held a whiteboard session to demonstrate how the combinator
functioned and how it addressed our challenges in state management and
synchronization between the client and a customer care agent via a websocket.

My colleagues were perplexed as I diagrammed esoteric symbols on the wall. It
seemed a long shot, but I had finally pushed the boundaries of conventional
thinking. My co-inventor, after some hesitation, agreed to adopt the combinator
if it could indeed simplify our state management processes and be articulated in
a typed format.

Months before, we had transitioned from raw JavaScript to using a type system
developed by Facebook called Flow. Initially resistant to this change, I
eventually recognized that a rigorous type system could prevent a myriad of
production errors. Simply put, your code won't compile if a variable isn't the
type you've declared.

At the time, I wasn't fully prepared to tackle this challenge. I invested
hours—eventually days—revisiting and dissecting the problem. It wasn't until
April 30, 2024, that I finally devised a solution that was both type-safe and
devoid of any any type loopholes.

> I was making a pun. The `any` keyword is a loophole in both Flow and
> TypeScript that lets you bypass the type system to do pretty much anything you
> want.

## 🚧 Infinite recusion ahead

The Ouroboros combinator consists of two parts. The inner segment, which I call
`Boros`, takes a predefined input (`SK`ooby snacks—expressions enveloped in `S`
and `K` combinators) and consumes it, then awaits another such input. Imagine
Pac-Man chomping on an endless stream of glowing dots in shadowy mazes.

```typescript
// The Ouroboros Inner Loop
// XX λx.λy.y x
interface Boros<B> {
  <A extends (_: B) => C, C extends object>(a: A): Boros<B>
}
```

The outer segment, dubbed `Ouro`, unwittingly grips its own tail, poised to
engulf it. Just before this self-consumption, it seizes a mutable object,
destined to be gnawed upon indefinitely.

> The `SK` ooby snacks previously mentioned don't exactly nourish the Ouroboros.
> Rather, they dictate the manner in which it nibbles at the mutable object it
> ingested just before it began to devour its tail.

```typescript
// The Ouroboros Outer loop
// λx.x x
interface Ouro {
  <A extends Ouro>(a: A): <B extends object>(b: B) => Boros<B>
}

// The Ouroboros Combinator (without self application)
// λx.λy.λz.x x (z y)
const ouro: Ouro = a => b => c => a(a)(c(b))
```

Now, the destined moment arrives. The skies grow dark as the serpent rises with
the wind, imbued with its eternal purpose. It is tasked to perpetually nibble at
an object, its tail poised in mouth, committed to its mission until the
universe's final echo. We command it to clutch its tail in its hand, awaiting
the object it will gnaw and the directives on how to bite.

Our Ouroboros stands majestic, prepared to consume universes upon our command,
persisting long after the old gods have faded from memory.

```typescript
// The Ouroboros Combinator (self applied)
// (λx.λy.λz.x x (z y))λx.λy.λz.x x (z y)
const ouroboros = ouro(ouro)
```

# 💫 Soaring with serpents

Behold, we've summoned an immortal serpent, forever at our digital bidding. Our
task? Crafting a language that instructs this mythical beast to voraciously
chomp on the object we toss its way, before it swallows its own tail in an
eternal loop of enigma.

Once it's devoured its tail, sure, we can engage in dialogue with this looped
leviathan, but coaxing it back to its original, tail-free state? That's a puzzle
wrapped in a conundrum.

Let’s kick things off by sketching out an interface for a function. This
function will be our magical conduit to retrieve whatever our digital ouroboros
has clasped in its recursive embrace.

```typescript
interface GetInterface<A extends object> {
  <B extends (_: A) => void>(_: B): (_: A) => A
  <B extends keyof A, C extends (_: A[B]) => void>(b: B, c: C): (_: A) => A
}
```

Alright, with the preliminary formalities out of the way, we can dive deep into
the serpent's den and truly master the art of serpent-whispering! 🐍✨ But how,
you ask? By speaking its favorite language: `SK`ooby snacks! These aren’t your
ordinary treats; they’re functions meticulously wrapped in `SK`, a magical
concoction brewed from the `S` and `K` combinators.

Picture this: Each `SK`ooby snack is like a mystical spell, encoded in the
sacred language of combinatory logic, ready to be devoured by our serpentine
friend. As it gobbles up these delicious bites of logic, we're not just feeding
it; we’re programming it, teaching it new tricks, and watching it perform
mesmerizing acts of computational acrobatics.

So, let’s not just stand here—let's start cooking up some `SK`ooby snacks, mix
in a pinch of `S` and a dash of `K`, and get ready for a show that’s more
dazzling than a serpent’s scales under a full moon! 🌕💫

```typescript
/**
 * Creates an instance of Ourorboros.
 * @template A - The type of the object to be created.
 * @returns An object with methods to manipulate the Ourorboros instance.
 */
const createOurorboros = <A extends object>() => {
  const o = ouroboros(Object.create(null) as A)
  const operations: (
    | { type: 'set'; key: keyof A; value: A[keyof A] }
    | { type: 'delete'; key: keyof A }
  )[] = []

  /**
   * Sets a value for a given key in the Ourorboros instance.
   * @template B - The type of the key.
   * @template C - The type of the value.
   * @param {B} key - The key to set the value for.
   * @param {C} value - The value to set.
   * @returns A function that applies the set operation.
   */
  const set = <B extends keyof A, C extends A[B]>(key: B, value: C) => {
    operations.push({ type: 'set', key, value })

    return sk((a: A) => (a[key] = value))
  }

  /**
   * Gets the value for a given key in the Ourorboros instance.
   * @param {...any[]} params - The parameters for the get operation.
   * @returns A function that applies the get operation to the Ourorboros
   *          instance.
   */
  const get: GetInterface<A> = (...params: any[]) =>
    sk((a: A) =>
      params.length === 1 ? params[0](a) : params[1](a[params[0] as keyof A]),
    )

  /**
   * Checks if a given key exists in the Ourorboros instance.
   * @template B - The type of the key.
   * @template C - The type of the callback function.
   * @param {B} key - The key to check.
   * @param {C} cb - The callback function to be called
   * @returns A function that applies the has operation.
   */
  const has = <B extends keyof A, C extends (_: boolean) => void>(
    key: B,
    cb: C,
  ) => sk((a: A) => cb(key in a))

  /**
   * Removes a key from the Ourorboros instance.
   * @template B - The type of the key.
   * @param {B} key - The key to remove.
   * @returns A function that applies the remove operation.
   */
  const remove = <B extends keyof A>(key: B) => {
    operations.push({ type: 'delete', key })

    return sk((a: A) => delete a[key])
  }

  /**
   * Creates a clone of the Ourorboros instance.
   * @returns A new Ourorboros instance with the same values and operations as
   *          the original.
   */
  const clone = () => {
    const newO = ouroboros(ouroboros)(Object.create(null) as A)

    operations.forEach(opts => {
      if (opts.type === 'set') {
        newO(set(opts.key, opts.value))
      } else {
        newO(remove(opts.key))
      }
    })

    return newOb
  }

  return { run: o, set, get, has, remove, clone }
}
```

Let’s put this to the test! Our ouroboros is quite the talented serpent; it can
be instructed to perform a myriad of actions with the object it has ingested.
What’s even more mesmerizing? It can conjure up a new version of itself,
meticulously replaying every mutation and twist it has experienced along the
way.

```typescript
// Create an ouroboros
const o = createOurorboros<{ x: number; y: number; z: number }>()

// Logs `{ x: 69, y: 420, z: 1337 }`
o.run(o.set('x', 69))(o.set('y', 420))(o.set('z', 1337))(o.get(console.log))

// Create a new ouroboros re-running all of the same mutations
const x = o.run(o.clone())
```

## Bringing it all back home

So what if I’m seven years late to the party in solving the riddle of defining
types for this method? You can’t judge me! 😭

We ended up deploying a different solution—one that sprawled across many more
lines and was far from optimized. But hey, that’s just the way the cookie
crumbles in this biz sometimes.

This post marks the first in a series I plan to write about TypeScript. I just
needed to get this nagging problem off my chest, one that I had been wrestling
with for ages. Wrestling with type systems is no walk in the park, but
thankfully, there are libraries that throw us a lifeline. In fact, I’ve been
busy cooking up one of my own.

I founded a consortium called recon-struct, and we’ve just launched a library
full of Utility Types for TypeScript. Dive into the documentation
[here](https://recon-struct.github.io/utility-types/index.html) and start
playing around. Let’s tackle these types together!

```bash
npm i -D @recon-struct/utility-types
```

Thanks for reading!
