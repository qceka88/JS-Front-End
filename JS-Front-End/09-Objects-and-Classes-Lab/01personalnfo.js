function personalInfo(...args){
    let personObject = {
        firstName : args[0],
        lastName : args[1],
        age: args[2],
    };


    return personObject;
}


console.log(personalInfo("Peter", "Pan", "20"));

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               1.\tPerson Info
Write a function that receives 3 parameters, sets them to an object, and returns that object.
The input comes as 3 separate strings in the following order: firstName, lastName, age.



____________________________________________________________________________________________
Example

Input
"Peter", 
"Pan",
"20"


Output
firstName: Peter
lastName: Pan
age: 20


```