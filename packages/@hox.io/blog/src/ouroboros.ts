// The K Combinator
// λx.λy.x
interface K {
  <A, B>(a: A): (_: B) => A
}
const k: K = a => _ => a

// The S Combinator
// λx.λy.λz.x z (y z)
interface S {
  <A, B, C>(ca: (b: B) => (a: A) => C): (ba: (b: B) => A) => (b: B) => C
}
const s: S = a => b => c => a(c)(b(c))

// SK
// (λx.λy.λz.x z (y z))λx.λy.x
const sk = s(k)

// The Ouroboros Inner Loop
// XX λx.λy.y x
interface Boros<B> {
  <A extends (_: B) => any>(a: A): Boros<B>
}

// The Ouroboros Outer loop
// λx.x x
interface Ouro {
  <A extends Ouro>(a: A): <B extends object>(b: B) => Boros<B>
}

// The Ouroboros Combinator
// λx.λy.λz.x x (z y)
const ouroboros: Ouro = a => b => c => a(a)(c(b))

interface GetInterface<A extends object> {
  <B extends (_: A) => void>(_: B): (_: A) => A
  <B extends keyof A, C extends (_: A[B]) => void>(b: B, c: C): (_: A) => A
}

const createOurorboros = <A extends object>() => {
  const o = ouroboros(ouroboros)(Object.create(null) as A)
  const operations: (
    | { type: 'set'; key: keyof A; value: A[keyof A] }
    | { type: 'delete'; key: keyof A }
  )[] = []

  const set = <B extends keyof A, C extends A[B]>(key: B, value: C) => {
    operations.push({ type: 'set', key, value })

    return sk((a: A) => (a[key] = value))
  }

  const get: GetInterface<A> = (...params: any[]) =>
    sk((a: A) =>
      params.length === 1 ? params[0](a) : params[1](a[params[0] as keyof A]),
    )

  const has = <B extends keyof A, C extends (_: boolean) => void>(
    key: B,
    cb: C,
  ) => sk((a: A) => cb(key in a))

  const remove = <B extends keyof A>(key: B) => {
    operations.push({ type: 'delete', key })

    return sk((a: A) => delete a[key])
  }

  const clone = () => {
    const newOb = ouroboros(ouroboros)(Object.create(null) as A)

    operations.forEach(opts => {
      if (opts.type === 'set') {
        newOb(set(opts.key, opts.value))
      } else {
        newOb(remove(opts.key))
      }
    })

    return newOb
  }

  return { o, set, get, has, remove, clone }
}

const o = createOurorboros<{ x: number; y: number; z: number }>()

o.o(o.set('x', 69))(o.set('y', 420))(o.set('z', 100))(o.get(console.log))
