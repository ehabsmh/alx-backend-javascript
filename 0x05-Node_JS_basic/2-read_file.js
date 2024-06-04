const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').toString();
    if (!data) {
      console.log('Cannot load the database');
      return;
    }
    const studentsList = data.split('\n').slice(1);
    if (!studentsList[-1]) {
      studentsList.pop();
    }

    const studentsObj = {};
    studentsList.forEach((student) => {
      const studentsList = student.split(',');
      const [firstName, , , field] = studentsList;
      if (!studentsObj[field]) studentsObj[field] = [];

      studentsObj[field].push(firstName);
    });

    console.log('Number of students:', studentsList.length);

    for (const student of Object.keys(studentsObj)) {
      console.log(`Number of students in ${student}: ${studentsObj[student].length}. List: ${studentsObj[student].join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
