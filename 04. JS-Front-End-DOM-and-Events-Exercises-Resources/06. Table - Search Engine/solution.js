function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const inputText = document.getElementById('searchField').value;
      Array.from(document.querySelectorAll('tbody tr td')).forEach(item => {
         if(item.parentElement.classList.contains('select')){
            item.parentElement.classList.remove('select');
         }
      })
      Array.from(document.querySelectorAll('tbody tr td')).forEach(item => {
         if(item.textContent.includes(inputText)){
            item.parentElement.classList.add('select');
         }
      })
   }
}