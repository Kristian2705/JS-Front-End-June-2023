function solve(size, increment){
    let steps = 1;
    let stones = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let height = 0;
    while(size >= 1){
        if(size <= 2){
            gold += (size ** 2) * increment;
        }
        else{
            stones += ((size - 2) ** 2) * increment;
            if(steps % 5 === 0){
                lapis += (size ** 2 - (size - 2) ** 2) * increment;
            }
            else{
                marble += (size ** 2 - (size - 2) ** 2) * increment;
            }
        }
        size -= 2;
        steps++;
        height++;
    }
    console.log(`Stone required: ${Math.ceil(stones)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height * increment)}`);
}

solve(23, 0.5);