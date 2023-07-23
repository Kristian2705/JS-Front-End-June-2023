function attachEventsListeners() {
    const convertBtn = document.getElementById('convert');
    const converterFromOtherToMeters = {
        Kilometers: (distance) => distance * 1000,
        Meters: (distance) => distance,
        Centimeters: (distance) => distance / 100,
        Millimeters: (distance) => distance / 1000,
        Miles: (distance) => distance * 1609.34,
        Yards: (distance) => distance * 0.9144,
        Feet: (distance) => distance * 0.3048,
        Inches: (distance) => distance * 0.0254
    }
    const converterFromMetersToOther = {
        Kilometers: (distanceAsMeters) => distanceAsMeters / 1000,
        Meters: (distanceAsMeters) => distanceAsMeters,
        Centimeters: (distanceAsMeters) => distanceAsMeters * 100,
        Millimeters: (distanceAsMeters) => distanceAsMeters * 1000,
        Miles: (distanceAsMeters) => distanceAsMeters / 1609.34,
        Yards: (distanceAsMeters) => distanceAsMeters / 0.9144,
        Feet: (distanceAsMeters) => distanceAsMeters / 0.3048,
        Inches: (distanceAsMeters) => distanceAsMeters / 0.0254
    }

    function getUnit(unit){
        switch(unit){
            case 'km':
                return 'Kilometers';
            case 'm':
                return 'Meters';
            case 'cm':
                return 'Centimeters';
            case 'mm':
                return 'Millimeters';
            case 'mi':
                return 'Miles';
            case 'yrd':
                return 'Yards';
            case 'ft':
                return 'Feet';
            case 'in':
                return 'Inches';
        }
    }

    convertBtn.addEventListener('click', () => {
        const inputDistance = Number(document.getElementById('inputDistance').value);
        const fromUnitValue = document.getElementById('inputUnits').value;
        const toUnitValue = document.getElementById('outputUnits').value;
        const fromUnit = getUnit(fromUnitValue);
        const toUnit = getUnit(toUnitValue);
        
        const currMeters = converterFromOtherToMeters[fromUnit](inputDistance);
        
        const convertedValue = converterFromMetersToOther[toUnit](currMeters);

        document.getElementById('outputDistance').value = convertedValue;
    });
}