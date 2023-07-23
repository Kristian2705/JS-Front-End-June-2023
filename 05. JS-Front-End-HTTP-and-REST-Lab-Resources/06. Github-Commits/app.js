async function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const listWithCommits = document.getElementById('commits');
    listWithCommits.innerHTML = '';
    try{
        const res = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`);
        const resAsJSON = await res.json();
        resAsJSON.forEach(({ commit }) => {
            const newCommit = document.createElement('li');
            newCommit.textContent = `${commit.author.name}: ${commit.message}`;
            listWithCommits.appendChild(newCommit);
        })
    }
    catch (err) {
        const errorMessage = document.createElement('li');
        errorMessage.textContent = `Error: ${err.status} (Not Found)`;
        listWithCommits.appendChild(errorMessage);
    }
}