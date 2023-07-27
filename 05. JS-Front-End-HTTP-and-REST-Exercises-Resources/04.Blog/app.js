function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', loadPosts);

    document.getElementById('btnViewPost').addEventListener('click', showComments);

    let posts;
    let comments;
    let commentsToDisplay;

    let postsSelectMenu;

    async function loadPosts(){
        try{
            const res = await fetch('http://localhost:3030/jsonstore/blog/posts');
            posts = await res.json();
            console.log(posts);
            postsSelectMenu = document.getElementById('posts');
            Object.keys(posts).forEach(key => {
                const currOption = document.createElement('option');
                currOption.value = key;
                currOption.textContent = posts[key].title;

                postsSelectMenu.appendChild(currOption);
            })
        }
        catch{
            console.log('error');
        }
    }

    async function showComments(){
        try{
            const res = await fetch('http://localhost:3030/jsonstore/blog/comments');
            comments = await res.json();
            console.log(comments);
            const currIdOfPost = postsSelectMenu.value;
            commentsToDisplay = [];
            Object.keys(comments).forEach(key => {
                if(comments[key].postId === currIdOfPost){
                    commentsToDisplay.push(comments[key].text);
                }    
            });

            console.log(commentsToDisplay);
            displayArticle();
        }
        catch{
            console.log('error 2');
        }
    }

    function displayArticle(){
        const titleOfPost = document.getElementById('post-title');
        titleOfPost.textContent = posts[postsSelectMenu.value].title;
        const bodyOfPost = document.getElementById('post-body');
        bodyOfPost.textContent = posts[postsSelectMenu.value].body;
        const postSection = document.getElementById('post-comments');
        postSection.innerHTML = '';
        commentsToDisplay.forEach(c => {
            const currComment = document.createElement('li');
            currComment.textContent = c;
            postSection.appendChild(currComment);
        })
    }
}

attachEvents();