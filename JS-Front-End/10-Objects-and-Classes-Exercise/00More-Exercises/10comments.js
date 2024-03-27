function comments(someInput) {
    let log = {
        'users': [],
        'articles': [],
        'comments': {},
    };
    const addUser = 'user ';
    const addArticle = 'article ';
    const addPost = ' posts on ';

    let dataExtract  = a => [a.split(': ')[0], a.split(': ')[1].split(', ')]

    for (const row of someInput) {
        if (row.includes(addUser)) {
            const username = row.replace(addUser, '');
            log['users'].push(username);
        } else if (row.includes(addArticle)) {
            const articleName = row.replace(addArticle, '');
            log['articles'].push(articleName)
        } else if (row.includes(addPost)) {
            const [username, articleData] = row.split(addPost);
            const [articleName, [commentTitle, commentContent]] = dataExtract(articleData);
            const user = log['users'].find(u => u === username);
            const article = log['articles'].find(a => a === articleName);

            if (user && article) {
                if (!log['comments'][articleName]) {
                    log['comments'][articleName] = [];

                }

                const currentComment = {
                    'user': user,
                    'title': commentTitle,
                    'content': commentContent
                };

                log['comments'][articleName].push(currentComment);

            }
        }
    }

    let sortedArticles = Object.entries(log['comments']).sort((a, b) => b[1].length - a[1].length);

    for (const article of sortedArticles) {

        const sortedComments = article[1].sort((a, b) => a.user.localeCompare(b.user))
            .map((c) => `--- From user ${c.user}: ${c.title} - ${c.content}`);

        if (sortedComments.length > 0) {
            console.log(`Comments on ${article[0]}`);
            console.log(sortedComments.join('\n'));
        }
    }
}


comments(['user Mark',
    'Mark posts on someArticle: NoTitle, stupidComment',
    'article Bobby',
    'article Steven',
    'user Liam',
    'user Henry',
    'Mark posts on Bobby: Is, I do really like them',
    'Mark posts on Steven: title, Run',
    'someUser posts on Movies: Like'
]);



//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               10.\tComments
Write a function that stores information about users and their comments on a website. 
You have to store the users, the comments as an object with title and content, 
and the article that the comment is about. The user can only comment, when he is on 
the list of users and the article is in the list of articles. The input comes as an array of strings. 
The strings will be in the format:
"user {username}" – add the user to the list of users
"article {article name}" – add the article to the article list
"{username} posts on {article name}: {comment title}, {comment content}" – save the info
At the end sort the articles by a count of comments and print the users with their comments 
ordered by usernames in ascending.
Output
Print the result in the following format:
"Comments on {article1 name}
--- From user {username1}: {comment title} - {comment content}
--- From user {username2}: …
Comments on {article2 name}





____________________________________________________________________________________________
Example

Input
['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies',
'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser',
 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do',
'someUser posts on Shopping: title, I go shopping every day',
 'someUser posts on Movies: Like, I also like movies very much']


Output
Comments on Movies
--- From user someUser: Like - I also like movies very much
--- From user uSeR4: I also like movies - I really do
Comments on Books
--- From user uSeR4: I like books - I do really like them
Comments on Shopping
--- From user someUser: title - I go shopping every day

```