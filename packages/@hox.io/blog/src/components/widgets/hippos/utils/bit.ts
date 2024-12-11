/**
 * Retrieves the bit value (0 or 1) at the specified index in a given number.
 *
 * @param num - The number from which to extract the bit.
 * @param index - The zero-based position of the bit to retrieve.
 * @returns The bit value (0 or 1) at the specified index.
 */
export const getBit = (num: number, index: number): number => {
  return (num >> index) & 1
}

/**
 * Sets the bit at the specified index to 1.
 *
 * @param num - The number whose bit is to be set.
 * @param index - The index of the bit to set (0-based).
 * @returns The new number with the bit set.
 */
export const setBit = (num: number, index: number): number => {
  return num | (1 << index)
}

/**
 * Clears the bit at the specified index in the given number.
 *
 * @param num - The number from which the bit will be cleared.
 * @param index - The index of the bit to clear (0-based).
 * @returns The new number with the bit at the specified index cleared.
 */
export const clearBit = (num: number, index: number): number => {
  return num & ~(1 << index)
}

/**
 * Toggles the bit at the specified index in a given number.
 *
 * @param num - The number whose bit is to be toggled.
 * @param index - The index of the bit to toggle (0-based).
 * @returns The new number with the bit at the specified index toggled.
 */
export const toggleBit = (num: number, index: number): number => {
  return num ^ (1 << index)
}

/**
 * Checks if the bit at the specified index is set (i.e., is 1) in the given number.
 *
 * @param num - The number to check.
 * @param index - The index of the bit to check (0-based).
 * @returns `true` if the bit at the specified index is set, otherwise `false`.
 */
export const isBitSet = (num: number, index: number): boolean => {
  return ((num >> index) & 1) === 1
}

/**
 * Creates a bitmask of the specified length.
 *
 * @param length - The length of the bitmask to create.
 * @returns A bitmask of the specified length.
 */
export const createMask = (length: number): number => {
  return (1 << length) - 1
}

/**
 * Extracts a sequence of bits from a given number.
 *
 * @param num - The number from which to extract bits.
 * @param length - The number of bits to extract.
 * @param start - The starting position (from the right) to begin extraction. Defaults to 0.
 * @returns The extracted bits as a number.
 */
export const getBits = (
  num: number,
  length: number,
  start: number = 0,
): number => {
  return (num >> start) & createMask(length)
}
