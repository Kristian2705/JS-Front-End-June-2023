async function loadRepos() {
	const listWithRepos = document.getElementById('repos');
	listWithRepos.innerHTML = '';
	const username = document.getElementById('username').value;
	try{
		const res = await fetch(`https://api.github.com/users/${username}/repos`);
		console.log('hi')
		const resAsJSON = await res.json();
		resAsJSON.forEach(el => {
			const listForNewRepo = document.createElement('li');
			const newRepo = document.createElement('a');
			newRepo.text = el.full_name;
			newRepo.href = el.html_url;
			listForNewRepo.appendChild(newRepo)
			listWithRepos.appendChild(listForNewRepo);
		});
	}
	catch(err){
		const textAsError = document.createElement('li');
		textAsError.textContent = 'Error!';
		listWithRepos.appendChild(textAsError);
	}
}