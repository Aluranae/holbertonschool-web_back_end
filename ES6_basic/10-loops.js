export default function appendToEachArrayValue(array, appendString) {
  const mantra = [];
  for (const value of array) {
    mantra.push(appendString + value);
  }
  return mantra;
}
