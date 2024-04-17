interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  location: 'Florida',
};

const student2: Student = {
  firstName: 'Smith',
  lastName: 'Matt',
  age: 28,
  location: 'San Francisco'
};

const studentsList: Student[] = [student1, student2];

document.body.innerHTML = `
<table>
    <thead class='table-head'>
        <tr>
        </tr>
    </thead>
    <tbody class='table-body'>
        <tr>
        </tr>
    </tbody>
</table>
`;

function insertTableHeadRow() {
  const studentProps: string[] = Object.keys(student1);
  const firstName = studentProps.indexOf('firstName');
  const location = studentProps.indexOf('location');

  const tableHeadRow: HTMLTableRowElement = document.querySelector('.table-head tr');

  let html: string = `
    <th class="column-title">${studentProps[firstName]}</th>
    <th class="column-title">${studentProps[location]}</th>
    `;

  tableHeadRow.insertAdjacentHTML('beforeend', html);
}

function insertRows() {
  const tableBody: HTMLElement = document.querySelector('.table-body');

  let html: string = '';

  studentsList.forEach((student: Student) => {
    html += `
        <tr>
            <td>${student.firstName}</td>
            <td>${student.location}</td>
        </tr>
        `;
  });

  tableBody.insertAdjacentHTML('beforeend', html);
}

insertTableHeadRow();
insertRows();
