class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel
    }

    get parts() {
        return this._parts
    }

    set parts(value) {
        return this._parts = {
            engine: value.engine,
            power: value.power,
            quality: value.engine * value.power,
        }

    }

    drive(distance) {
        this.fuel -= distance
    }
}

let parts = {engine: 6, power: 100};
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);



//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               10.Class Vehicle
Create a class with the name Vehicle that has the following properties:
•\ttype – a string
•\tmodel – a string
•\tparts – an object that contains:
o\tengine – number (quality of the engine)
o\tpower – number
o\tquality – engine * power
•\tfuel – a number
•\tdrive – a method that receives fuel loss and decreases the fuel of the vehicle by that number
The constructor should receive the type, the model, the parts as an object, and the fuel
In judge post your class (Note: all names should be as described)



____________________________________________________________________________________________
Example

TEST\

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);


Output
100
600


```