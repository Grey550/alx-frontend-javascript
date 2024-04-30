export default function getStudentsByLocation(cityList , city) {
  return cityList.filter((students) => students.location === city);
}
