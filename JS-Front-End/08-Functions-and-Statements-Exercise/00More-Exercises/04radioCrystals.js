function radioCrystals(inputArray) {
    let [target, ...crystals] = inputArray
    let actions = {
        'Cut': x => x / 4,
        'Lap': x => x * 0.8,
        'Grind': x => x - 20,
        'Etch': x => x - 2,
    };

    let xRay = x => x + 1;
    let washing = x => Math.floor(x);
    for (let crystal of crystals) {
        let currentCrystal = crystal;
        console.log(`Processing chunk ${currentCrystal} microns`)
        for (const act of Object.keys(actions)) {
            let actCount = 0
            while (true) {
                let chunk = actions[act](currentCrystal);
                if (chunk >= target - 1) {
                    currentCrystal = chunk;
                    actCount += 1
                } else {
                    break;
                }
            }
            if (actCount > 0) {
                console.log(`${act} x${actCount}`)
                currentCrystal = washing(currentCrystal)
                console.log('Transporting and washing')
            }
            if (currentCrystal < target) {
                currentCrystal = xRay(currentCrystal)
                console.log(`X-ray x1`)
                break;
            }
        }
        console.log(`Finished crystal ${currentCrystal} microns`)

    }

}

radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               4.\tRadio Crystals 
You need to write a JS program that monitors the current thickness of the crystal and recommends 
the next procedure that will bring it closer to the desired frequency. To reduce waste and the time 
it takes to make each crystal your program needs to complete the process with the least number of operations. 
Each operation takes the same amount of time, but since they are done at different parts of the factory, 
the crystals have to be transported and thoroughly washed every time an operation different from the previous 
must be performed, so this must also be taken into account. When determining the order, always attempt to 
start from the operation that removes the largest amount of material.
The different operations you can perform are the following:
•\tCut – cuts the crystal in 4
•\tLap – removes 20% of the crystal’s thickness
•\tGrind – removes 20 microns of thickness
•\tEtch – removes 2 microns of thickness
•\tX-ray – increases the thickness of the crystal by 1 micron; this operation can only be done once!
•\tTransporting and washing – removes any imperfections smaller than 1 micron (round down the number); 
do this after every batch of operations that remove material
At the beginning of your program, you will receive a number representing the desired final thickness 
and a series of numbers, representing the thickness of crystal ore in microns. Process each chunk and 
print to the console the order of operations and the number of times they need to be repeated to bring 
them to the desired thickness.The input comes as a numeric array with a variable number of elements. 
The first number is the target thickness and all following numbers are the thickness of different chunks of quartz ore.
The output is the order of operation and how many times they are repeated, every operation on a new line. 
See the examples for more information.


____________________________________________________________________________________________
Example

Input
['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']

Output
The car is 39.00% clean.

```