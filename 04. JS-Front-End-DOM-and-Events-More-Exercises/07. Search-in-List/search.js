function search() {
   const searchData = document.getElementById('searchText').value;
   const towns = Array.from(document.getElementById('towns').children);
   towns.forEach(ch => {
      ch.style.fontWeight = 'normal';
      ch.style.textDecoration = 'none';
   })
   let matches = 0;
   towns.forEach(ch => {
      if(ch.textContent.includes(searchData)){
         ch.style.fontWeight = 'bold';
         ch.style.textDecoration = 'underline';
         matches++;
      }
   });
   document.getElementById('result').textContent = `${matches} matches found`;
}
