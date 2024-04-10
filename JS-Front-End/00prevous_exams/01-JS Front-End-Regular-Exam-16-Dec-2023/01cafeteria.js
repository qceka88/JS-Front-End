function cafeteria(someInput) {
    let team = {};
    const count = someInput.shift();

    for (let i = 0; i < count; i++) {
        const [name, shift, coffees] = someInput.shift().split(' ');
        if (!team[name]) {
            team[name] = {'shift': shift, 'skills': []};
        }
        coffees.split(',').forEach(c => team[name]['skills'].push(c));
    }

    let command = someInput.shift();
    while (command !== 'Closed') {
        const [act, name, ...args] = command.split(' / ');
        const barista = team[name]

        if (act === 'Prepare') {
            const [shift, type] = args;
            if (barista && barista.skills.includes(type) && barista.shift === shift) {
                console.log(`${name} has prepared a ${type} for you!`)
            } else {
                console.log(`${name} is not available to prepare a ${type}.`)
            }
        } else if (act === 'Change Shift') {
            const [newShift] = args;
            if (barista) {
                barista.shift = newShift;
                console.log(`${name} has updated his shift to: ${newShift}`)
            }
        } else if (act === 'Learn') {
            const [newSkill] = args;
            if (barista && !barista.skills.includes(newSkill)) {
                barista.skills.push(newSkill);
                console.log(`${name} has learned a new coffee type: ${newSkill}.`);
            } else {
                console.log(`${name} knows how to make ${newSkill}.`);
            }
        }
        command = someInput.shift();

    }

    for (const name in team) {
        const shift = team[name].shift;
        const skills = team[name].skills.join(', ');
        const result = `Barista: ${name}, Shift: ${shift}, Drinks: ${skills}`;

        console.log(result);
    }

}

// cafeteria([
//     '3',
//     'Alice day Espresso,Cappuccino',
//     'Bob night Latte,Mocha',
//     'Carol day Americano,Mocha',
//     'Prepare / Alice / day / Espresso',
//     'Change Shift / Bob / night',
//     'Learn / Carol / Latte',
//     'Learn / Bob / Latte',
//     'Prepare / Bob / night / Latte',
//     'Closed']
// );

cafeteria(['4',
'Alice day Espresso,Cappuccino',
'Bob night Latte,Mocha',
'Carol day Americano,Mocha',
'David night Espresso',
'Prepare / Alice / day / Espresso',
'Change Shift / Bob / day',
'Learn / Carol / Latte',
'Prepare / Bob / night / Latte',
'Learn / David / Cappuccino',
'Prepare / Carol / day / Cappuccino',
'Change Shift / Alice / night',
 'Learn / Bob / Mocha',
'Prepare / David / night / Espresso',
'Closed']
)