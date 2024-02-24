function leapYear(inputYear) {
    if (inputYear % 4 === 0 && inputYear % 400 === 0 || inputYear % 100 !== 0 && inputYear % 4 === 0) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

leapYear(1984);
leapYear(2003);
leapYear(4);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                        3.\tLeap Year
Write a JS function to check whether a year is a leap. Leap years are either divisible by 4 but not by 100 or are divisible by 400. The output should be following:
•\tIf the year is a leap, print: "yes"
•\tOtherwise, print: "no"

____________________________________________________________________________________________
Example_01

Input
1984

Output
yes
____________________________________________________________________________________________
Example_02

Input
2003

Output
no

```