export const TOUCH = 'touch';
export const CHANGE_VALUE = 'changeValue';

export default function createReducer(validate) {
  return function reducer(state, {type, payload}) {
    switch(type) {
      case TOUCH: {
        const {touchedPaths, ...restState} = state;

        touchedPaths.add(payload);

        return {
          ...restState,
          touchedPaths,
        }
      }
      case CHANGE_VALUE: {
        const {path, value} = payload;
        const {values, errors, ...restState} = state;

        const newValues = {
          ...values,
          [path]: value,
        };

        return {
          ...restState,
          values: newValues,
          errors: validate(newValues),
          isValid: Object.keys(errors).length === 0,
        }
      }
      default: {
        return state;
      }
    }
  }
}