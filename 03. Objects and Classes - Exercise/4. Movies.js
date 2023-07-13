function solve(arr){
    let movies = [];
    for(const el of arr){
        const rest = el.split(' ');
        if(rest[0] === "addMovie"){
            const title = rest.slice(1, rest.length).join(' ');
            movies.push({
                name: title,
            });
        }
        else{
            if(rest.includes('directedBy')){
                const index = rest.indexOf('directedBy');
                const title = rest.slice(0, index).join(' ');
                let movieToFind = movies.find(x => x.name === title);
                if(movieToFind){
                    const director = rest.slice(index + 1, rest.length).join(' ');
                    movieToFind.director = director;
                }
            }
            else if(rest.includes('onDate')){
                const index = rest.indexOf('onDate');
                const title = rest.slice(0, index).join(' ');
                let movieToFind = movies.find(x => x.name === title);
                if(movieToFind){
                    const date = rest.slice(index + 1, rest.length).join(' ');
                    movieToFind.date = date;
                }
            }
        }
    }
    movies
        .filter(x => x.name && x.date && x.director)
        .forEach(x => console.log(JSON.stringify(x)));
}

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]    
    )