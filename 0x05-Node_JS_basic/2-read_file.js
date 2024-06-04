const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
