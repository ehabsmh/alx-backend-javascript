export default function createIteratorObject(report) {
  const arr = [];
  let i = 0;

  while (Object.values(report.allEmployees)[i]) {
    const departEmployees = Object.values(report.allEmployees)[i];
    arr.push(...departEmployees);
    i += 1;
  }
  return arr;
}
