import React, {useContext, createContext} from 'react';
import initialState from './initialState';
import createReducer, {TOUCH, CHANGE_VALUE} from './reducer';
import {useFire} from '@hox.io/hooks';

export default function createForm() {
  const context = createContext();

  function useForm(path) {
    const {
      state: {
        touchedPaths,
        values,
        errors,
      },
      setTouched,
      setValue,
    } = useContext(context);
  
    const value = values[path];
    const touched = touchedPaths.has(path);
    const error = touched && errors[path];
  
    return {
      touched,
      value,
      error,
      setTouched() {
        setTouched(path)
      },
      setValue(currentValue) {
        setValue(path, currentValue);
      },
    };
  }

  function Form({
    children,
    values,
    validate,
  }) {
    const {state, fire} = useFire(
      createReducer(validate),
      initialState,
      (initialState) => {
        const newState = {
          ...initialState,
          values,
          errors: validate(values),
        };

        return {
          ...newState,
        }
      },
    );

    function setTouched(path) {
      fire(TOUCH, path);
    }

    function setValue(path, value) {
      fire(CHANGE_VALUE, {path, value});
    }

    return (
      <>
        <context.Provider value={{state, setTouched, setValue}}>
          {children}
        </context.Provider>
      </>
    );
  }

  return {context, Form, useForm};
}