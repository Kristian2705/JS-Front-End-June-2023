function attachEvents() {
  const loadBtn = document.getElementById('loadBooks');
  loadBtn.addEventListener('click', loadBooks);
  const tableBody = document.querySelector('tbody');
  const submitBtn = document.querySelector('#form button');
  submitBtn.addEventListener('click', handleEvents);
  let books;

  async function loadBooks(){
    try{
      document.querySelector('h3').textContent = 'FORM';
      document.querySelector('#form button').textContent = 'Submit';
      const res = await fetch('http://localhost:3030/jsonstore/collections/books');
      books = await res.json();
      tableBody.innerHTML = '';
      console.log(books);
      debugger;
      Object.entries(books).forEach(([_id, book]) => {
        const currRow = document.createElement('tr');

        const titleCell = document.createElement('td');
        titleCell.textContent = book.title;

        const authorCell = document.createElement('td');
        authorCell.textContent = book.author;

        currRow.appendChild(titleCell);
        currRow.appendChild(authorCell);

        const buttonCell = document.createElement('td');

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.id = `${_id}a`;
        editBtn.addEventListener('click', edifInfo);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.id = _id;
        deleteBtn.addEventListener('click', deleteBook);
        
        buttonCell.appendChild(editBtn);
        buttonCell.appendChild(deleteBtn);
        currRow.appendChild(buttonCell);
        tableBody.appendChild(currRow);
      })
    }
    catch{
      console.log('error');
    }
  }

  function uploadABook(){
    document.querySelector('h3').textContent = 'FORM';
    document.querySelector('#form button').textContent = 'Submit';
    const title = document.querySelector('input[name=title]').value;
    const author = document.querySelector('input[name=author]').value;
    if(!title || !author){
      return;
    }
    fetch('http://localhost:3030/jsonstore/collections/books', {
      method: "POST",
      body: JSON.stringify({ title, author})
    })
    document.querySelector('input[name=title]').value = '';
    document.querySelector('input[name=author]').value = '';
  }

  function deleteBook(e){
    const currId = e.currentTarget.id;
    fetch(`http://localhost:3030/jsonstore/collections/books/${currId}`, {
      method: "DELETE"
    });
  }

  function edifInfo(e){
    document.querySelector('h3').textContent = 'Edit FORM';
    document.querySelector('#form button').textContent = 'Save';
    const title = document.querySelector('input[name=title]');
    const author = document.querySelector('input[name=author]');
    const currId = e.currentTarget.id;
    const currBook = books[currId.substring(0, currId.length - 1)];
    console.log(currBook);
    console.log(currBook.title);
    console.log(currBook.author);
    title.value = currBook.title;
    author.value = currBook.author;

  }

  function handleEvents(e){
    const isEditing = document.querySelector('#form button').textContent.includes('Save');
    isEditing ? putRequest(e) : uploadABook();
  }

  function putRequest(e){
    const currId = e.currentTarget.id;
    const title = document.querySelector('input[name=title]').value;
    const author = document.querySelector('input[name=author]').value;
    fetch(`http://localhost:3030/jsonstore/collections/books/${currId.substring(0, currId.length - 1)}`, {
      method: "PUT",
      body: JSON.stringify({ title, author })
    })
  }
}

attachEvents();