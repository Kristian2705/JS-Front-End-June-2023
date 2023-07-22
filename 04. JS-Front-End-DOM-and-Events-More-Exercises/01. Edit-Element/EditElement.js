function editElement(el, textToReplace, replacement) {
    while(el.textContent.includes(textToReplace)){
        el.textContent = el.textContent.replace(textToReplace, replacement);
    }
}