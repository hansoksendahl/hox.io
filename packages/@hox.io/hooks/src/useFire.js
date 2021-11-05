import {useReducer} from 'react';

export default function useFire(reducer, initialState, init, name) {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    init,
    'zui'
  );

  function fire(type, payload) {
    dispatch({type, payload});
  }

  return {state, fire};
}