function bitcoinMining(someArray) {
    const bitcoinPrice = 11949.16;
    const goldPriceGrams = 67.51;

    let earnedMoney = 0;
    let successDay = 0
    let totalBitcoins = 0;

    for (let i = 0; i < someArray.length; i++) {
        let day = i + 1;
        let dailyGold = someArray[i];

        if (day % 3 === 0) {
            dailyGold *= 0.7;
        }

        earnedMoney += dailyGold * goldPriceGrams;

        if (earnedMoney >= bitcoinPrice) {
            if (successDay === 0) {
                successDay = day;
            }

            let bitcoinPurchase = Math.floor(earnedMoney / bitcoinPrice);
            totalBitcoins += bitcoinPurchase;
            earnedMoney -= bitcoinPurchase * bitcoinPrice
        }
    }


    console.log(`Bought bitcoins: ${totalBitcoins}`);

    if (successDay !== 0) {
        console.log(`Day of the first purchased bitcoin: ${successDay}`);
    }

    console.log(`Left money: ${earnedMoney.toFixed(2)} lv.`);

}

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);



//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               2.\t* Bitcoin "Mining"
Write a JavaScript program that calculates the total amount of bitcoins you purchased with the gold you 
mined during your shift at the mine. Your shift consists of a certain number of days where you mine an amount of gold in grams. Your program will receive an array with the amount of gold you mined each day, where the first day of your shift is the first index of the array. Also, someone was stealing every third day from the start of your shift 30% from the mined gold for this day. You need to check, which day you have enough money to buy your first bitcoin. For the different exchanges use these prices:
1 Bitcoin\t11949.16 lv.
1 g of gold\t67.51 lv.

Input
You will receive an array of numbers, representing your shift at the mine.
Output
Print on the console these lines in the following formats:
•\tFirst-line prints the total amount of bought bitcoins:
 \`Bought bitcoins: {count}\`
•\tSecond-line prints which day you bought your first bitcoin: 
 \`Day of the first purchased bitcoin: {day}\`
In case you did not purchase any bitcoins, do not print the second line.
•\tThird-line prints the amount of money that’s left after the bitcoin purchases rounded by the second digit after the decimal point:
  \`Left money: {money} lv.\`
.

____________________________________________________________________________________________
Example_01

Input
[3124.15, 504.212, 2511.124]

Output
Bought bitcoins: 30
Day of the first purchased bitcoin: 1
Money left: 5144.11 lv.


```