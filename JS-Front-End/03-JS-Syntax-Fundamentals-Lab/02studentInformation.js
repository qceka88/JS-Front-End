function studentInformation(name, age, grade) {
    let output = `Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`;

    console.log(output)

}


studentInformation('John', 15, 5.54678);
studentInformation('Steve', 16, 2.1426);
studentInformation('Marry', 12, 6.00);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                        2. Student Information
You will be given 3 parameters – student name (string), age (number), and average grade (number). 
Your task is to print all the info about the student in the following format: 
\`Name: {student name}, Age: {student age}, Grade: {student grade}\`
 Note: The grade should be formatted to the second decimal point.


____________________________________________________________________________________________
Example_01

Input
'John', 15, 5.54678

Output
Name: John, Age: 15, Grade: 5.55
____________________________________________________________________________________________
Example_02

Input
'Steve', 16, 2.1426

Output
Name: Steve, Age: 16, Grade: 2.14
____________________________________________________________________________________________
Example_03

Input
'Marry', 12, 6.00

Output
Name: Marry, Age: 12, Grade: 6.00

```