class Song{
    constructor(typeList, name, time){
        this.typeList = typeList;
        this.name = name;
        this.time = time;
    }
}

function solve(arr){
    const [_, ...songs] = arr;
    const typeToFind = songs.pop();
    const allSongs = songs.map(el => {
        const [typeList, name, time] = el.split('_');
        const currSong = new Song(typeList, name, time);
        return currSong;
    }).filter(el => {
        if(el.typeList === typeToFind || typeToFind === "all"){
            console.log(el.name);
        }
    });
}

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    )