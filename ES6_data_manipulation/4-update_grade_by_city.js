export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const stat = newGrades.find((grade) => grade.studentId === student.id);
      return { ...student, grade: stat ? stat.grade : 'N/A' };
    });
}
