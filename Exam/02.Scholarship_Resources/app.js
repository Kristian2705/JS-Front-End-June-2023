window.addEventListener("load", solve);

function solve() {
    const nextBtn = document.getElementById('next-btn');

    const inputs = {
      studentNameInp: document.getElementById('student'),
      universityInp: document.getElementById('university'),
      scoreInp: document.getElementById('score')
    }

    nextBtn.addEventListener('click', addData);

    const ulPreviewList = document.getElementById('preview-list');

    function addData(){
      if(Object.values(inputs).some(x => x.value === '')){
        return;
      }

      const li = createElement('li', null, ['application'], ulPreviewList);
      const article = createElement('article', null, [], li);
      const h4 = createElement('h4', inputs.studentNameInp.value, [], article);
      const pUni = createElement('p', `University: ${inputs.universityInp.value}`, [], article);
      const pScore = createElement('p', `Score: ${inputs.scoreInp.value}`, [], article);
      const editBtn = createElement('button', 'edit', ['action-btn', 'edit'], li);
      const applyBtn = createElement('button', 'apply', ['action-btn', 'apply'], li);

      function editData(){
        nextBtn.disabled = false;
        inputs.studentNameInp.value = h4.textContent;
        inputs.universityInp.value = pUni.textContent.split(': ')[1];
        inputs.scoreInp.value = pScore.textContent.split(': ')[1];
        li.remove();
      }

      function applyData(){
        nextBtn.disabled = false;
        editBtn.remove();
        applyBtn.remove();
        li.remove();
        document.getElementById('candidates-list').appendChild(li);
      }

      editBtn.addEventListener('click', editData);
      applyBtn.addEventListener('click', applyData);

      nextBtn.disabled = true;

      Object.values(inputs).forEach(x => x.value = '');
    }

    function createElement(type, textContent, classes, parent){
      const el = document.createElement(type);

      if(textContent){
          el.textContent = textContent;
      }

      if(classes && classes.length > 0){
          el.classList.add(...classes);
      }

      if(parent){
          parent.appendChild(el);
      }

      return el;
  }
}
  