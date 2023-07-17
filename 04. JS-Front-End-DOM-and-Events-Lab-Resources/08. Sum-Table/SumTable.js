function sumTable() {
    const sumOfRowsPrices = Array.from(document.querySelectorAll('td:nth-child(2):not(#sum)')).map(el => Number(el.textContent))
        .reduce((acc, curr) => {
            return acc + curr;
        }, 0);

    document.getElementById('sum').textContent = sumOfRowsPrices;
}