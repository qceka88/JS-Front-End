function priceCalculator(people, typOfGroup, dayOfWeek) {
    let singlePrice = 0;

    if (dayOfWeek === 'Friday') {
        switch (typOfGroup) {
            case 'Students':
                singlePrice = 8.45
                break;
            case 'Business':
                singlePrice = 10.90
                break;
            case 'Regular':
                singlePrice = 15
                break;
        }
    } else if (dayOfWeek === 'Saturday') {
        switch (typOfGroup) {
            case 'Students':
                singlePrice = 9.80
                break;
            case 'Business':
                singlePrice = 15.60
                break;
            case 'Regular':
                singlePrice = 20
                break;
        }

    } else if (dayOfWeek === 'Sunday') {
        switch (typOfGroup) {
            case 'Students':
                singlePrice = 10.46
                break;
            case 'Business':
                singlePrice = 16
                break;
            case 'Regular':
                singlePrice = 22.50
                break;
        }
    }

    let totalPrice = singlePrice * people;
    if (typOfGroup === 'Students' && people >= 30) {
        totalPrice *= 0.85
    } else if (typOfGroup === 'Business' && people >= 100) {
        totalPrice -= singlePrice * 10
    } else if (typOfGroup === 'Regular' && 10 <= people && people <= 20) {
        totalPrice *= 0.95
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

priceCalculator(30, "Students", "Sunday");
priceCalculator(40, "Regular", "Saturday");



//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                        2.\tVacation
You are given a group of people, the type of the group, and the day of the week they are going to stay. Based on that information calculate how much they have to pay and print that price on the console. Use the table below. In each cell is the price for a single person. 
The output should look like that: \`Total price: {price}\`. The price should be formatted to the second decimal point.
\tFriday\tSaturday\tSunday
Students\t8.45\t9.80\t10.46
Business\t10.90\t15.60\t16
Regular\t15\t20\t22.50

There are also discounts based on some conditions:
•\tStudents – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
•\tBusiness – if the group is bigger than or equal to 100 people 10 of them can stay for free
•\tRegular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%
Note: You should reduce the prices in that EXACT order.




____________________________________________________________________________________________
Example_01

Input
30,"Students","Sunday"

Output
Total price: 266.73
____________________________________________________________________________________________
Example_02

Input
40,"Regular","Saturday"

Output
Total price: 800.00

```