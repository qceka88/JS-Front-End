function numbersDescending(...args) {
    const start = args[0]
    const end = args[1]

    for (let i = start; i >= end; i--) {
        console.log(i)
    }
}

numbersDescending(6, 2);
numbersDescending(4, 1);

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                             10.\tNumbers from M to N
Write a function that receives a number M and a number N (M will always be bigger than N). 
Print all numbers from M to N.

____________________________________________________________________________________________
Example_01

Input
6, 2

Output
6
5
4
3
2

____________________________________________________________________________________________
Example_02

Input
4, 1

Output
4
3
2


```