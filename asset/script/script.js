// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const rows = document.querySelector(".card-body").querySelectorAll('th');




//  document.getElementsByClassName("card-body").querySelector('th');


// Collect employee data
  // TODO: Get user input to create and return an array of employee objects

const collectEmployees = function(employeesArray = []) {
  const firstName = prompt("employee's first name");
  const lastName = prompt("employee's last name");
  const salary = prompt("employee's salary");
  employeesArray.push({firstName: firstName, lastName: lastName, salary: salary});

  const addMore = confirm("okay to add more employees, cancel in no more employees");
  if (addMore === false){
    console.table(employeesArray)
    return employeesArray;
  }
    return collectEmployees(employeesArray)   
  }
// function insertData(employees=[]) {
//     const employee = document.querySelector("#employee-table").querySelectorAll("td");
//     const a = employeesArray[firstName, lastName, salary];
// for (let i = 1; i < employee.length; i++){
//     employee[i].children[0].append = a[i-1].firstName
//     employee[i].children[1].append = a[i-1].lastName
//     employee[i].children[2].append = a[i-1].salary
//         }
//     }
//     insertData();



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
    // const salCol = document.getElementsByID("#salary");

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);