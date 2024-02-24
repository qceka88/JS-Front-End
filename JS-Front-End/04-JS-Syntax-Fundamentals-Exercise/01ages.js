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

                        1.\tAges
Write a function that determines whether based on the given age a person is: baby, child, teenager, adult, elder.
The input comes as a single number parameter. The bounders are:
•\t0-2 (age) – is a baby;   
•\t3-13 (age) – is a child; 
•\t14-19 (age) – is a teenager;
•\t20-65 (age) – is an adult;
•\t>=66 (age) – is an elder; 
•\tIn all other cases print – "out of bounds";
The output should be printed to the console.
Examples



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