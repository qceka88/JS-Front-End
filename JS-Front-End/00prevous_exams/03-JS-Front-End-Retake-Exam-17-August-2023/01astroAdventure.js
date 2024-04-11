function astroAdventure(someInput) {
    const count = someInput.shift();
    const crew = {};

    for (let i = 0; i < Number(count); i++) {
        const [name, oxygen, energy] = someInput.shift().split(' ');
        crew[name] = {'oxygen': Number(oxygen), 'energy': Number(energy)};
    }

    let command = someInput.shift();

    while (command !== 'End') {
        let [act, name, amount] = command.split(' - ');
        amount = Number(amount);

        const astronaut = crew[name];
        switch (act) {
            case'Explore':
                if (astronaut.energy >= amount) {
                    astronaut.energy -= amount;
                    console.log(`${name} has successfully explored a new area and now has ${astronaut.energy} energy!`);
                } else {
                    console.log(`${name} does not have enough energy to explore!`);
                }
                break;
            case'Refuel':
                const MAX_ENERGY = 200;
                astronaut.energy += amount;
                if (astronaut.energy > MAX_ENERGY) {
                    amount = (MAX_ENERGY + amount) - astronaut.energy;
                    astronaut.energy = MAX_ENERGY;
                }
                console.log(`${name} refueled their energy by ${amount}!`);
                break;
            case'Breathe':
                const MAX_OXYGEN = 100;
                astronaut.oxygen += amount;
                if (astronaut.oxygen > MAX_OXYGEN) {
                    amount = (MAX_OXYGEN + amount) - astronaut.oxygen;
                    astronaut.oxygen = MAX_OXYGEN;
                }
                console.log(`${name} took a breath and recovered ${amount} oxygen!`);
                break;
        }

        command = someInput.shift();
    }

    for (const astronaut in crew) {
        const data = crew[astronaut];
        console.log(`Astronaut: ${astronaut}, Oxygen: ${data.oxygen}, Energy: ${data.energy}`);
    }
}

astroAdventure([    '4',
    'Alice 60 100',
    'Bob 40 80',
    'Charlie 70 150',
    'Dave 80 180',
    'Explore - Bob - 60',
    'Refuel - Alice - 30',
    'Breathe - Charlie - 50',
    'Refuel - Dave - 40',
    'Explore - Bob - 40',
    'Breathe - Charlie - 30',
    'Explore - Alice - 40',
    'End']

);