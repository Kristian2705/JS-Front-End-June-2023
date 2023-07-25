async function getInfo() {
    let busStopID = document.getElementById('stopId');
    let resDiv = document.getElementById('stopName');
    let listOfArrivalTimes = document.getElementById('buses');
    resDiv.innerHTML = '';
    listOfArrivalTimes.innerHTML = '';
    try{
        const res = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${busStopID.value}`);
        const busStop = await res.json();
        resDiv.textContent = busStop.name;
        Object.keys(busStop.buses).forEach(key => {
            const newLi = document.createElement('li');
            newLi.textContent = `Bus ${key} arrives in ${busStop.buses[key]} minutes`;
            listOfArrivalTimes.appendChild(newLi);
        })
    }
    catch{
        resDiv.textContent = 'Error';
    }
    busStopID.value = '';
}