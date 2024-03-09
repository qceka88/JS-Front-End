function oddAndEvenSum(someNumber) {
    const evenFilter = x => x % 2 === 0;
    const oddFilter = x => x % 2 !== 0;

    function createArrayFromNumber(number) {
        let someArray = []

        while (number > 0) {
            let digit = number % 10;
            number = (number - digit) / 10;
            someArray.push(digit);
        }

        return someArray;
    }

    function filterAndSum(someArray, filter) {
        return someArray.filter(filter).reduce((a, b) => a + b, 0);
    }

    let numbersArray = createArrayFromNumber(someNumber);

    let evenSum = filterAndSum(numbersArray, evenFilter);
    let oddSum = filterAndSum(numbersArray, oddFilter);

    let result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;

    console.log(result);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);



//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               4. Odd and Even Sum
You will receive a single number. You have to write a function, 
that returns the sum of all even and all odd digits from that number. 



____________________________________________________________________________________________
Example

Input
1000435

Output
Odd sum = 9, Even sum = 4

```
