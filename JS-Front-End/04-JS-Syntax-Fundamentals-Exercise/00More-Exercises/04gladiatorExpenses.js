function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalHelmetPrice = Math.floor(lostFights / 2) * helmetPrice;
    let totalSwordPrice = Math.floor(lostFights / 3) * swordPrice;
    let totalShieldPrice = Math.floor(lostFights / 6) * shieldPrice;
    let totalArmorPrice = Math.floor(lostFights / 12) * armorPrice;

    let totalExpenses = totalHelmetPrice + totalSwordPrice + totalShieldPrice + totalArmorPrice;

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                                 4.\t*Gladiator Expenses
As a gladiator, Peter has to repair his broken equipment when he loses a fight. His equipment consists of a 
helmet, sword, shield, and armor. You will receive Peter\`s lost fights count. 
•\tEvery second lost game, his helmet is broken.
•\tEvery third lost game, his sword is broken.
•\tWhen both his sword and helmet are broken in the same lost fight, his shield also breaks.
•\tEvery second time, when his shield brakes, his armor also needs to be repaired. 
You will receive the price of each item in his equipment. Calculate his expenses for the year for renewing his equipment. 
Input / Constraints
You will receive 5 parameters to your function:
•\tThe first parameter - lost fights count - is an integer in the range [0, 1000].
•\tThe second parameter - helmet price - is the floating-point number in the range [0, 1000]. 
•\tThe third parameter - sword price - is the floating-point number in the range [0, 1000]. 
•\tThe fourth parameter - shield price - is the floating-point number in the range [0, 1000]. 
•\tThe fifth parameter - armor price - is the floating-point number in the range [0, 1000]. 
Output
•\tAs output you must print Peter\`s total expenses for new equipment rounded to the second decimal point: "Gladiator expenses: {expenses} aureus"
.


____________________________________________________________________________________________
Example

Input
5, '+', 10


Output
15.00

```