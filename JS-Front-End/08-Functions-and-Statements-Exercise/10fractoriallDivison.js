function factorialDivision(firstNum, secondNum) {
    let factorial = x => x === 0 ? 1 : x * factorial(x - 1);
    let division = (x, y) => x / y;

    let result = division(factorial(firstNum), factorial(secondNum));

    console.log(result.toFixed(2));

}

factorialDivision(5, 2);
factorialDivision(6,2);