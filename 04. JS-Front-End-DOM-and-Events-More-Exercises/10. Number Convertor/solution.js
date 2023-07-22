function solve() {
    const binary = document.createElement('option');
    binary.textContent = 'Binary';
    binary.value = 'binary';
    const hex = document.createElement('option');
    hex.textContent = 'Hexadecimal';
    hex.value = 'hexadecimal';
    document.getElementById('selectMenuTo').appendChild(binary);
    document.getElementById('selectMenuTo').appendChild(hex);

    const convertButton = document.querySelector('button');
    convertButton.addEventListener('click', () => {
        const numberToConvert = Number(document.getElementById('input').value);
        const typeToConvertTo = document.querySelector('#selectMenuTo').value;
        if(typeToConvertTo === 'binary'){
            document.getElementById('result').value = numberToConvert.toString(2);
        }
        else if(typeToConvertTo === 'hexadecimal'){
            document.getElementById('result').value = numberToConvert.toString(16).toUpperCase();
        }
    });
}