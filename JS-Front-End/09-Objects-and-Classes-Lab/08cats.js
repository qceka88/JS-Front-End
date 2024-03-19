function catSongs(someInput) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }


    for (const record of someInput) {
        let [catName, catAge] = record.split(' ');
        let cat = new Cat(catName, catAge);

        cat.meow();
    }
}

catSongs(['Mellow 2', 'Tom 5']);

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               8.\tCats
Write a function that receives array of strings in the following format '{cat name} {age}'.
Create a Cat class that receives in the constructor the name and the age parsed from the input. 
It should also have a method named "meow" that will print "{cat name}, age {age} says Meow" on the console.
For each of the strings provided, you must create a cat object and invoke the .meow () method.


____________________________________________________________________________________________
Example

Input
['Mellow 2', 'Tom 5']

Output
Mellow, age 2 says Meow
Tom, age 5 says Meow


```