function passwordValidator(inputText) {

    let lengthValidator = a => /^.{6,10}$/.test(a);
    let characterValidator = a => /^[a-zA-Z0-9]+$/.test(a);
    let numbersLengthValidator = a => [...a.matchAll(/\d/g)].length >= 2;

    let validators = [
        [lengthValidator, 'Password must be between 6 and 10 characters'],
        [characterValidator, 'Password must consist only of letters and digits'],
        [numbersLengthValidator, 'Password must have at least 2 digits'],
    ]

    let errors = validators.reduce((acc, [v, m]) => v(inputText) ? acc : acc + m + '\n', '')

    if (errors) {
        console.log(errors);
    } else {
        console.log('Password is valid')
    }

}

//passwordValidator('LogIn');
passwordValidator('MyPass123');
//passwordValidator('Pa$s$s');

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               6. Password Validator
Write a function that checks if a given password is valid. Password validations are:
•\tThe length should be 6 - 10 characters (inclusive)
•\tIt should consist only of letters and digits
•\tIt should have at least 2 digits 
If a password is a valid print: "Password is valid".
If it is NOT valid, for every unfulfilled rule print a message:
•\t"Password must be between 6 and 10 characters"
•\t"Password must consist only of letters and digits"
•\t"Password must have at least 2 digits"



____________________________________________________________________________________________
Example

Input
'logIn'

Output
Password must be between 6 and 10 characters
Password must have at least 2 digits


```