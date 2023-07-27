function attachEvents() {
    document.getElementById('refresh').addEventListener('click', displayMessages);
    document.getElementById('submit').addEventListener('click', uploadAMessage);

    async function displayMessages(){
        try{
            const res = await fetch('http://localhost:3030/jsonstore/messenger');
            const messages = await res.json();
            const textarea = document.getElementById('messages');
            textarea.value = '';
            const arr = [];
            Object.keys(messages).forEach(key => {
                arr.push(`${messages[key].author}: ${messages[key].content}`);
            });
            textarea.value = arr.join('\n');
        }
        catch{
            console.log('error');
        }
    }

    async function uploadAMessage(){
        const author = document.querySelector('input[name=author]').value;
        const content = document.querySelector('input[name=content]').value;
        fetch('http://localhost:3030/jsonstore/messenger', {
            method: "POST",
            body: JSON.stringify({ author, content})
        })
    }
}

attachEvents();