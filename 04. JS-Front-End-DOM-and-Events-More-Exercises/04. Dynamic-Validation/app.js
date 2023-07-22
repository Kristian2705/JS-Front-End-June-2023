function validate() {
    const email = document.getElementById('email');
    email.addEventListener('change', e => {
        const emailAsString = e.target.value;
        const pattern = /[a-z]+@[a-z]+\.[a-z]+/g;
        if(pattern.test(emailAsString)){
            e.target.classList.remove('error');
            return;
        }
        e.target.classList.add('error');
    })
}