export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  // eslint-disable-next-line guard-for-in
  for (const idx of array) {
    newArray.push(`${appendString}${idx}`);
  }

  return newArray;
}
