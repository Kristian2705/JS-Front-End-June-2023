async function lockedProfile() {
    try{
        const res = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
        const people = await res.json();
        console.log(people);
        Object.values(people).forEach((person, i) => {
            if(i === 0){
                document.querySelector('input[name=user1Username]').value = person.username;
                document.querySelector('input[name=user1Email]').value = person.email;
                document.querySelector('input[name=user1Age]').value = 31;
            }
            else{
                const profileDiv = document.createElement('div');
                profileDiv.className = 'profile';
    
                // Create the user icon image element
                const userIconImg = document.createElement('img');
                userIconImg.src = './iconProfile2.png';
                userIconImg.className = 'userIcon';
    
                // Create the "Lock" label and radio button
                const lockLabel = document.createElement('label');
                lockLabel.textContent = 'Lock';
                const lockRadio = document.createElement('input');
                lockRadio.type = 'radio';
                lockRadio.name = `user${i+1}Locked`;
                lockRadio.value = 'lock';
                lockRadio.checked = true;
    
                // Create the "Unlock" label and radio button
                const unlockLabel = document.createElement('label');
                unlockLabel.textContent = 'Unlock';
                const unlockRadio = document.createElement('input');
                unlockRadio.type = 'radio';
                unlockRadio.name = `user${i+1}Locked`;
                unlockRadio.value = 'unlock';
    
                // Create a line break element
                const lineBreak = document.createElement('br');
    
                // Create a horizontal rule element
                const hrElement = document.createElement('hr');
    
                // Create the "Username" label and disabled input
                const usernameLabel = document.createElement('label');
                usernameLabel.textContent = 'Username';
                const usernameInput = document.createElement('input');
                usernameInput.type = 'text';
                usernameInput.name = `user${i+1}Username`;
                usernameInput.value = person.username;
                usernameInput.disabled = true;
                usernameInput.readOnly = true;
    
                // Create the div element for user details
                const userDetailsDiv = document.createElement('div');
                userDetailsDiv.className = `user${i+1}Username`;
    
                // Create a horizontal rule element
                const hrElement2 = document.createElement('hr');
    
                // Create the "Email" label and disabled input
                const emailLabel = document.createElement('label');
                emailLabel.textContent = 'Email:';
                const emailInput = document.createElement('input');
                emailInput.type = 'email';
                emailInput.name = `user${i+1}Email`;
                emailInput.value = person.email;
                emailInput.disabled = true;
                emailInput.readOnly = true;
    
                // Create the "Age" label and disabled input
                const ageLabel = document.createElement('label');
                ageLabel.textContent = 'Age:';
                const ageInput = document.createElement('input');
                ageInput.type = 'email';
                ageInput.name = `user${i+1}Age`;
                ageInput.value = 31;
                ageInput.disabled = true;
                ageInput.readOnly = true;
    
                // Create the "Show more" button
                const showMoreButton = document.createElement('button');
                showMoreButton.textContent = 'Show more';
    
                // Append the elements to their respective parent elements
                profileDiv.appendChild(userIconImg);
                profileDiv.appendChild(lockLabel);
                profileDiv.appendChild(lockRadio);
                profileDiv.appendChild(unlockLabel);
                profileDiv.appendChild(unlockRadio);
                profileDiv.appendChild(lineBreak);
                profileDiv.appendChild(hrElement);
                profileDiv.appendChild(usernameLabel);
                profileDiv.appendChild(usernameInput);
                userDetailsDiv.appendChild(hrElement2);
                userDetailsDiv.appendChild(emailLabel);
                userDetailsDiv.appendChild(emailInput);
                userDetailsDiv.appendChild(ageLabel);
                userDetailsDiv.appendChild(ageInput);
                profileDiv.appendChild(userDetailsDiv);
                profileDiv.appendChild(showMoreButton);
    
                // Append the main container div to the body of the HTML document
                document.getElementById('main').appendChild(profileDiv);
            }
        });
        const btns = [...document.getElementsByTagName('button')];
        btns.forEach(btn => btn.addEventListener('click', showHide));
    
        function showHide(event) {
            const button = event.target;
            const profile = button.parentNode;
            const moreInformation = profile.getElementsByTagName('div')[0];
            const lockStatus = profile.querySelector('input[type="radio"]:checked').value;
    
            if (lockStatus === 'unlock') {
                if (button.textContent === 'Show more') {
                    moreInformation.style.display = 'inline-block';
                    button.textContent = 'Hide it';
                } else if (button.textContent === 'Hide it') {
                    moreInformation.style.display = 'none';
                    button.textContent = 'Show more';
                }
            }
        }
    }
    catch{
        console.log('error');
    }
}