function isPalindrome(someArray) {
    let reversion = (a) => a.split('').reverse().join('');

    for (const num of someArray) {
        let numAsString = num.toString();
        let reversedNumAsString = reversion(numAsString);

        let result = numAsString === reversedNumAsString;

        console.log(result);
    }

}

isPalindrome([123, 323, 421, 121]);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                              5. Palindrome Integers
A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. 
Write a function, which receives an array of positive integers and checks if 
each integer is a palindrome or not.
Output
•\tIf the current integer is a palindrome, print: "true"
•\tOtherwise, print: "false"



____________________________________________________________________________________________
Example

Input
[123,323,421,121]

Output
false
true
false
true


```
