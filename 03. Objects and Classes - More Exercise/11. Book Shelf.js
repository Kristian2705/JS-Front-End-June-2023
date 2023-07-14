function solve(arr){
    const shelves = arr.reduce((acc, curr) => {
        if(curr.includes('->')){
            const[id, genre] = curr.split(' -> ');
            let canCreate = true;
            Object.keys(acc).forEach(key => {
                if(key.includes(id)){
                    canCreate = false;
                }
            })
            let keyOfShelf = `${id} ${genre}`;
            if(canCreate){
                acc[keyOfShelf] = [];
            }
        }
        else{
            const[title, authorAndGenre] = curr.split(': ');
            const[author, genre] = authorAndGenre.split(', ');
            let hasGenre = false;
            let keyOfShelf = '';
            Object.keys(acc).forEach(key => {
                if(key.includes(genre)){
                    hasGenre = true;
                    keyOfShelf = key;
                }
            })
            if(hasGenre){
                const book = {};
                book[title] = author;
                acc[keyOfShelf].push(book);
            }
        }
        return acc;
    }, {});

    Object.keys(shelves).sort((a, b) => shelves[b].length - shelves[a].length).forEach(key => {
        console.log(`${key}: ${shelves[key].length}`);
        shelves[key].sort((a, b) => {
            return Object.keys(a)[0].localeCompare(Object.keys(b)[0]);
        }).forEach(book => {
            console.log(`--> ${Object.entries(book).map(([k, v]) => `${k}: ${v}`)}`);
        });
    })
}

solve(['1 -> mystery', '2 -> sci-fi',
'Child of Silver: Bruce Rich, mystery',
'Lions and Rats: Gabe Roads, history',
'Effect of the Void: Shay B, romance',
'Losing Dreams: Gail Starr, sci-fi',
'Name of Earth: Jo Bell, sci-fi']
)