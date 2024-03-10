function numberModification(someNumber) {
    let numberAsArray = String(someNumber).split('').map(Number);
    let averageSum = 0;


    while (true) {
        averageSum = numberAsArray.reduce((a, v) => a + v, 0) / numberAsArray.length;
        
        if (averageSum > 5){
            console.log(numberAsArray.join(''))
            break;
        }
        numberAsArray.push(9)
    }

}

numberModification(101);
numberModification(5835);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               2.\tNumber Modification
Write a JS program that changes a number until the average of all its digits is not higher than 5. 
To modify the number, your program should append a 9 to the end of the number,
when the average value of all its digits is higher The input is a single number.
The output should consist of a single number - the final modified number which has an average value 
of all its digits higher than 5. The output should be printed on the console.

____________________________________________________________________________________________
Example

Input
5835

Output
5835

```