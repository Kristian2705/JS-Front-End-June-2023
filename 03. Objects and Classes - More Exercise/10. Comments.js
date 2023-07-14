function solve(arr){
    let users = [];
    const articles = arr.reduce((acc, curr) => {
        let username = '';
        let article = '';
        if(curr.includes('user')){
            username = curr.split(' ')[1];
            if(!users.includes(username)){
                users.push(username);
            }
        }
        else if(curr.includes('article')){
            article = curr.split(' ')[1];
            acc[article] = [];
        }
        else{
            const data = curr.split(' posts on ');
            username = data[0];
            const commentInfo = data[1];
            const [articleName, commentTokens] = commentInfo.split(': ');
            if(users.includes(username) && acc.hasOwnProperty(articleName)){
                let commentObj = {};
                const[commentTitle, commentContent] = commentTokens.split(', ');
                commentObj[username] = `${commentTitle} - ${commentContent}`;
                acc[articleName].push(commentObj);
            }
        }
        return acc;
    }, {});

    Object.keys(articles).sort((a, b) => articles[b].length - articles[a].length).forEach(key => {
        console.log(`Comments on ${key}`);
        articles[key].sort((objA, objB) => {
            return Object.keys(objA)[0].localeCompare(Object.keys(objB)[0]);
        }).forEach(obj => {
            console.log(`--- From user ${Object.keys(obj)[0]}: ${Object.values(obj)[0]}`);
        })
    })
}

solve(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby',
'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them',
'Mark posts on Steven: title, Run', 
'someUser posts on Movies: Like']
)