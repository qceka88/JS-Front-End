function login(someArray) {
    let username = someArray[0]

    for (let i = 1; i <= someArray.length; i++) {
        let word = someArray[i].split('').reverse().join('')
        if (username === word) {
            console.log(`User ${username} logged in.`)
            return;
        } else if (i === 4) {
            console.log(`User ${username} blocked!`)
            return;
        } else {
            console.log('Incorrect password. Try again.')
        }
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo', 'omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               1.\tArray Rotation
Write a function that receives an array and the number of rotations you have to perform. 
Note: Depending on the number of rotations, the first element goes to the end.
Output
Print the resulting array elements separated by a single space.

____________________________________________________________________________________________
Example_01

Input
[51, 47, 32, 61, 21], 2

Output
32 61 21 51 47

```