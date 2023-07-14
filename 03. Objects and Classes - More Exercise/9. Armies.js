function solve(arr){
    const leaders = arr.reduce((acc, curr) => {
        let data = [];
        let leaderName = '';
        let action = '';
        const armyData = {};
        if(curr.includes('arrives')){
            data = curr.split(' ');
            action = data.pop();
            leaderName = data.join(' ');
            acc[leaderName] = [];
        }
        else if(curr.includes(':')){
            data = curr.split(': ');
            leaderName = data.shift();
            if(acc.hasOwnProperty(leaderName)){
                const [armyName, armyCount] = data[0].split(', ');
                let currArmy = {};
                currArmy[armyName] = Number(armyCount);
                acc[leaderName].push(currArmy); 
            }
        }
        else if(curr.includes('+')){
            data = curr.split(' + ');
            const armyName = data[0];
            const armyCount = Number(data[1]);
            Object.values(acc).forEach(value => {
                value.forEach(army => {
                    if(army.hasOwnProperty(armyName)){
                        army[armyName] += armyCount;
                    }
                })
            })
        }
        else if(curr.includes('defeated')){
            data = curr.split(' ');
            action = data.pop();
            leaderName = data.join(' ');
            if(acc.hasOwnProperty(leaderName)){
                delete acc[leaderName];
            }
        }
        return acc;
    }, {});

    Object.keys(leaders).sort((a, b) => {
        let totalCountOfSoldiersA = leaders[a].reduce((acc, curr) => {
            return acc + Object.values(curr)[0];
        }, 0);
        let totalCountOfSoldiersB = leaders[b].reduce((acc, curr) => {
            return acc + Object.values(curr)[0];
        }, 0);
        return totalCountOfSoldiersB - totalCountOfSoldiersA;
    }).forEach(key => {
        let totalCountOfSoldiers = leaders[key].reduce((acc, curr) => {
            return acc + Object.values(curr)[0];
        }, 0);
        console.log(`${key}: ${totalCountOfSoldiers}`);
        leaders[key].sort((a, b) => {
            const valueA = Object.values(a)[0];
            const valueB = Object.values(b)[0];
            return valueB - valueA;
        }).forEach(army => {
            console.log(`>>> ${Object.entries(army).map(([k, v]) => (`${k} - ${v}`))}`);
        })
    })
}

solve(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500',
'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']

)