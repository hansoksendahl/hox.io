```index.d.ts

@declare module '@recon-struct/strix' {

export type AnyKey = PropertyKey;
export type AnyObject<A extends AnyKey = AnyKey, B = any> = {
  [C in A]: B;
};
export type AnyPrimitive = string | number | bigint | boolean | symbol | null | undefined;
export interface HelperCaptureGroup<A extends string = string, B extends string = string> {
  start: A;
  end: B;
}
export type IsNever<A> = [
  A
] extends [
  never
] ? true : false;
export type IsExtension<A, B> = IsNever<A> extends true ? false : A extends B ? true : false;
export type IsEqual<A, B> = IsExtension<A, B> extends true ? IsExtension<B, A> extends true ? true : false : false;
export type ObjectAssignIdentity = {};
export type IsObjectAssignIdentity<A> = IsEqual<A, ObjectAssignIdentity>;
export type AnyMap<A = any, B = any> = Map<A, B>;
export interface AnyWeakMap<A extends object = object, B = any> extends WeakMap<A, B> {
}
export type KeyOf<A> = A extends AnyMap<infer B> ? B : A extends AnyWeakMap<infer C> ? C : keyof A;
export type AnyStringish = string | number | bigint | boolean | null | undefined;
export interface HelperToStringInterface {
  toString(): string;
}
export type ToString<A> = A extends AnyStringish ? `${A}` : A extends HelperToStringInterface ? ReturnType<A["toString"]> : never;
export type StringConcatIdentity = "";
export type IsStringConcatIdentity<A> = IsEqual<A, StringConcatIdentity>;
export type IsEmptyString<A> = IsStringConcatIdentity<A>;
export type IsTrue<A extends boolean> = IsEqual<A, true>;
export type If<A extends boolean, B = true, C = false> = IsTrue<A> extends true ? B : C;
export interface JoinOpts<A extends string = string> {
  value: A;
}
export type StringLike = AnyStringish | HelperToStringInterface;
export type Join<A extends StringLike[], B extends StringLike = "", C extends JoinOpts = JoinOpts<"">> = A extends [
  infer D,
  ...infer E
] ? D extends StringLike ? E extends StringLike[] ? Join<E, B, JoinOpts<If<IsEmptyString<C["value"]>, ToString<D>, `${C["value"]}${ToString<B>}${ToString<D>}`>>> : never : never : C["value"];
export interface GetKeysOpts<A extends string | undefined = string | undefined> {
  value: A;
}
export interface DeepObject {
  [_: AnyKey]: DeepObject | AnyPrimitive;
}
export type GetKeys<A extends DeepObject, B extends string = ".", C extends GetKeysOpts = GetKeysOpts<"">> = A extends object ? {
  [D in KeyOf<A>]: A[D] extends object ? D extends string ? IsObjectAssignIdentity<A> extends true ? Join<[
    C["value"],
    D
  ], B> : GetKeys<A[D], B, GetKeysOpts<Join<[
    C["value"],
    D
  ], B>>> : never : D extends string ? Join<[
    C["value"],
    D
  ], B> : never;
}[KeyOf<A>] : never;
export type GetValue<A extends DeepObject, B extends GetKeys<A, C>, C extends string = "."> = B extends `${infer D}${C}${infer E}` ? A[D] extends DeepObject ? E extends GetKeys<A[D], C> ? GetValue<A[D], E, C> : never : never : A[B];
export type DefaultCaputreGroup = HelperCaptureGroup<"{{", "}}">;
export type Capture<A extends DeepObject | AnyPrimitive, B extends HelperCaptureGroup = DefaultCaputreGroup, C extends string = never> = A extends `${string}${B["start"]}${infer D}${B["end"]}${infer E}` ? Capture<E, B, C | D> : C;
export type Interpolation<A extends DeepObject | AnyPrimitive, B extends HelperCaptureGroup = DefaultCaputreGroup, C extends AnyObject<Capture<A, B>, string> = AnyObject<Capture<A, B>, string>, D extends DeepObject | AnyPrimitive = A, E extends Capture<A, B> = Capture<A, B>> = D extends `${infer F}${B["start"]}${infer G}${B["end"]}${infer H}` ? G extends E ? Interpolation<A, B, C, `${F}${C[G]}${H}`, E> : never : D;

export declare const strix: <A extends DeepObject, B extends HelperCaptureGroup<string, string> = DefaultCaputreGroup>(templates: A, captureGroup?: B) => <C extends GetKeys<A>, D extends AnyObject<Capture<GetValue<A, C>, B, never>, string>>(key: C, ...params: Capture<GetValue<A, C>, B> extends never ? [
] : [
  D
]) => Interpolation<GetValue<A, C>, B, D>;

export default strix

}
```

![Introducing strix](https://storage.googleapis.com/hox-io-blog-assets/2024-05-20-yeah-buddy.webp)

I have been doing some work on a new project and I needed a way to interpolate
strings with objects. I wanted to use a syntax similar to
[Handlebars](https://handlebarsjs.com/), but I wanted to be able to use any
object as the context. I also wanted to be able to use nested objects and
arrays. I couldn't find a library that did exactly what I wanted, so I decided
to write my own.

I created a function called `strix` that takes a template object and an optional
capture group. The template object is a nested object where the values are
strings. The capture group is an object with `start` and `end` properties that
define the start and end of the capture group. The default capture group is
`{{` and `}}`.

The `strix` function returns a function that takes a key and an object. The key
is a string that represents the path to the value in the template object. The
object is the context that will be used to interpolate the template.

## Example Usage

Here is an example of how to use the `strix` function:

```typescript
import strix from '@recon-struct/strix'

const templates = {
  greeting: 'Hello, {{name}}!',
} as const

const sx = strix(templates)

const greeting = sx('greeting', { name: 'Alice' } as const)

console.log(greeting)
```

Don't believe me? Try hovering your cursor over the `greeting` variable in the
code block above. You should see the value `Hello, Alice!`.

The `strix` function is a powerful tool for interpolating strings with objects.
It allows you to use any object as the context, and it supports nested objects.

## Advanced Example

Here is an example of how to use the `strix` function with nested objects:

```typescript
import strix from '@recon-struct/strix'

const userStrings = {
  error: {
    duplicateEmail: 'The email {{email}} is already in use.',
  },
} as const

const sx = strix(userStrings)

const error = sx('error.duplicateEmail', {
  email: 'hans@oksendahl.com',
} as const)

console.log(error)
```

Using object nesting you can brake your string templates across multiple files
easily. This is a good way of organizing your strings in a large application.

## Conclusion

The `strix` function is a powerful tool for interpolating strings with objects.
It allows you to use any object as the context, and it supports nested objects.
It is a great type safe interface.

Additionally, using the `strix` function the TypeScript compiler is aware of the
value of any user facing string in your application. This means that you can
easily inspect the value of any string in your application by hovering your
cursor over it.
