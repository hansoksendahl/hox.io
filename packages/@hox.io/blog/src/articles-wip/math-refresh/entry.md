![Surprised Pikachu
Meme](https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png)

I’ve written so many `hypot` functions to calculate Euclidean distances in
different projects that I've lost count. Imagine my surprise when Copilot
auto-completed with `Math.hypot` for the first time.

Now, gather 'round kids, because Grandpa has a tale from the JavaScript crypt.
I've been in the game since 2004, back when jQuery was just a twinkle in John
Resig’s eye. Those were the days when we had to memorize every browser quirk and
DOM method like we were preparing for some sort of twisted JavaScript spelling
bee. Supporting IE6? Absolute nightmare fuel. Writing HTML in tables? TABLES.
_flips table_ The dark times... I try to forget.

From 2010 to 2015, JavaScript was like an awkward teenager going through a
phase. Compile-to-JS languages were the new hotness—CoffeeScript in 2009, Elm
and TypeScript in 2012. Suddenly, we were all about transpiling. Babel made it
so we didn’t have to worry about ancient browser quirks anymore. Goodbye,
dastardly IE6.

In the midst of all this chaos, ES6 quietly slipped onto the scene, first only
through Babel, then browsers and Node embraced it. Updates came faster than you
could say "ECMAScript proposal". Somewhere in that whirlwind, I missed the memo
on the new static methods on the global `Math` object.

After my shocking `Math.hypot` epiphany, I dove into MDN's docs. To my horror,
there were a slew of functions I'd never seen before! I've been reinventing the
wheel for years. These were all part of the ES6 spec since 2015! 🤦‍♂️

So here we are. This post will detail every static method on the global `Math`
object for both our benefits.

## 🤓 Math

The `Math` object is like that one kid in class who knows everything. It’s a
global object in every JavaScript interpreter with a bunch of static methods,
all called with the verbose syntax `Math.functionName()`.

Let's break down what each of these functions does, one-by-one, in alphabetical
order. I’ll sprinkle in some nerdy tidbits for my fellow math geeks.

As of now, there are 36 static methods and 8 constants defined on the `Math`
object.

### Constants

Let's kick things off with the constants.

#### Math.E

![Lord Marquaad E
Meme](https://i.kym-cdn.com/entries/icons/original/000/026/008/Screen_Shot_2018-04-25_at_12.24.22_PM.png)

This is Euler's number, named after the mathematician [Leonhard
Euler](https://en.wikipedia.org/wiki/Leonhard_Euler). It's the base of the
natural logarithm, popping up everywhere in the natural sciences. Fun fact:
Euler didn’t actually discover it—it was [Jacob
Bernoulli](https://en.wikipedia.org/wiki/Jacob_Bernoulli) who first stumbled
upon it. But we’re not here to stir the Math naming drama.

$$
\text{E} = \sum \limits _{n=0}^{\infty }{\frac {1}{n!}}=1+{\frac {1}{1}}+{\frac
{1}{1\cdot 2}}+{\frac {1}{1\cdot 2\cdot 3}}+\cdots
$$

```typescript
const E = Math.E
```

#### Math.LN10

The natural log of 10.

$$\text{LN10} = \log _{e}(10)$$

```typescript
const LN10 = Math.LN10
```

> I think this constant was just included for conveinence in a previous version
> of JavaScript.
>
> Back in the old days JavaScript had just one logarithm function for the
> natural logarithm. So if you wanted a logarithm with a different base say `10`
> you had to do something hokey like the following.

```typescript
const LOG10_100 = Math.log(100) / Math.log(10)
```

Using this constant it could be reduced to:

```typescript
const LOG10_100 = Math.log(100) / Math.LN10
```

#### Math.LN2

The natural log of 2.

$$\text{LN2} = \log _{e}(2)$$

```typescript
const LN2 = Math.LN2
```

> Again, I think this constant is included to maintain compatibility with a
> bygone era when there was only one log function.

#### Math.LOG10E

The base 10 logarithm of `e` (Euler's Constant).

$$\text{LOG10E} = \log _{10}(e)$$

```typescript
const Log10E = Math.LOG10E
```

> Another old-school conversion constant that was needed.

#### Math.LOG2E

The base 2 logarithm of `e`.

$$\text{LOG2E} = \log _{2}(e)$$

```typescript
const LOG2E = Math.LOG2E
```

> Another old-school conversion constant that was needed.

#### Math.PI

The ratio of of a circle's circumference to its diameter.

$$\text{PI} = 4 \sum_{n=0}^{\infty} \frac{(-1)^n}{2n+1}$$

```typescript
const PI = Math.PI
```

#### Math.SQRT1_2

The square root of $\frac{1}{2}$.

$$\text{SQRT1\_2} = \sqrt{\frac{1}{2}} $$

```typescript
const SQRT1_2 = Math.SQRT1_2
```

> Coincidentally this is exactly the scaling factor to fit a square with sides
> of length `n` inside of a circle with diameter `n`.
>
> I did the
> [proof](https://docs.google.com/document/d/1NWMcfrTCn-k8MWdNVmWqaGW7KRRka9ltgqs9XORsBf0/edit?usp=sharing)
> in college after discovering it myself.

#### Math.SQRT2

The sqare root of 2.

$$\text{SQRT2} = \sqrt{2}$$

```typescript
const SQRT2 = Math.SQRT2
```

### Functions

JavaScript has 36 static methods on the `Math` object we'll go through all of
them in detail.

#### General Functions

These are functions that are just concerned with numbers. There are other
specialized functions on the `Math` object that are concerned with specific
topics.

##### Math.abs()

Returns the absolute value of a number `x`.

$$
\text{abs(x)} = {
  \begin{cases}
    x,&{\text{if }}x\geq 0\\
    -x,&{\text{if }}x<0.
  \end{cases}
}
$$

```typescript
const ex1 = Math.abs(-1) // 1
const ex2 = Math.abs(0) // 0
const ex3 = Math.abs(1) // 1
```

##### Math.cbrt()

Returns the cubic root of `x`.

$$\text{cbrt(x)} = \sqrt[3]{x}$$

```typescript
const ex1 = Math.cbrt(64) // 4
const ex2 = Math.cbrt(27) // 3
const ex3 = Math.cbrt(8) // 2
```

##### Math.log10()

Returns the base 10 logarithm of `x`.

$$\text{log10(x)} = log_{10}(x)$$

```typescript
const ex1 = Math.log(1_000) // 3
const ex2 = Math.log(100) // 2
const ex3 = Math.log(10) // 1
```

##### Math.log2()

Returns the base 2 logarithm of `x`

$$\text{log2(x)} = log_2(x)$$

```typescript
const ex1 = Math.log2(16) // 4
const ex2 = Math.log2(8) // 3
const ex3 = Math.log2(4) // 2
```

##### Math.max()

Returns the largest number in the input parameters `x`, or `Infinity` if no
parameters are given.

$$
\text{max}(\ldots x) = {
  \begin{cases}
    \{ \exists! x_i|x_i \in x \land x_j \in x \land x_i \geq x_j\}, & x.\text{length}>0\\
    \infin, & x=0.
  \end{cases}
}
$$

```typescript
const ex1 = Math.max(2, 3, 1) // 3
const ex2 = Math.max(1, 2) // 2
const ex3 = Math.max() // Infinity
```

##### Math.min()

Returns the smallest number in the input parameters `x`, or `Infinity` if no
parameters are given.

$$
\text{min}(\ldots x) = {
  \begin{cases}
    \{ \exists! x_i|x_i \in x \land x_j \in x \land x_i \leq x_j\}, & x.\text{length}>0\\
    \infin, & x=0.
  \end{cases}
}
$$

```typescript
const ex1 = Math.min(3, 2, 4) // 2
const ex2 = Math.min(1, 2) // 1
const ex3 = Math.min() // Infinity
```

##### Math.pow()

Returns the value of base `x` raised to the power of `y`.

$$\text{pow}(x, y) = x^y$$

```typescript
const ex1 = Math.pow(2, 2) // 4
const ex2 = Math.pow(2, 3) // 8
const ex3 = Math.pow(2, 4) // 16
```

##### Math.random()

Returns a random number `x` that is greater than or equal to 0 and less than 1.

$$\text{random()} = \{ \exists! x_r | 0 \leq x_r < 1 \}$$

```typescript
const ex1 = Math.random() // {∃!x|0 ≤ x < 1}
const ex2 = Math.random() * 10 // {∃!x|x ∈ ℝ ∧ 0 ≤ x < 10}
const ex3 = Math.floor(Math.random() * 10) // {∃!x|x ∈ ℕ ∧ 0 ≤ x < 10}
```

##### Math.sign()

Returns 1 if `x` is positive -1 if negative. If the `x` is 0 or -0, `x` is
returned as is.

$$
\text{sign(x)} = {
  \begin{cases}
    1, & x > 0\\
    -1, & x < 0\\
    x, & x = 0 \lor x = -0.
  \end{cases}
}
$$

```typescript
const ex1 = Math.sqrt(10) // 1
const ex2 = Math.sqrt(0) // 0
const ex3 = Math.sqrt(-10) // -1
```

##### Math.sqrt()

Returns the square root of `x`.

$$\text{sqrt(x)} = \sqrt{x}$$

```typescript
const ex1 = Math.sqrt(16) // 4
const ex2 = Math.sqrt(9) // 3
const ex3 = Math.sqrt(4) // 2
```

##### Math.trunc()

Returns the integer part of `x`, removing the fractional digits.

$$\text{trunc(x)} = x - (x - \lfloor x \rfloor)$$

```typescript
const ex1 = Math.sqrt(9.999) // 9
const ex2 = Math.sqrt(5.555) // 5
const ex3 = Math.sqrt(1.111) // 1
```

#### Rounding Functions

##### Math.ceil()

Returns the smallest integer greater than `x`.

$$\text{ceil(x)} = \lceil x \rceil$$

```typescript
const ex1 = Math.ceil(2.99) // 3
const ex2 = Math.ceil(1.66) // 2
const ex3 = Math.coil(0.33) // 1
```

##### Math.floor()

Returns the largest integer less than `x`.

$$\text{floor(x)} = \lfloor x \rfloor$$

```typescript
const ex1 = Math.floor(2.99) // 2
const ex2 = Math.floor(1.66) // 1
const ex3 = Math.floor(0.33) // 0
```

##### Math.round()

Returns the integer nearest to the value `x`.

$$
\text{round(x)} = {
  \begin{cases}
    \lceil x \rceil, & x - \lfloor x \rfloor \geq 0.5\\
    \lfloor x \rfloor, & x - \lfloor x \rfloor < 0.5.
  \end{cases}
}
$$

```typescript
const ex1 = Math.round(9.99) // 10
const ex2 = Math.round(5.55) // 6
const ex3 = Math.round(3.33) // 3
```

#### Trigonometric Functions

##### Math.acos()

Returns the inverse cosine in radians of a number `x`

<RightTriangle opposite="200" adjacent="150" hypotenuse="250"></RightTriangle>

```typescript
const ex1 = Math.cos()
```

##### Math.asin()

##### Math.atan()

##### Math.atan2()

##### Math.cos()

##### Math.hypot()

##### Math.sin()

##### Math.tan()

#### Hyperbolic Trigonometric Functions

##### Math.acosh()

##### Math.asinh()

##### Math.atanh()

##### Math.cosh()

##### Math.sinh()

##### Math.tanh()

#### Euler Functions

##### Math.exp()

##### Math.expm1()

##### Math.log()

##### Math.log1p()

#### Bit Precision Functions

##### Math.clz32()

##### Math.f16round()

##### Math.fround()

##### Math.imul()
