function armies(someInput) {
    let warZone = {};

    const defeatAction = ' defeated';
    const arrivesAction = ' arrives';


    for (const row of someInput) {

        if (row.includes(arrivesAction)) {
            const leader = row.replace(arrivesAction, '');
            warZone[leader] = {};

        } else if (row.includes(defeatAction)) {
            const leader = row.replace(defeatAction, '');
            delete warZone[leader];

        } else if (row.includes(':')) {
            const [leader, armyData] = row.split(': ')
            if (warZone[leader]) {
                const [armyName, armyCount] = armyData.split(', ');
                warZone[leader][armyName] = Number(armyCount);
            }
        } else if (row.includes('+')) {
            const [armyName, armyCount] = row.split(' + ');

            for (const nameOfLeader in warZone) {
                for (const nameOfArmy in warZone[nameOfLeader]) {
                    if (nameOfArmy === armyName) {
                        warZone[nameOfLeader][nameOfArmy] += Number(armyCount);
                        break;
                    }
                }
            }
        }
    }

    let totalSum = a => Object.entries(a).reduce((a = 0, [k, v]) => a + Number(v), 0)

    let sortedWarzone = Object.entries(warZone).sort((a, b) => totalSum(b[1]) - totalSum(a[1]))

    for (const warData of sortedWarzone) {
        let [leader, armies] = warData;
        let sortedArmiesResult = Object.entries(armies)
            .sort((a, b) => b[1] - a[1])
            .map(a => `>>> ${a[0]} - ${a[1]}`)
            .join('\n');

        console.log(`${leader}: ${totalSum(warZone[leader])}`);
        console.log(sortedArmiesResult)
    }

}


armies(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205']);
console.log()
armies([
    'Rick Burr arrives',
    'Findlay arrives',
    'Rick Burr: Juard, 1500',
    'Wexamp arrives',
    'Findlay: Wexamp, 34540',
    'Wexamp + 340',
    'Wexamp: Britox, 1155',
    'Wexamp: Juard, 43423']);



//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               9.\tArmies
Write a function that stores information about an army leader and his armies. 
The input will be an array of strings. The strings can be in some of the following formats:
"{leader} arrives" – add the leader (no army)
"{leader}: {army name}, {army count}" – add the army with its count to the leader (if he exists)
"{army name} + {army count}" – if the army exists somewhere add the count
"{leader} defeated" – delete the leader and his army (if he exists)
When finished reading the input sort the leaders by total army count in descending. 
Then each army should be sorted by count in descending.
Output
Print in the following format:
"{leader one name}: {total army count}
>>> {armyOne name} - {army count}
>>> {armyTwo name} - {army count}
 …
{leader two name}: {total army count}
…"
Constrains
•\tThe new leaders will always be unique
•\tWhen adding a new army to the leader, the army will be unique

____________________________________________________________________________________________
Example

Input
['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540',
 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']


Output
Wexamp: 44578
>>> Juard - 43423
>>> Britox - 1155
Findlay: 34880
>>> Wexamp - 34880
Rick Burr: 1500
>>> Juard - 1500


```