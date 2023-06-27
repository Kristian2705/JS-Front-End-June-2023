function solve(arr){
    const sortedArr = arr.sort((a,b) => {return a- b;});
    const shiftedArr = [];
    const length = sortedArr.length;
    for(let i = 0; i < length; i++){
        if(i % 2 === 0){
            shiftedArr.push(sortedArr.shift());
        }
        else{
            shiftedArr.push(sortedArr.pop());
        }
    }
    return shiftedArr;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
