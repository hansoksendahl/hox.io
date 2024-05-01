import type { AnyObject, KeyOf, Tail } from '@recon-struct/utility-types'
import { JSX, createContext } from 'solid-js'
import { createStore, produce } from 'solid-js/store'

/**
 * Represents a mutation function that modifies the state object.
 * @typeParam A - The type of the state object.
 * @param state - The state object to be modified.
 * @param ..._ - Additional arguments that can be passed to the mutation function.
 */
export interface Mutation<A extends AnyObject> {
  (state: A, ..._: any[]): void
}

/**
 * Represents a collection of mutations for a given object type.
 */
export interface Mutations<A extends AnyObject> {
  [_: string]: Mutation<A>
}

/**
 * Represents an action that can be performed on a state object.
 * @typeParam A - The type of the state object.
 * @typeParam B - The type of the mutation function that modifies the state object.
 */
export interface Action<A extends AnyObject, B extends Mutation<A>> {
  (..._: Tail<Parameters<B>>): void
}

/**
 * Defines the type for actions in a state provider.
 * @typeParam A - The type of the state object.
 * @typeParam B - The type of the mutations object.
 */
export type Actions<A extends AnyObject, B extends Mutations<A>> = {
  [C in KeyOf<B>]: Action<A, B[C]>
}

/**
 * Props for the StateProvider component.
 */
export interface StateProviderProps {
  children: JSX.Element
}

/**
 * Creates a state provider with the given initial state and mutations.
 *
 * @typeParam A - The type of the initial state.
 * @typeParam B - The type of the mutations.
 * @param initialState - The initial state.
 * @param mutations - The mutations to be applied to the state.
 * @returns An object containing the StateContext and StateProvider components.
 */
const createStateProvider = <A extends AnyObject, B extends Mutations<A>>(
  initialState: A,
  mutations: B,
) => {
  const keys = Object.keys(mutations) as KeyOf<B>[]
  const initialActions = {} as Actions<A, B>
  const initialContext: [A, Actions<A, B>] = [initialState, initialActions]
  const StateContext = createContext(initialContext)
  const [state, setState] = createStore(initialState)
  const context = [
    state,
    keys.reduce((memo, key) => {
      memo[key] = <C extends Tail<Parameters<B[typeof key]>>>(...params: C) =>
        setState(produce(draft => mutations[key](draft, ...params)))

      return memo
    }, initialActions),
  ] as [A, Actions<A, B>]

  const StateProvider = (props: StateProviderProps) => (
    <StateContext.Provider value={context}>
      {props.children}
    </StateContext.Provider>
  )

  return { StateContext, StateProvider }
}

export default createStateProvider
