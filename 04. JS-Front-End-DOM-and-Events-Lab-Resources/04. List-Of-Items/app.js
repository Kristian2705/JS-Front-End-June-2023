function addItem() {
    const textValue = document.querySelector('input[type=text]').value;
    let li = document.createElement("li");
    li.textContent = textValue;
    document.getElementById('items').appendChild(li);
}