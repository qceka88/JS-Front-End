function cookingByNumbers(inputNumber, par1, par2, par3, par4, par5) {
    let currentNumer = inputNumber;
    let commandRow = `${par1}-${par2}-${par3}-${par4}-${par5}-`;

    let currentCommand = '';
    for (let i = 0; i < commandRow.length; i++) {
        let char = commandRow[i];
        if (char === '-') {
            switch (currentCommand) {
                case 'chop':
                    currentNumer /= 2;
                    break;
                case 'dice':
                    currentNumer = Math.sqrt(currentNumer);
                    break;
                case 'spice':
                    currentNumer += 1;
                    break;
                case 'bake':
                    currentNumer *= 3;
                    break;
                case 'fillet':
                    currentNumer *= 0.8;
                    break;
            }
            console.log(currentNumer);
            currentCommand = '';
        } else {
            currentCommand += char;
        }
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                                12.\tCooking by Numbers
Write a program that receives 6 parameters which are a number and a list of five operations. Perform the operations sequentially by starting with the input number and using the result of every operation as a starting point for the next one. Print the result of every operation in order. The operations can be one of the following:
•\tchop - divide the number by two
•\tdice - square root of a number
•\tspice - add 1 to the number
•\tbake - multiply number by 3
•\tfillet - subtract 20% from the number
The input comes as 6 string elements. The first element is the starting point and must be parsed to a number. The remaining 5 elements are the names of the operations to be performed.
The output should be printed on the console.


____________________________________________________________________________________________
Example_01

Input
'32', 'chop', 'chop', 'chop', 'chop', 'chop'

Output
16
8
4
2
1


____________________________________________________________________________________________
Example_02

Input
'9', 'dice', 'spice', 'chop', 'bake', 'fillet'

Output
3
4
2
6
4.8


```