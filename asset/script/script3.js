/*Display the webpage as is. Have it wait until the user click "Add user"
When "add employees is clicked" there should be 3 prompts to collect user data (we can use an object here)
after the three questions are asked, it should ask if I want to add more employees
ok or cancel. cancel would then display the information on the table

after all info is displayed, in the console, we need to see average salary
we need to choose a random person concat name and print in console they're the random winner 
*/

/*declare variables */


/*when clicked, loop prompts to get user data and ask if we want to add more
if okay, keep prompt, if cancel - stop*/



/*get a random person from the list*/

/*simple math function to average totals */

/*what do I need to do to make this this work
1. create a space for data to be placed in so when button clicked, be able to put info somewhere

2. when the button is clicked, generate a prompt to collect the information. keep adding info?
3. If cancel, when adding more users, write data collected to display informaiton on the screen
4. 

*/

const collectEmployees = function (currentArray=[]) {
  // let continueAdd = true
  const first = prompt("Employee first name");
  const last = prompt("Employee last name");
  const salary = prompt("Employee's salary");
  currentArray.push({firstName: firstName, lastName: lastName, salary: salary});
  const continueAdd = confirm("Ok to add more employees, cancel to stop");
  if (continueAdd) {
    return collectEmployees(currentArray);
  } else {
    console.log(employeesArray);
    return currentArray;
}}

// let firstNamePrompt = prompt("Employee first name");
// let lastNamePrompt = prompt("Employee last name");
// let salaryPrompt = prompt("Employee's salary");

// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
//add an event listener for the button click
addEmployeesBtn.addEventListener('click', function() {
  if ('collectEmployees' === 'null') {
    collectEmployees();
  }
 
  
})
// Collect employee data
// const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

// }


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
   const tableObject = document.getElementById('employee-table');
  function getSalary(){
    const salary = document.getElementById('employee-table').salary;

  }
  function countRows(){
  
    const rowCount = tableObject[1].childElementCount;
    return rowCount;
  }
  function getAverageSalary(){
    let average = addSalaries / countRows;
    return average;
  }

  console.log("The average salary between our ${countRows} employee(s) is ${average} ");
}

// Select a random employee
// need to create an employeesArray const
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  function getRandomEmployee(){
    const idx = genRandomNumber(0, employeesArray.length -1);
    console.log("Congratulations to ${}, our random drawing winner!")
  }
}
getRandomEmployee();

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
addEmployeesBtn.addEventListener('click', trackEmployeeData()) {
  collectEmployees();
};
