function solve() {
    let inputs = document.querySelectorAll('input');
    const checkBtn = document.querySelectorAll('button')[0];
    const clear = document.querySelectorAll('button')[1];
    
    const table = document.querySelector('table');
    const resultPar = document.querySelector('#check p');

    clear.addEventListener('click', () => {
        [...inputs].forEach(inp => inp.value = '');
        table.style.border = 'none';
        resultPar.textContent = '';
    });

    checkBtn.addEventListener('click', () => {
        const matrix = [
            [inputs[0].value, inputs[1].value, inputs[2].value],
            [inputs[3].value, inputs[4].value, inputs[5].value],
            [inputs[6].value, inputs[7].value, inputs[8].value],
        ];
        let isSudomu = true;
        matrix.forEach((row, i) => {
            const col = matrix.map(row => row[i]);
            if(col.length !== [...new Set(col)].length || row.length !== [...new Set(row)].length){
                isSudomu = false;
                return;
            }
        });

        if(isSudomu){
            table.style.border = '2px solid green';
            resultPar.textContent = 'You solve it! Congratulations!';
            resultPar.style.color = 'green';
        }
        else{
            table.style.border = '2px solid red';
            resultPar.textContent = 'NOP! You are not done yet...';
            resultPar.style.color = 'red';
        }
    });
}