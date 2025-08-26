export default function hasValuesFromArray(set, array) {
    if (!Array.isArray(array) || !(set instanceof Set)) {
        return false;
    } 
  return array.every((value) => set.has(value));
}
