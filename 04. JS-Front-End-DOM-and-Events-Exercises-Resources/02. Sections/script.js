function create(words) {
   const bigDiv = document.getElementById('content');
   words.forEach(word => {
      const newD = document.createElement('div');
      const newP = document.createElement('p');
      newD.appendChild(newP);
      newP.style.display = 'none';
      newP.textContent = word;
      newD.addEventListener('click', (e) => {
         e.target.children[0].style.display = 'block';
      })
      bigDiv.appendChild(newD);
   });
}