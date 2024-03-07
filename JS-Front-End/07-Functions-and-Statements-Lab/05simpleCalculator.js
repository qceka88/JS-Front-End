function simpleCalculator(firstNum, secondNum, operator) {
    let operations = {
        'multiply': (firstNum, secondNum) => firstNum * secondNum,
        'divide': (firstNum, secondNum) => firstNum / secondNum,
        'add': (firstNum, secondNum) => firstNum + secondNum,
        'subtract': (firstNum, secondNum) => firstNum - secondNum,
    }

    let result = operations[operator](firstNum, secondNum)
    console.log(result)

}


simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                              5. Simple Calculator
Write a function that receives three parameters – two numbers and an operator (string) – and calculates the result depending on the operator. Operator can be 'multiply', 'divide', 'add' or 'subtract'. Try to solve this task using arrow functions.
Bonus
Solve this task without using any conditional statements (no if or switch statements or ternary operators).
Input
The input comes as parameters named numOne, numTwo, operator.


____________________________________________________________________________________________
Example

Input
5, 5, 'multiply'

Output
25

```