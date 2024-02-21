function saleMachine(day, age) {
    if (0 <= age && age <= 18) {
        switch (day) {
            case "Weekday":
                console.log('12$')
                break;
            case "Weekend":
                console.log('15$')
                break;
            case "Holiday":
                console.log('5$')
                break;

        }
    } else if (19 <= age && age <= 64) {
        switch (day) {
            case "Weekday":
                console.log('18$')
                break;
            case "Weekend":
                console.log('20$')
                break;
            case "Holiday":
                console.log('12$')
                break;
        }
    } else if (65 <= age && age <= 122) {
        switch (day) {
            case "Weekday":
                console.log('12$')
                break;
            case "Weekend":
                console.log('15$')
                break;
            case "Holiday":
                console.log('10$')
                break;
        }
    } else {
        console.log('Error!')
    }
}


saleMachine('Weekday', 42);
saleMachine('Holiday', -12);
saleMachine('Holiday', 15);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```


                    7. Theatre Promotions
A theatre is doing a ticket sale, but they need a program to calculate the price of a single ticket. 
If the given age does not fit one of the categories, you should print "Error!".  

You can see the prices in the table below:

Day / Age\t0 <= age <= 18\t18 < age <= 64\t64 < age <= 122
Weekday\t12$\t18$\t12$
Weekend\t15$\t20$\t15$
Holiday\t5$\t12$\t10$

Input
The input comes in two parameters. The first one will be the type of day (string). The second – is the age of the person (number).
Output

Print the price of the ticket according to the table, or "Error!" if the age is not in the table.
Constraints
•The age will be in the interval [-1000…1000].
•The type of day will always be valid. 


____________________________________________________________________________________________
Example_01

Input
'Weekday', 42


Output
18$
____________________________________________________________________________________________
Example_02

Input
'Holiday', -12

Output
Error!
____________________________________________________________________________________________
Example_03

Input
'Holiday', 15

Output
5$


```