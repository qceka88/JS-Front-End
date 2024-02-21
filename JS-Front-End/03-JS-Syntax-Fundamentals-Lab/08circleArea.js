function circle(inputData) {
    let typeOfData = typeof inputData
    if (typeOfData === 'number') {
        let area = Math.PI * inputData ** 2;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfData}.`);
    }
}

circle(5);
circle('name');

//////////////////////////////// TASK CONDITION ////////////////////////////////
```


                            8. Circle Area
Write a function that takes a single argument as input. Check the type of input argument. 
If it is a number, assume it is the radius of a circle and calculate the circle area. 
Print the area rounded to two decimal places. If the argument type is NOT a number, 
print the following text on the console: 

We can not calculate the circle area, because we receive a {type of argument}.\`

The input comes as a single argument passed to your function.
The output should be printed on the console.


____________________________________________________________________________________________
Example_01

Input
5


Output
78.54
____________________________________________________________________________________________
Example_02

Input
'name'

Output
We can not calculate the circle area, because we receive a string.

```