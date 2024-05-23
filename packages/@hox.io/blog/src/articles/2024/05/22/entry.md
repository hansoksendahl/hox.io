![Functional Programming FTW](https://storage.googleapis.com/hox-io-blog-assets/2024-05-22-fp-ftw.webp)

It took a long time, but functional programming has finally won me over. 𝜆 for
the win! 🏆

So, here’s the rub. I was deep in the weeds, knee-deep in types for some utility
functions. One of these little beasts was for partial application, letting you
slap parameters on a function in any chaotic grouping you fancy—all while
retaining that sweet, sweet type safety.

Now, the hitch: for each set of length 𝑛, there are 2ⁿ possible ordered
groupings. Generating all these by hand would be more tedious than listening to
someone explain NFTs at a party. And let's face it, that's about as error-prone
as a drunk intern.

Cue me, tinkering around with some functional programming utilities I concocted.
After some trial and mostly error, I whipped up this gem.

It’s harder to read than War and Peace backward but, oh boy, is it elegant. It
even comes with a nifty performance optimization because I’m fancy like that.

Sure, it’s still nearly impossible to read, but hey, that's what makes it fun,
right? 😜

```typescript
const createPartials = (n: number) =>
  pipe(
    seq(n),
    pBuild<number, number[] | (number | number[][])[][]>((val, { acc }) =>
      val === 0
        ? [[0]]
        : pipe(
            seq(val, val, 1),
            pMap(x => {
              const delta = val - x

              if (delta === 0) return [x]

              const lookup = acc[delta] as number[][]
              const len = lookup.length

              return len === 1 ? [x, lookup[0][0]] : [x, lookup]
            }),
          ),
    ),
  )
```

I used the function above to help generate the [types for these unit
tests](https://github.com/recon-struct/utility-types/blob/main/src/function/part-app/part-app-8.spec.ts#L394)
in the [utility-type library](https://github.com/recon-struct/utility-types) I
am working on.

You can see the hacky code I used to generate the code
[here](https://github.com/recon-struct/utils/blob/main/src/examples/arity/gen-partials.ts).

Oooh... birds ar chirping 🐦 guess it's time to go to bed! 😅
