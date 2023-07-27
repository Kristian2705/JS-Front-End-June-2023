function attachEvents() {
    document
        .querySelector('#submit')
        .addEventListener('click', getWeatherData);

    async function getWeatherData(){
        const inputCity = document.getElementById('location').value;
        try{
            const res = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
            const resAsJSON = await res.json();
            const currCity = resAsJSON.find(item => item.name === inputCity);
            if(currCity){
                getForecastForCurrentDay(currCity);
                getForecastForThreeDays(currCity);
            }
            else{
                console.log('error');
            }
        }
        catch{
            console.log('bigger error');
        }
    }

    async function getData(currCity, type){
        try{
            const resData = await fetch(`http://localhost:3030/jsonstore/forecaster/${type}/${currCity.code}`);
            const data = await resData.json();
            return data;
        }
        catch{
            console.log('error in data');
        }
    }

    function getSymbol(condition){
        switch(condition){
            case 'Sunny':
                return '☀';
            case 'Partly sunny':
                return '⛅';
            case 'Overcast':
                return '☁';
            case 'Rain':
                return '☂';
            default:
                return 'cringe';
        }
    }

    async function getForecastForCurrentDay(currCity){
        const currConditionObj = await getData(currCity, 'today');

        const divForCurrConditionData = document.createElement('div');
        divForCurrConditionData.classList.add('forecasts');

        const symbolSpan = document.createElement('span');
        symbolSpan.classList.add('condition');
        symbolSpan.classList.add('symbol');
        symbolSpan.textContent = getSymbol(currConditionObj.forecast.condition);

        const spanForCondition = document.createElement('span');
        spanForCondition.classList.add('condition');

        const spanForCity = document.createElement('span');
        spanForCity.classList.add('forecast-data');
        spanForCity.textContent = `${currConditionObj.name}`;

        const spanForLowAndHigh = document.createElement('span');
        spanForLowAndHigh.classList.add('forecast-data');
        spanForLowAndHigh.textContent = `${currConditionObj.forecast.low}°/${currConditionObj.forecast.high}°`;

        const spanForConditionOfTheDay = document.createElement('span');
        spanForConditionOfTheDay.classList.add('forecast-data');
        spanForConditionOfTheDay.textContent = currConditionObj.forecast.condition;

        spanForCondition.appendChild(spanForCity);
        spanForCondition.appendChild(spanForLowAndHigh);
        spanForCondition.appendChild(spanForConditionOfTheDay);

        divForCurrConditionData.appendChild(symbolSpan);
        divForCurrConditionData.appendChild(spanForCondition);

        document.getElementById('current').appendChild(divForCurrConditionData);

        document.getElementById('forecast').style.display = 'block';
    }

    async function getForecastForThreeDays(currCity){
        const threeDayCondObj = await getData(currCity, 'upcoming');
        debugger;
        const divForThreeDays = document.createElement('div');
        divForThreeDays.classList.add('forecast-info');

        console.log(threeDayCondObj.forecast);

        threeDayCondObj.forecast.forEach(f => {
            const spanForCurrUpcomingDay = document.createElement('span');
            spanForCurrUpcomingDay.classList.add('upcoming');
            
            const spanForSymbol = document.createElement('span');
            spanForSymbol.classList.add('symbol');
            spanForSymbol.textContent = getSymbol(f.condition);

            const spanForLowAndHigh = document.createElement('span');
            spanForLowAndHigh.classList.add('forecast-data');
            spanForLowAndHigh.textContent = `${f.low}°/${f.high}°`;

            const spanForConditionOfTheDay = document.createElement('span');
            spanForConditionOfTheDay.classList.add('forecast-data');
            spanForConditionOfTheDay.textContent = f.condition;

            spanForCurrUpcomingDay.appendChild(spanForSymbol);
            spanForCurrUpcomingDay.appendChild(spanForLowAndHigh);
            spanForCurrUpcomingDay.appendChild(spanForConditionOfTheDay);

            divForThreeDays.appendChild(spanForCurrUpcomingDay);
        });

        document.getElementById('upcoming').appendChild(divForThreeDays);
    }
}

attachEvents();