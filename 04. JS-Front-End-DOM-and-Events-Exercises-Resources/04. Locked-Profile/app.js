function lockedProfile() {
    const [button1, button2, button3] = document.querySelectorAll('button');
    button1.addEventListener('click', e => 
    {
        if(document.querySelector('.profile:nth-child(1) input[value=unlock]').checked){
            if(e.target.textContent === 'Show more'){
                e.target.textContent = 'Hide it';
                document.getElementById(`user1HiddenFields`).style.display = 'block';
            }
            else if(e.target.textContent === 'Hide it'){
                e.target.textContent = 'Show more';
                document.getElementById(`user1HiddenFields`).style.display = 'none';
            }
        }
    })
    button2.addEventListener('click', e => 
    {
        if(document.querySelector('.profile:nth-child(2) input[value=unlock]').checked){
            if(e.target.textContent === 'Show more'){
                e.target.textContent = 'Hide it';
                document.getElementById(`user2HiddenFields`).style.display = 'block';
            }
            else if(e.target.textContent === 'Hide it'){
                e.target.textContent = 'Show more';
                document.getElementById(`user2HiddenFields`).style.display = 'none';
            }
        }
    })
    button3.addEventListener('click', e => 
    {
        if(document.querySelector('.profile:nth-child(3) input[value=unlock]').checked){
            if(e.target.textContent === 'Show more'){
                e.target.textContent = 'Hide it';
                document.getElementById(`user3HiddenFields`).style.display = 'block';
            }
            else if(e.target.textContent === 'Hide it'){
                e.target.textContent = 'Show more';
                document.getElementById(`user3HiddenFields`).style.display = 'none';
            }
        }
    })
}