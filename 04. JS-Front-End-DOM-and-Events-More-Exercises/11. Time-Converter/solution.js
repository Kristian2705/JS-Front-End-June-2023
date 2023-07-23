function attachEventsListeners() {
    const daysBtn = document.getElementById('daysBtn');
    daysBtn.addEventListener('click', () => {
        const daysInput = Number(document.getElementById('days').value);
        document.getElementById('hours').value = daysInput * 24;
        document.getElementById('minutes').value = daysInput * 24 * 60;
        document.getElementById('seconds').value = daysInput * 24 * 60 * 60;
    })

    const hoursBtn = document.getElementById('hoursBtn');
    hoursBtn.addEventListener('click', () => {
        const hoursInput = Number(document.getElementById('hours').value);
        document.getElementById('days').value = hoursInput / 24;
        document.getElementById('minutes').value = hoursInput * 60;
        document.getElementById('seconds').value = hoursInput * 60 * 60;
    })

    const minutesBtn = document.getElementById('minutesBtn');
    minutesBtn.addEventListener('click', () => {
        const minutesInput = Number(document.getElementById('minutes').value);
        document.getElementById('days').value = minutesInput / (24 * 60);
        document.getElementById('hours').value = minutesInput / 60;
        document.getElementById('seconds').value = minutesInput * 60;
    })

    const secondsBtn = document.getElementById('secondsBtn');
    secondsBtn.addEventListener('click', () => {
        const secondsInput = Number(document.getElementById('seconds').value);
        document.getElementById('days').value = secondsInput / (24 * 60 * 60);
        document.getElementById('hours').value = secondsInput / (60 * 60);
        document.getElementById('minutes').value = secondsInput / 60;
    })
}