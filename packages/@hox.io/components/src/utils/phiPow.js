import {Phi} from '../constants';

export default function phiPow(n, units) {
  const value = Phi ** n;

  return units
    ? `${value}${units}`
    : value;
}