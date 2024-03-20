function towns(someInput) {
    const towns = [];
    let coordinate = x => Number(x).toFixed(2);
    let decoder = (a, b, c) => ({'name': a, 'latitude': coordinate(b), 'longitude': coordinate(c)});

    for (const data of someInput) {
        const town = decoder(...data.split(' | '));

        towns.push(town);
    }

    towns.forEach(a => console.log(a));
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);