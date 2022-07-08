// Modul 10 Kodilla Tasks

const names = ['Kasia', 'Tomek', 'Amanda', 'Maja'];
const newArray = [];
const newArray1 = [];
const newArray2 = [];
const newArray3 = [];


for (let name in names) {
  if (names[name].slice(-1) == 'a') {
    newArray.push(names[name])
  } // iteruje domysle po obiektach i ich wlasciowosciach
}
console.log('nowa tablica debil1', newArray);


for (let name of names) {
  if (name.slice(-1) == 'a') {
    newArray1.push(name)
  } //iteruje po wartosciach tablic
}
console.log('nowa tablica ebil2', newArray1);



names.forEach(element => {
  if (element.slice(-1) == 'a') {
    newArray2.push(element)
  }
});

console.log('nowa tablica debil', newArray2);

// jak dziala 
// function forEach(callback) {
//  for (let name of names) {
//   callback(name)
// }
// }



for (let name of names) {
  if (name.charAt(name.length - 1) == 'a')
    newArray3.push(name)
}

console.log('debil3', newArray3);

//To już trochę trudniejsze zadanie. Za pomocą pętli for przejdź po każdym obiekcie w employees i wygeneruj dwie nowe tablice. employeesNames 
// powinno być listą imion pracowników (tylko imion!). employeesSalaries powinno być listą pensji.

// Uwaga! Bardzo przydatna może okazać się znana Ci już metoda split.

const employees = {
  john: {
    name: 'John Doe',
    salary: 3000
  },
  amanda: {
    name: 'Amanda Doe',
    salary: 4000
  },
}

function task2() {
  const employeesNames = [];
  const employeesSalaries = [];

  for (let employee in employees) {
    const name = employees[employee].name.split(' ')[0]  //
    employeesNames.push(name)
    const salary = employees[employee].salary
    employeesSalaries.push(salary)
  }

  console.log('Task2 Names', employeesNames);
  console.log('Task 2 Salaries', employeesSalaries);
}
task2()


function task3() {
  const salaries = [2000, 3000, 1500, 6000, 3000];
  let sum = 0
  const highestSalary = Math.max(...salaries);
  const smallesSalary = Math.min(...salaries);

  for (let salary of salaries) {
    sum += salary

  }

  console.log('Suma', sum);
  console.log('Highest Num', highestSalary);
  console.log('Lowest Num', smallesSalary);
}

task3()


function task4() {
  let sum = 0


  const persons = {
    john: 2000,
    amanda: 3000,
    thomas: 1500,
    james: 6000,
    claire: 3000
  };

  for (let person in persons) {
    sum += persons[person]
  }

  const values = Object.values(persons);
  console.log('Values', values);
  const highestSalary = Math.max(...values);
  const smallesSalary = Math.min(...values);

  console.log('SumTask4', sum);
  console.log('BigTask4', highestSalary);
  console.log('SmallTask4', smallesSalary);
}

task4()


function task5() {
  const tags = ['news', 'code', 'news', 'sport', 'hot', 'news', 'code'];
  const uniqueTags = {}

  for (let tag of tags) {

    if (!uniqueTags[tag])   // zaprzeczenie warunku 
      uniqueTags[tag] = { appearances: 1 }
    else
      uniqueTags[tag].appearances++
  }
  console.log('uniquetags co to ', uniqueTags);

}
task5()



const task6 = function () {

  // Napisz funkcję filterEmployees, która będzie pobierać dwa argumenty:

  // tablicę z obiektami o strukturze { name: 'Imię nazwisko', salary: kwota-pensji }
  // wartość minimalną zakresu,
  // wartość maksymalną zakresu.
  // Zadaniem naszej funkcji ma być zwrócenie nowej tablicy, która będzie posiadać tylko te osoby, których dochód jest większy niż wartość minimalna i mniejszy niż maksymalna.

  const employees = [
    { name: 'Amanda Doe', salary: 3000 },
    { name: 'John Doe', salary: 4000 },
    { name: 'Claire Downson', salary: 2000 },
    { name: 'Freddie Clarkson', salary: 6000 },
    { name: 'Thomas Delaney', salary: 8200 }
  ];

  /* It should return
  [{
    { name: 'Amanda Doe', salary: 3000 },
    { name: 'John Doe', salary: 4000 },
    { name: 'Freddie Clarkson', salary: 6000 },
  }];*/

  const filterEmployees = function (employees, min, max) {
    const empArray = []

    for (let employee of employees) {
      // console.log('dafuck', employee);
      // console.log('pensja', employee.salary);

      if (employee.salary > min && employee.salary < max) {
        empArray.push(employee)
      }
    }
    return empArray
  }


  const filteredEmployees = filterEmployees(employees, 2000, 8000);
  console.log(filteredEmployees);
}

task6()



const task7 = function () {

  const objs = {
    firstName: 'John',
    lastName: 'Doe'
  }

  for (let obj in objs) {
    console.log(obj + ':', objs[obj]);
  }

}

task7()

