class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.quality = quality;
        this.isOn = false;
    }

    get price() {
        return 800 - this.info['age'] * 2 + this.quality * 0.5;
    }

    turnOn() {
        this.isOn = true;
        this.quality -= 1;
    }

    turnOff() {
        this.isOn = false;
        this.quality -= 1;
    }

    showInfo() {
        return JSON.stringify(this.info);
    }

}

let info = {producer: "Lenovo", age: 1, brand: "Legion"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
laptop.turnOn()
laptop.turnOff()
console.log(laptop.isOn)


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               3.\tClass Laptop
Create a class Laptop that has the following properties:
•\tinfo – object that contains:
o\tproducer – string
o\tage – number
o\tbrand – string
•\tisOn – boolean (false by default)
•\tturnOn – a function that sets the isOn variable to true
•\tturnOff – a function that sets the isOn variable to false
•\tshowInfo – a function that returns the producer, age, and brand as JSON
•\tquality – number (every time the laptop is turned on/off the quality decreases by 1)
•\tgetter price – number (800 – {age * 2} + (quality * 0.5)) 
The constructor should receive the info as an object and the quality.


____________________________________________________________________________________________
Example

Input
let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)

Output
{"producer":"Dell","age":2,"brand":"XPS"}
8
true
799.5


```