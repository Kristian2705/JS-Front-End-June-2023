async function solution() {
    try{
        const res = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
        const data = await res.json();
        debugger;
        data.forEach(el => {
            debugger;
            const currId = el[Object.keys(el)[0]];
            const titleV = el[Object.keys(el)[1]];
            const acc = document.createElement('div');
            acc.classList = 'accordion';

            const head = document.createElement('div');
            head.classList = 'head';

            const title = document.createElement('span');
            title.textContent = titleV;

            const button = document.createElement('button');
            button.classList = 'button';
            button.id = currId;
            button.textContent = 'More';

            head.appendChild(title);
            head.appendChild(button);

            const extra = document.createElement('div');
            extra.classList = 'extra';

            const content = document.createElement('p');

            extra.appendChild(content);

            acc.appendChild(head);
            acc.appendChild(extra);

            document.getElementById('main').appendChild(acc);
        })

        const btns = Array.from(document.querySelectorAll('button'));
        console.log(btns);
        btns.forEach(btn => {
            btn.addEventListener('click', e => showInfo(e));
        })
    }
    catch{
        console.log('error');
    }

    async function showInfo(e){
        if(e.target.textContent === 'More'){
            e.target.textContent = 'Less';
            try{
                const res = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${e.target.id}`);
                const data = await res.json();
                const currP = e.target.parentElement.parentElement.children[1].children[0];
                if(currP.textContent === ''){
                    currP.textContent = data.content;
                }
                e.target.parentElement.parentElement.children[1].style.display = 'block';
            }
            catch{
                console.log('error 2');
            }
        }
        else if(e.target.textContent === 'Less'){
            e.target.textContent = 'More';
            e.target.parentElement.parentElement.children[1].style.display = 'none';
        }
    }
}

solution();