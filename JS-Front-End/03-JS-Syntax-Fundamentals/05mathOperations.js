function calculator (numOne, numTwo, operator) {
    let result = eval(`${numOne} ${operator} ${numTwo} `)

    console.log(result)
}


calculator(5, 6, '+');
calculator(3, 5.5, '*');

//////////////////////////////// TASK CONDITION ////////////////////////////////
```


                               5.Math Operations
Write a JS function that takes two numbers and a string as input. 

The string may be one of the following: '+', '-', '*', '/', '%', '**'.

Print on the console the result of the mathematical operation between both numbers and the 
operator you receive as a string. The input comes as two numbers and a string argument passed 
to your function. The output should be printed on the console.


____________________________________________________________________________________________
Example_01

Input
5, 6, '+'

Output
11
____________________________________________________________________________________________
Example_02

Input
3, 5.5, '*'

Output
16.5

```