function solve() {
  const text = document.getElementById('input');
  const sentences = Array.from(text.value.split('.')).map(s => s.trim()).filter(s => s.length !== 0);
  const output = document.getElementById('output');
  let newP = null;
  sentences.forEach((s, i) => {
      if(i % 3 === 0){
          newP = document.createElement('p');
          newP.textContent = `${s}.`;
          output.appendChild(newP);
      }
      else{
          newP.textContent += `${s}.`;
      }
  });
}