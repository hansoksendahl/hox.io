import React, {createContext} from 'react';
import {useFire} from '@hox.io/hooks';

export default function createStore() {
  const context = createContext();

  function Store({
    children,
    reducer,
    initialState,
    init,
  }) {
    const {state, fire} = useFire(
      reducer,
      initialState,
      init,
    );

    return (
      <>
        <context.Provider value={{state, fire}}>
          {children}
        </context.Provider>
      </>
    );
  }

  return {context, Store};
};