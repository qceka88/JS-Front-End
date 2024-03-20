function employees(someInput) {
    const employeesList = {};

    for (const employee of someInput) {
        let [name, personalNumber] = [employee, employee.length];

        employeesList[name] = personalNumber;
    }

    for (const employeeName in employeesList) {
        console.log(`Name: ${employeeName} -- Personal Number: ${employeesList[employeeName]}`);
    }
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
employees(['Samuel Jackson','Will Smith','Bruce Willis','Tom Holland']);

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               1.\tEmployees
You're tasked to create a list of employees and their personal numbers.
You will receive an array of strings. Each string is an employee name and to assign them a 
personal number you have to find the length of the name (whitespace included). 
Try to use an object.
At the end print all the list employees in the following format:
 "Name: {employeeName} -- Personal Number: {personalNum}" 




____________________________________________________________________________________________
Example

Input
[
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]



Output
Name: Silas Butler -- Personal Number: 12
Name: Adnaan Buckley -- Personal Number: 14
Name: Juan Peterson -- Personal Number: 13
Name: Brendan Villarreal -- Personal Number: 18


```