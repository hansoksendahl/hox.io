export default function createInputEventHandler(callback) {
  return ({target: {value}}) => callback(value);
}