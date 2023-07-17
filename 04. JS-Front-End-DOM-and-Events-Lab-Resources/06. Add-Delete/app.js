function addItem() {
    const newItemValue = document.getElementById('newItemText').value;
    const newItem = document.createElement('li');
    newItem.textContent = newItemValue;
    const deleteButton = document.createElement('a');
    deleteButton.href = '#';
    deleteButton.textContent = '[Delete]';
    deleteButton.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    })
    newItem.appendChild(deleteButton);
    document.getElementById('items').appendChild(newItem);
}