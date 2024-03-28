function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        const inputElement = document.querySelector('#inputs > textarea');
        const bestRestaurantElement = document.querySelector('#bestRestaurant > p');
        const bestRestaurantWorkersElement = document.querySelector('#workers > p');
        const sum = a => a.reduce((a, v) => a + v.salary, 0);
        const averageSum = a => sum(a) / a.length;

        let register = {};

        for (const row of JSON.parse(inputElement.value)) {
            let [restaurant, employees] = [row.split(' - ')[0], row.split(' - ')[1].split(', ')];

            if (!register[restaurant]) {
                register[restaurant] = [];
            }

            employees
                .map(e => ({name: e.split(' ')[0], salary: Number(e.split(' ')[1])}))
                .forEach(e => register[restaurant].push(e));
        }

        const sorted = Object
            .entries(register)
            .sort((a, b) => sum(b[1]) - sum(a[1]))
            .map(([r, e]) => [r, e.sort((a, b) => b.salary - a.salary)]);

        const bestName = sorted[0][0];
        const bestAverage = averageSum(sorted[0][1]).toFixed(2);
        const bestMax = sorted[0][1][0].salary.toFixed(2);

        const bestRestaurant = `Name: ${bestName} Average Salary: ${bestAverage} Best Salary: ${bestMax}`;
        const bestEmployees = sorted[0][1].map(w => `Name: ${w.name} With Salary: ${w.salary}`);

        bestRestaurantElement.textContent = bestRestaurant;
        bestRestaurantWorkersElement.textContent = bestEmployees.join(' ');
    }
}

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                        7.\tHell's Kitchen
You will be given an array of strings, which represents a list of all the restaurants with their workers.
 
When the [Send] button is clicked:
•\tDisplay the best restaurant of all the added restaurants with its average salary and best salary. 
•\tIf there is a restaurant in the input array that is added more than once, you need to add new workers to the 
old ones and update the values of the average salary and the best salary.
•\tThe best restaurant is the restaurant with the highest average salary. If two restaurants have the same 
average salary the best restaurant is the first one added.
•\tDisplay all workers in the best restaurant with their salaries.
The best restaurant's workers should be sorted by their salaries in descending order.
 
Input
The input will be received from the given textarea in the form of an array of strings. 
Each string represents a restaurant with its workers: ["Mikes - Steve 1000, Ivan 200, Paul 800", "Fleet - Maria 850, Janet 650"]
 
Output
•\tThe output contains two strings
o\tThe first one is the best restaurant in the format:
\`Name: {restaurant name} Average Salary: {restaurant avgSalary} Best Salary: {restaurant bestSalary}\`
avgSalary and bestSalary must be formatted to the second decimal point.
o\tThe second one is all the workers in that restaurant in the following format:
\`Name: {worker name} With Salary: {worker salary} Name: {worker2 name} With Salary: {worker2 salary} Name: {worker3 name} With Salary: {worker3 salary}…\`

Output strings must be set like text content in the following elements:
 
Constraints
•\tThe workers will be always unique

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