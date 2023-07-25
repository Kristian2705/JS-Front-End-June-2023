function solve() {
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const info = document.getElementById('info').children[0];

    let busStopInfos;

    let currentBusStop = 'depot';

    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${currentBusStop}`)
            .then(res => res.json())
            .then(busStop => {
                busStopInfos = busStop;
                currentBusStop = busStop.next;
                departBtn.disabled = true;
                arriveBtn.disabled = false;
                info.textContent = `Nest stop: ${busStop.name}`;
            })
            .catch(() => {
                departBtn.disabled = true;
                arriveBtn.disabled = true;
                info.textContent = 'Error';
            })
    }

    async function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        info.textContent = `Arriving at ${busStopInfos.name}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();