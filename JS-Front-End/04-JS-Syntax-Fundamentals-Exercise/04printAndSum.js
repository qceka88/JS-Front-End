function sumNumbers(firstNum, secondNum) {
    let rowNumbers = '';
    let sum = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        rowNumbers += `${i} `;
        sum += i;
    }
    console.log(rowNumbers.trim())
    console.log(`Sum: ${sum}`)
}


sumNumbers(5, 10);
sumNumbers(0, 26);
sumNumbers(50, 60);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                        4.\tPrint and Sum
Write a function that displays numbers from given start to given end and their sum. The input comes as two number parameters. Print the result like the examples below:


____________________________________________________________________________________________
Example_01

Input
5, 10

Output
5 6 7 8 9 10
Sum: 45

____________________________________________________________________________________________
Example_02

Input
0, 26

Output
0 1 2 … 26
Sum: 351


```