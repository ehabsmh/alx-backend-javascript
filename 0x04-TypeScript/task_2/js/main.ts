interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return `Working from home`;
  }

  getCoffeeBreak() {
    return `Getting a coffee break`;
  }

  workDirectorTasks() {
    return `Getting to director tasks`;
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return `Cannot work from home`;
  }

  getCoffeeBreak() {
    return `Cannot have a break`;
  }

  workTeacherTasks() {
    return `Getting to work`;
  }
}

const createEmployee = function (salary: (number | string)): (Teacher | Director) {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


const isDirector = function (employee: (TeacherInterface | DirectorInterface)): employee is Director {
  return (employee as Director).workDirectorTasks() !== undefined;
}

const executeWork = function (employee: (Teacher | Director)): void {
  if (employee instanceof Director) {
    console.log(employee.workDirectorTasks());
  }

  if (employee instanceof Teacher) {
    console.log(employee.workTeacherTasks());;
  }
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));


type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects): string | boolean {
  return (todayClass === "Math") ? "Teaching Math" : (todayClass === "History") ? "Teaching History" : `${undefined}`
}
