![SigFigs Illustration](https://storage.googleapis.com/hox-io-blog-assets/2024-09-15-sig-figs.webp)

> Ah, significant figures—the passive-aggressive punctuation of numbers in
> science. They're like the "fine, whatever" of precision. You think you know
> how accurate your data is? Well, think again. Significant figures are here to
> say, "Not so fast, buddy. You're not that precise."
>
> Alright, let’s break this down.

---

# Significant Figures: Because Life Isn't Precise, and Neither Are You

Significant figures are a method used in the sciences to, in essence, **control
your delusions of mathematical grandeur.** Yeah, they’re a way to reduce the
propagation of error, sure, but let's be real—they’re also science’s way of
keeping you humble.

When you're throwing around numbers in a lab report or some high-stakes
spreadsheet, **sig figs** come in like the cold, unfeeling gatekeepers they are.
They're here to tell you that no matter how fancy your calculator is, the real
world is messy, chaotic, and doesn’t give a damn about your extra decimal
places. You're not as precise as you think, champ. Significant figures are that
mathematical slap on the wrist reminding you that you’re merely guessing, and
those guesses can only be as accurate as the data you started with.

### Why We Care About Significant Figures

Here’s the deal: in any kind of scientific experiment—or even when you're just
baking something more complicated than toast—every measurement you take is an
approximation. No tool is perfect, and neither are you. By limiting how many
figures you report, you’re saying, *"Hey, I know this ruler was made in some
sweatshop and isn’t accurate down to the atomic level, so let’s not pretend I
measured this desk to the nearest molecule."* Sig figs help you manage that
hubris.

Significant figures are useful for any situation in which precision actually
matters. Like, if you’re building a bridge, you might want to make sure that all
your measurements don’t just trail off into an absurd level of detail, only to
find out you’ve accidentally built a 15-foot catapult. When precision gets out
of hand, *chaos* ensues.

### The (Absurd) Rules of Significant Figures

Honestly, the rules for significant figures are a bit like that houseplant
you’ve kept alive purely out of spite. There’s a method to it, but it's also
just a constant reminder that you’ve been doing everything wrong. Here's a quick
rundown of how to use them without wanting to throw your calculator through a
window:

1. **Non-zero numbers are always significant**. Basically, if it’s not zero, it
   counts. Big surprise.
2. **Any zeros between non-zero digits are significant**. These are the
   middle-child zeros—*someone* needs to notice them.
3. **Leading zeros are not significant**. Sorry, pal, if you’re leading the
   charge but you’re a zero, you don’t matter. It’s brutal, I know, but science
   is heartless.
4. **Trailing zeros in a decimal point are significant**. Think of them as
   punctuation. If there’s a decimal, they matter. If not, well... they’re just
   hanging around like awkward extras in a movie.

### Real-World Applications: Not Just for Nerds

Sure, you can use significant figures when you're mixing volatile chemicals or
crunching climate data, but they also matter in the mundane corners of life.
You’re tracking your bank balance, and let’s be real—does it actually make sense
to include the $0.003 that’s supposedly in your favor? You might just want to
round that one down before your overdraft kicks in.

In the kitchen, too. You’re making grandma’s sauce recipe and it says “1.02 cups
of sugar”? Nah, just call it one cup and be done with it. Significant figures
just saved you from a syrupy mess.

## TypeScript Generic Type: Tallying Up Significant Figures Like a Total Nerd

Okay, so you’ve embraced the idea of significant figures, but now you're
thinking, *"How do I make this more unnecessarily complicated and
programmatic?"* Say no more. Enter **TypeScript generics**—the tool that allows
you to write code that works with types in a flexible way. They’re like the
"Choose Your Own Adventure" of programming languages, but without the crippling
fear of making the wrong choice (mostly).

So, how would you create a generic type in TypeScript that tallies significant
figures? I’ll walk you through it, but let’s be real—**this is definitely
over-engineering**. But that’s what makes it fun, right?

### Step 1: What Are We Even Counting?

First off, when we talk about significant figures in code, we need to define
what we’re counting. Are we talking about counting digits after the decimal? Or
are we going all-in and counting only meaningful digits, ignoring leading zeros
like they’re your ex at a party? Yeah, we’re doing the latter.

### Step 2: Designing the TypeScript Generic Type

We’ll need a way to extract meaningful digits from a number and tally them up.
Let’s assume we’ve got an input number as a string because, let’s face it,
JavaScript/TypeScript is pretty loose when it comes to handling numbers. Strings
make our life easier when parsing those digits. The following TypeScript magic
involves recursion because why solve a problem in a simple loop when you can
flex?

### Making it Concrete

Let's take these rules and put them to task. We'll start by defining types for
the different elements of a number that we care about. Then we will define the
internal state needed by our recursive type to parse signifcant figures. Finally
we will define a recursive type that counts the number of significant figures in
the string represntation of a number.

> Keep in mind the JavaScript native number formats throw mathematical precision
> away that is why we are going to use strings to represent numbers.

```typescript
type Zero = '0'

type NonZeroDigit = `${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`

type DecimalPoint = '.'

type NegativeSign = '-'

interface SigFigsState<
	A extends string[] = string[],
	B extends boolean = boolean,
	C extends boolean = boolean,
	D extends string[] = string[],
> {
	digits: A
	isCounting: B
	isAfterDecimal: C
	zeroes: D
}

type SigFigs<
	A extends string,
	B extends SigFigsState = SigFigsState<[], false, false, []>,
> = A extends `${infer C extends string}${infer D extends string}`
	? C extends NegativeSign
		? SigFigs<D, B>
		: C extends DecimalPoint
			? SigFigs<
					D,
					SigFigsState<B['digits'], B['isCounting'], true, B['zeroes']>
				>
			: C extends NonZeroDigit
				? SigFigs<
						D,
						SigFigsState<
							[...B['digits'], ...B['zeroes'], C],
							true,
							B['isAfterDecimal'],
							[]
						>
					>
				: C extends Zero
					? B['isCounting'] extends true
						? B['isAfterDecimal'] extends true
							? SigFigs<
									D,
									SigFigsState<
										[...B['digits'], ...B['zeroes'], C],
										B['isCounting'],
										B['isAfterDecimal'],
										[]
									>
								>
							: SigFigs<
									D,
									SigFigsState<
										B['digits'],
										B['isCounting'],
										B['isAfterDecimal'],
										[...B['zeroes'], C]
									>
								>
						: SigFigs<D, B>
					: SigFigs<D, B>
	: B['digits']['length']

type Ex1 = SigFigs<'1'> // 1
type Ex2 = SigFigs<'10'> // 1
type Ex3 = SigFigs<'10.0'> // 3
type Ex4 = SigFigs<'0.1'> // 1
type Ex5 = SigFigs<'0.01'> // 1
type Ex6 = SigFigs<'0.10'> // 2
```

---

In conclusion, **significant figures** are that necessary buzzkill in the world
of measurement. They're like a hipster at a party telling you to stop pretending
you're too cool to care about math. Love them or hate them, they're here to make
sure you don't overestimate your ability to control the universe. Keep those
decimals in check, and maybe you won’t be the one who crashes the bridge or
burns the soufflé.
