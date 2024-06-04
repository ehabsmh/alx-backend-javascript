const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) throw new Error('Cannot load the database');

  const data = fs.readFileSync(path, { encoding: 'utf-8' });
  const students = data.split('\n').slice(1);
  if (!students[-1]) {
    students.pop();
  }

  const csStudentsNames = [];
  const sweStudentsNames = [];
  students.forEach((student) => {
    const studentsList = student.split(',');
    const [firstName, , , field] = studentsList;
    if (field === 'CS') {
      csStudentsNames.push(firstName);
    } else if (field === 'SWE') {
      sweStudentsNames.push(firstName);
    }
  });

  console.log('Number of students:', students.length);
  console.log(`Number of students in CS: ${csStudentsNames.length}. List: ${csStudentsNames.join(', ')}`);
  console.log(`Number of students in SWE: ${sweStudentsNames.length}. List: ${sweStudentsNames.join(', ')}`);
}

module.exports = countStudents;
