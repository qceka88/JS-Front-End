function ageDefiner(age) {
    if (age >= 66) {
        console.log('elder');
    } else if (age >= 20) {
        console.log('adult');
    } else if (age >= 14) {
        console.log('teenager');
    } else if (age >= 3) {
        console.log('child');
    } else if (age >= 0) {
        console.log('baby');
    } else {
        console.log('out of bounds')
    }
}

ageDefiner(19);
ageDefiner(1);
ageDefiner(100);
ageDefiner(-1);



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
20

Output
adult
____________________________________________________________________________________________
Example_02

Input
-1

Output
out of bounds
____________________________________________________________________________________________
Example_03

Input
100

Output
elder

```