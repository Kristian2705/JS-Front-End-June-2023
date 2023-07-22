function generateReport() {
    const rows = Array.from(document.querySelectorAll('tr'));
    let checked = [];
    let objects = [];
    rows.forEach((row, i) => {
        if(i === 0){
            let number = 0;
            Array.from(row.children).forEach(child => {
                const inputForChild = child.children[0];
                if(inputForChild.checked){
                   checked.push(number);
                }
                number++;     
            })
        }
        else{
            const fields = row.children;
            let obj = {};
            checked.forEach(ind => {
                const fieldContent = fields[ind].textContent;
                const key = document.querySelector(`tr th:nth-child(${ind + 1})`).textContent.trim().toLowerCase();
                obj[key] = fieldContent;
            })
            objects.push(obj);
        }
    })
    document.getElementById('output').value = JSON.stringify(objects);
}