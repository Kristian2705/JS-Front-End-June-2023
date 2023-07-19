function solve() {
    const buttonGenerate = document.querySelector('button:nth-child(3)');
    buttonGenerate.addEventListener('click', () => {
      JSON.parse(document.querySelector('#exercise textarea').value).forEach(furniture => {
        const table = document.querySelector('tbody');
        const newRow = document.createElement('tr');
  
        const imgCol = document.createElement('td');
        const img = document.createElement('img');
        img.src = furniture.img;
        imgCol.appendChild(img);
        
        const nameCol = document.createElement('td');
        const nameP = document.createElement('p');
        nameP.textContent = furniture.name;
        nameCol.appendChild(nameP);
  
        const priceCol = document.createElement('td');
        const priceP = document.createElement('p');
        priceP.textContent = furniture.price;
        priceCol.appendChild(priceP);
  
        const decfCol = document.createElement('td');
        const decfP = document.createElement('p');
        decfP.textContent = furniture["decFactor"];
        decfCol.appendChild(decfP);
  
        const chbCol = document.createElement('td');
        const chbInput = document.createElement('input');
        chbInput.type = 'checkbox';
        chbCol.appendChild(chbInput);
  
        newRow.appendChild(imgCol);
        newRow.appendChild(nameCol);
        newRow.appendChild(priceCol);
        newRow.appendChild(decfCol);
        newRow.appendChild(chbCol);
  
        table.appendChild(newRow);
      })
    })

    const buttonBuy = document.querySelector('button:nth-child(6)');
    buttonBuy.addEventListener('click', () => {
      let namesArr = [];
      let total = 0;
      let decFScore = 0;
      const checkedBoxes = Array.from(document.querySelectorAll('input[type=checkbox]')).filter(ch => ch.checked).forEach(ch => {
        const parentEl = ch.parentElement.parentElement;
        const name = parentEl.children[1].children[0].textContent;
        namesArr.push(name);
        const price = Number(parentEl.children[2].children[0].textContent);
        total += price;
        const decFactor = Number(parentEl.children[3].children[0].textContent);
        decFScore += decFactor;
      })

      const resultTextarea = document.querySelector('#exercise textarea:nth-child(5)');
      resultTextarea.value += `Bought furniture: ${namesArr.join(', ')}\n`;
      resultTextarea.value += `Total price: ${total.toFixed(2)}\n`;
      resultTextarea.value += `Average decoration factor: ${decFScore / namesArr.length}`;
    })
}