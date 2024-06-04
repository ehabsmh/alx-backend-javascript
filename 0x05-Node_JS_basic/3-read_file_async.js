const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      const studentsList = data.split('\n').slice(1);
      if (!studentsList[-1]) {
        studentsList.pop();
      }

      const studentsObj = {};
      const logs = [];
      studentsList.forEach((student) => {
        const studentsList = student.split(',');
        const [firstName, , , field] = studentsList;
        if (!studentsObj[field]) studentsObj[field] = [];

        studentsObj[field].push(firstName);
      });

      console.log(`Number of students: ${studentsList.length}`);
      logs.push(`Number of students: ${studentsList.length}`);

      for (const student of Object.keys(studentsObj)) {
        const log = `Number of students in ${student}: ${studentsObj[student].length}. List: ${studentsObj[student].join(', ')}`;
        console.log(log);
        logs.push(log);
      }
      resolve(logs);
    });
  });
}

module.exports = countStudents;
