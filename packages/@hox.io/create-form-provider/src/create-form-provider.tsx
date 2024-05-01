import createStateProvider from '@hox.io/create-state-provider'
import { AnyKey } from '@recon-struct/utility-types'
import { useContext } from 'solid-js'
import { JSX } from 'solid-js/jsx-runtime'
import { FormState, Touched, ValidationFunction, Values } from './types'

/**
 * Props for the FormProvider component.
 */
export interface FormProviderProps {
  children: JSX.Element
}

/**
 * Represents the validation state of a form field.
 * It can be either 'valid', 'invalid', or undefined.
 */
export type ValidationState = 'valid' | 'invalid' | undefined

/**
 * Creates a form provider with the specified initial state and validation function.
 * @typeParam A - The type of the form state.
 * @typeParam B - The type of the validation function.
 * @param initialState - The initial state of the form.
 * @param initialValidationFunction - The initial validation function for the form.
 * @returns An object containing the FormContext, FormProvider, and getFieldProps function.
 */
const createFormProvider = <A extends AnyKey>(
  initialState: FormState<A>,
  initialValidationFunction: ValidationFunction<A>,
) => {
  let validationFunction = initialValidationFunction
  const { StateContext: FormContext, StateProvider: FormProvider } =
    createStateProvider(
      { ...initialState },
      {
        registerField: (draft, fieldName: A) => {
          draft.fields[fieldName] = true
        },
        prepareSubmit: draft => {
          draft.errors = validationFunction(draft.values)
          draft.touched = { ...draft.fields }
        },
        deleteField: (draft, fieldName: A) => {
          delete draft.fields[fieldName]
          delete draft.touched[fieldName]
          delete draft.values[fieldName]
          draft.errors = validationFunction(draft.values)
          draft.isValid = Object.keys(draft.errors).length === 0
        },
        touchField: (draft, fieldName: A) => {
          draft.touched[fieldName] = true
          draft.errors = validationFunction(draft.values)
          draft.isValid = Object.keys(draft.errors).length === 0
        },
        changeField: (
          draft,
          fieldName: A,
          value: FormState<A>['values'][typeof fieldName],
        ) => {
          draft.values[fieldName] = value
          draft.errors = validationFunction(draft.values)
          draft.isValid = Object.keys(draft.errors).length === 0
        },
        init: (
          draft,
          incomingState: Pick<
            typeof initialState,
            'fields' | 'touched' | 'values'
          >,
        ) => {
          draft.fields = {
            ...incomingState.fields,
          }
          draft.touched = {
            ...incomingState.touched,
          }
          draft.values = {
            ...incomingState.values,
          }
          ;(draft.errors = validationFunction(incomingState.values)),
            (draft.isValid = Object.keys(draft.errors).length === 0)
        },
        reset: draft => {
          draft.values = {} as Values<A>
          draft.errors = validationFunction(draft.values)
          draft.touched = {} as Touched<A>
          draft.isValid = Object.keys(draft.errors).length === 0
        },
        replaceValidationFunction: (
          _,
          newValidationFunction: ValidationFunction<A>,
        ) => {
          validationFunction = newValidationFunction
        },
      },
    )

  /**
   * Returns the field props for a given field name.
   * @typeParam C - The type of the field name.
   * @param fieldName - The name of the field.
   * @returns An object containing the field props.
   */
  const getFieldProps = <C extends A>(fieldName: C) => {
    const [state, { touchField, changeField, registerField }] =
      useContext(FormContext)

    registerField(fieldName)

    return {
      isTouched: state.touched[fieldName],
      value: state.values[fieldName],
      error: state.errors[fieldName],
      onBlur: () => touchField(fieldName),
      onChange: (value: FormState<A>['values'][C]) =>
        changeField(fieldName, value),
      validationState: (state.touched[fieldName]
        ? fieldName in state.errors
          ? 'invalid'
          : 'valid'
        : undefined) as ValidationState,
    }
  }

  return { FormContext, FormProvider, getFieldProps }
}

export default createFormProvider
