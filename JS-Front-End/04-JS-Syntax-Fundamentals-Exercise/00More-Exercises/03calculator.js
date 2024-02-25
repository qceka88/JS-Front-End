function calculator(num01, operator, num02) {
    let resul = eval(`${num01} ${operator} ${num02}`);

    console.log(resul.toFixed(2));
}


calculator(5, '+', 10);
calculator(25.5, '-', 3);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                                 3.\t*Calculator
Write a function that receives 3 parameters: a number, an operator (string), and another number.
The operator can be:  '+', '-', '/', '*'. Print the result of the calculation on the console 
formatted to the second decimal point.


____________________________________________________________________________________________
Example

Input
5, '+', 10


Output
15.00

```
