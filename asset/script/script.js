// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const rows = document.querySelector(".card-body").querySelectorAll('th');

// Collect employee data
  // TODO: Get user input to create and return an array of employee objects


  const collectEmployees = function(employeesArray = []) {
    const firstName = prompt("Enter employee's first name:");
    const lastName = prompt("Enter employee's last name:");
    let salary = prompt("Enter employee's salary:");
  
    // Validate that the salary is a number -- this is new!!
    while (isNaN(salary)) {
      alert("Please enter a valid number for the salary.");
      salary = prompt("Enter employee's salary:");
    }
  
    employeesArray.push({ firstName: firstName, lastName: lastName, salary: Number(salary) });
  
    const addMore = confirm("Add another employee?");
    if (!addMore) {
      console.table(employeesArray);
      return employeesArray;
    }
  
    return collectEmployees(employeesArray);
  }

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
    // const salCol = document.getElementsByID("#salary");
    console.log(employeesArray)
    let totalSalary = 0;
    for(let i = 0; i < employeesArray.length; i++) {
      totalSalary += parseFloat(employeesArray[i].salary);

    }
    let totalEmployees = employeesArray.length;
    let averageSalary = totalSalary / employeesArray.length;

    console.log(`The employee average salary between our ${totalEmployees} employees is ${averageSalary}.`)


}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  console.table(employeesArray);

  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(`Congrats to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`)
  return randomEmployee;




  // TODO: Select and display a random employee
  // console.log(`Congrats to ${firstName} ${lastName}, our random drawing winner! `);
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