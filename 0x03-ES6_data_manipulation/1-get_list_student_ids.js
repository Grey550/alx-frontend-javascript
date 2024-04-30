export default function getListStudentIds(arrayList) {
  if (!Array.isArray(arrayList)) {
    return [];
  }
  return arrayList.map((students) => students.id);
}
