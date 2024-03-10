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

                               1.\t*Login
You will be given a string representing a username. The correct password will be that username reversed. 
Until you receive the correct password print on the console: "Incorrect password. Try again.". 
When you receive the correct password print: "User {username} logged in." 
However, on the fourth try if the password is still not correct print: "User {username} blocked!" and end the program. 
The input comes as an array of strings - the first string represents username and each subsequent string is a password.


____________________________________________________________________________________________
Example

Input
['Acer','login','go','let me in','recA']

Output
Incorrect password. Try again.
Incorrect password. Try again.
Incorrect password. Try again.
User Acer logged in.


```