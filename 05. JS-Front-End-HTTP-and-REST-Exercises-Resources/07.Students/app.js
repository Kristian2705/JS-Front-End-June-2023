function attachEvents() {
  const currentUrl = 'http://localhost:3030/jsonstore/collections/students';
  const submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', uploadAStudent);
  loadStudents();

  function uploadAStudent(){
    const firstName = document.querySelector('input[name=firstName]').value;
    const lastName = document.querySelector('input[name=lastName]').value;
    const facultyNumber = document.querySelector('input[name=facultyNumber]').value;
    const grade = document.querySelector('input[name=grade]').value;
    fetch(currentUrl, {
      method: "POST",
      body: JSON.stringify({firstName, lastName, facultyNumber, grade})
    }).then(res => res.json)
    .then(loadStudents)
    .catch(console.log);
  }

  async function loadStudents(){
    const res = await fetch(currentUrl);
    const students = await res.json();
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';
    Object.values(students).forEach(v => {
      const currRow = document.createElement('tr');
      Object.values(v).forEach((v1, i) => {
        if(i === 4){
          return;
        }
        const currCell = document.createElement('td');
        currCell.textContent = v1;
        currRow.appendChild(currCell);
      })
      tableBody.appendChild(currRow);
    })
  }
}

attachEvents();