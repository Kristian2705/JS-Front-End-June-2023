function convertToJSON(name, lastName, hairColor){
    console.log(JSON.stringify({
        name,
        lastName,
        hairColor
    }));
}

convertToJSON('George', 'Jones','Brown');