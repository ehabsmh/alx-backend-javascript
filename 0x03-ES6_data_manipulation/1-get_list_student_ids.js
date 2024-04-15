export default function getListStudentIds(listStudents) {
  if (Object.getPrototypeOf(listStudents) !== Array.prototype) {
    return [];
  }

  return listStudents.map((student) => student.id);
}
