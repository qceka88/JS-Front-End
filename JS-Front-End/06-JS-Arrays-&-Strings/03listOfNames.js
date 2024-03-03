function listNames(someArray) {
    let sortedArray = someArray.slice().sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < sortedArray.length; i++) {
        let position = i + 1
        console.log(`${position}.${sortedArray[i]}`);
    }
}

listNames(["John", "Bob", "Christina", "Ema"]);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               3.\tList of Names
You will receive an array of names. Sort them alphabetically in ascending order and print a numbered list of all the names, each on a new line.


____________________________________________________________________________________________
Example_01

Input
["John", "Bob", "Christina", "Ema"]


Output
1.Bob
2.Christina
3.Ema
4.John


```