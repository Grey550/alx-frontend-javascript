// function that iterates through objects.
// the function's parameter is the return value from the previous function

export default function iterateThroughObject(reportWithIterator) {
  const result = [];
  for (const item of reportWithIterator) {
    result.push(item);
  }
  return result;
}
