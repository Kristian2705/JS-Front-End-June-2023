function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadData);
    document.getElementById('btnCreate').addEventListener('click', uploadData);

    let ulForData = document.getElementById('phonebook');
    let phonebookData;

    async function loadData(){
        ulForData.innerHTML = '';
        try{
            const res = await fetch('http://localhost:3030/jsonstore/phonebook');
            phonebookData = await res.json();
            const sndof = Object.values(phonebookData);
            for (const {person, phone, _id} of sndof) {
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.id = _id;
                deleteBtn.addEventListener('click', deleteEntry);
                const currLi = document.createElement('li');
                currLi.textContent = `${person}: ${phone}`;
                currLi.appendChild(deleteBtn);
                ulForData.appendChild(currLi);
            }
            // Object.values(phonebookData).forEach(obj => {
            //     const deleteBtn = document.createElement('button');
            //     deleteBtn.classList.add('del');
            //     deleteBtn.textContent = 'Delete';
            //     const currLi = document.createElement('li');
            //     currLi.textContent = `${obj.person}: ${obj.phone}`;
            //     currLi.appendChild(deleteBtn);
            //     ulForData.appendChild(currLi);
            // })
            // Array.from(document.getElementsByClassName('del')).forEach(btn => {
            //     btn.addEventListener('click', e => deleteEntry(e))
            // })
        }
        catch{
            console.log('error');
        }
    }

    function uploadData(){
        const personData = document.getElementById('person');
        console.log(personData);
        const phoneData = document.getElementById('phone');
        console.log(phoneData);
        fetch('http://localhost:3030/jsonstore/phonebook', {
            method: "POST",
            body: JSON.stringify( {
                person: personData.value,
                phone: phoneData.value
            } )
        }).then((res) => res.json())
        .then(() => {
            loadData();
            personData.value = '';
            phoneData.value = '';
        })
        .catch(console.log);
    }

    function deleteEntry(e){
        let currId = e.currentTarget.id;
        // let currKey;
        // Object.keys(phonebookData).forEach(k => {
        //     if(`${phonebookData[k].person}: ${phonebookData[k].phone}` === e.target.parentElement.textContent.split('Delete')[0]){
        //         currKey = k;
        //         return;
        //     }
        // })
        fetch(`http://localhost:3030/jsonstore/phonebook/${currId}`, {
            method: 'DELETE'
        }).then((res) => res.json())
        .then(loadData)
        .catch(console.log);
    }
}

attachEvents();