import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(listStudents) {
  if (!Array.isArray(listStudents)) {
    return [];
  }
  const studentIds = getListStudentIds(listStudents);

  return studentIds.reduce((acc, curr) => acc + curr, 0);
}
