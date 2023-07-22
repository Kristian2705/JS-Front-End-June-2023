function solve() {
  const text = document.getElementById('text').value;
  const namingConvertion = document.getElementById('naming-convention').value;
  if(namingConvertion === 'Camel Case'){
    let counter = 1;
    const words = text.split(' ').map(el => {
      if(counter === 1){
        console.log(el.toLowerCase())
        el = el.toLowerCase();
      }
      else{
        console.log(el.slice(1, el.length));
        el = `${el[0].toUpperCase()}${(el.slice(1, el.length)).toLowerCase()}`;
      }
      counter++;
      return el;
    });
    document.getElementById('result').textContent = words.join('');
  }
  else if(namingConvertion === 'Pascal Case'){
    const words = text.split(' ').map(el => {
      el = `${el[0].toUpperCase()}${(el.slice(1, el.length).toLowerCase())}`;
      return el;
    });
    document.getElementById('result').textContent = words.join('');
  }
  else{
    document.getElementById('result').textContent = 'Error!';
  }
}