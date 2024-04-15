export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  return listStudents.filter((student) => student.location === city).map((student) => {
    const grade = parseInt(newGrades.filter((grade) => student.id === grade.studentId)
      .map((studentGrade) => studentGrade.grade).join(''), 10);

    return {
      ...student,
      grade: Number.isNaN(grade) ? 'N/A' : grade,
    };
  });
}
