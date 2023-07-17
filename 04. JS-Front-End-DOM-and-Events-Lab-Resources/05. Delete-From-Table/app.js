function deleteByEmail() {
    const textValue = document.querySelector('input[type=text]').value;
    const emails = Array.from(document.querySelectorAll('td:nth-child(2)'));
    const emailToDelete = emails.find(em => em.textContent === textValue);
    if(emailToDelete){
        emailToDelete.parentElement.remove();
        document.getElementById('result').textContent = 'Deleted.';
    }
    else{
        document.getElementById('result').textContent = 'Not found.'
    }
}