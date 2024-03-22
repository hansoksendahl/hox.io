import {useReducer} from 'react';

export default function useFire(reducer, initialState, init, name = 'reducer') {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    init,
    name,
  );

  function fire(type, payload) {
    dispatch({type, payload});
  }

  return {state, fire};
}
