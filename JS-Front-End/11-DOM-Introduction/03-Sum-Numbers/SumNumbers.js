function calc() {
    let firstNumber = document.getElementById('num1');
    let secondNumber = document.getElementById('num2');
    let numbersSum = document.getElementById('sum');


    let result = parseInt(firstNumber.value) + parseInt(secondNumber.value);

    numbersSum.value = String(result);
}



//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                              3.\tSum Numbers
Write a JS function that reads two numbers from input fields in a web page and puts their 
sum in another field when the user clicks on a button.
Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.



```