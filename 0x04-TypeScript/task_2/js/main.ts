interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface extends DirectorInterface { }

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

  workDirectorTasks() {
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
