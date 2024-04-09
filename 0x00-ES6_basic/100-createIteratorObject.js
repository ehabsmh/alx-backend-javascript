export default function createIteratorObject(report) {
  const arr = [];
  let i = 0;

  while (Object.entries(report.allEmployees)[i]) {
    /* console.log(Object.entries(report.allEmployees)[i][1]); */
    const departEmployees = Object.entries(report.allEmployees)[i][1];
    arr.push(...departEmployees);
    i += 1;
  }
  return arr;
}
