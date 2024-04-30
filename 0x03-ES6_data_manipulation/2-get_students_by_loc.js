export default function getStudentsByLocation(cityList) {
  return cityList.filter((students) => students.location.length > 9);
}
