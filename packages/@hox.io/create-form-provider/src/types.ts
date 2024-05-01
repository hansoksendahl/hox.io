import { AnyKey, AnyObject } from '@recon-struct/utility-types'

/**
 * Represents a generic object where the values are of type string.
 * @typeParam A - The type of the keys in the object.
 */
export type Values<A extends AnyKey = AnyKey> = Partial<AnyObject<A>>

/**
 * Represents a collection of errors.
 * @typeParam A - The type of the keys in the object.
 */
export type Errors<A extends AnyKey = AnyKey> = Partial<AnyObject<A>>

/**
 * Represents a collection of fields.
 * @typeParam A - The type of the keys in the object.
 */
export type Fields<A extends AnyKey = AnyKey> = Partial<AnyObject<A, boolean>>

/**
 * Represents a mapping of keys to boolean values indicating whether each key
 * has been touched.
 */
export type Touched<A extends AnyKey = AnyKey> = Partial<AnyObject<A, boolean>>

/**
 * Represents the state of a form.
 */
export interface FormState<A extends AnyKey = AnyKey> {
  fields: Fields<A>
  touched: Touched<A>
  errors: Errors<A>
  values: Values<A>
  isValid?: boolean
}

/**
 * Represents a validation function that takes an argument of type A and returns
 * an object of type Errors.
 *
 * @typeParam A - The type of the argument passed to the validation function.
 * @typeParam Errors - The type of the object returned by the validation function.
 */
export interface ValidationFunction<A extends AnyKey = AnyKey> {
  (a: Values<A>): Errors<A>
}
