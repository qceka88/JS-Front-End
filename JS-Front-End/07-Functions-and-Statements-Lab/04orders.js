function orders(product, quantity) {

    function defineProductPrice(someProduct) {
        let thePrice = 0;
        switch (someProduct) {
            case  'coffee':
                return 1.5;
            case  'water':
                return 1;
            case  'coke':
                return 1.4;
            case  'snacks':
                return 2;
        }
        return thePrice;
    }

    let singlePrice = defineProductPrice;
    let result = singlePrice(product) * quantity;

    console.log(result.toFixed(2))
}

orders('water', 5);
orders('coffee', 2);

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               3. Repeat String
Write a function that receives a string and a repeat count n. The function should return a new string (the old one repeated n times).




____________________________________________________________________________________________
Example

Input
"abc", 3

Output
abcabcabc

```