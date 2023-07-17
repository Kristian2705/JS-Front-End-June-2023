function extractText() {
    const liItems = Array.from(document.querySelectorAll('li')).map(el => el.textContent).join('\n');
    document.getElementById('result').textContent = liItems;
}