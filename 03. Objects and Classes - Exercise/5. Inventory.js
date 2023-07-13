function solve(arr){
    const heroes = [];
    arr.forEach(curr => {
        const [name, level, joinedItems] = curr.split(' / ');
        const items = joinedItems.split(', ');
        const currHero = {};
        currHero.name = name;
        currHero.level = level;
        currHero.items = items;
        heroes.push(currHero);
    });

    heroes.sort((x, y) => x.level - y.level).forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    })
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    
    
    )