import phiPow from './phiPow';

export default function parseSides(description, units) {
  return Array.isArray(description)
    ? description.map(side => side > 0 ? phiPow(side, units) : 0).join(' ')
    : phiPow(description, units);
}