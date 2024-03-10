function pyramidDjoser(base, increment) {
    let steps = Math.ceil(base / 2);
    let totalHeight = Math.floor(steps * increment)
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;


    let width = base;
    for (let i = 1; i <= steps; i++) {
        let currentStepBlocks = width * width

        let outerLayer = width * 4 - 4
        let innerLayer = currentStepBlocks - outerLayer

        if (i === steps) {
            gold += currentStepBlocks;
            break;
        } else if (i % 5 === 0) {
            lapisLazuli += outerLayer
        } else {
            marble += outerLayer
        }

        stone += innerLayer
        width -= 2
    }

    let totalStone = Math.ceil(stone * increment);
    let totalMarble = Math.ceil(marble * increment);
    let totalLapisLazuli = Math.ceil(lapisLazuli * increment);
    let totalGold = Math.ceil(gold * increment);

    console.log(`Stone required: ${totalStone}`)
    console.log(`Marble required: ${totalMarble}`)
    console.log(`Lapis Lazuli required: ${totalLapisLazuli}`)
    console.log(`Gold required: ${totalGold}`)
    console.log(`Final pyramid height: ${totalHeight}`)
    console.log()
}

pyramidDjoser(11, 1);
pyramidDjoser(11, 0.75);
pyramidDjoser(12, 1);
pyramidDjoser(23, 0.5);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               3.\t* The Pyramid of King Djoser
Write a JS program that calculates how much resources will be required for the construction of a pyramid. It is made out of stone, marble, lapis lazuli, and gold. Your program will receive an integer that will be the base width and length of the pyramid and an increment that is the height of each step. The bulk is made out of stone, while the outer layer is made out of marble. Every fifth step’s outer layer is made out of lapis lazuli instead of marble. The final step is made out of gold.
The pyramid is built with 1x1 blocks with a height equal to the given increment. The first step of the pyramid has a width and length equal to the given base and every next step is reduced by 2 blocks (1 from each side). The height of every step equals the given increment. See the drawing for an example. White steps are covered in marble, blue steps are covered in lapis lazuli (every fifth layer from the bottom), and yellow steps are made entirely out of gold (top-most step).
 
Since the outer layer of each step is made of decorative material, to calculate the required stone for one step, reduce the width and length by 2 blocks (one from each side), find its area, and multiply it by the increment. The rest of the step is made out of lapis lazuli for every fifth step from the bottom and marble for all other steps. To find the amount needed, you may, for example, find its perimeter and reduce it by 4 (to compensate for the overlapping corners), and multiply the result by the increment. See the drawing for details (grey is stone, white is decoration).
 \t \t 
5x5 step
Stone required – 9 x increment
Marble required– 16 x increment\t7x7 step
Stone required – 25 x increment
Marble required – 24 x increment\t8x8 step
Stone required – 36 x increment
Marble required – 28 x increment

Note the top-most layer is made entirely out of gold, with a height equal to the given increment. See the examples for complete calculations.
Input
You will receive two number parameters base and increment.
Output
Print on the console on separate lines the total required amounts of each material rounded up and the final height of the pyramid rounded down, as shown in the examples.



____________________________________________________________________________________________
Example

Input
11,1


Output
Stone required: 165
Marble required: 112
Lapis Lazuli required: 8
Gold required: 1
Final pyramid height: 6

```