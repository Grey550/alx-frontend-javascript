export default function getSumOfHoods(initialNumber = 1, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    // eslint-disable-next-line no-param-reassign
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    // eslint-disable-next-line no-param-reassign
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
