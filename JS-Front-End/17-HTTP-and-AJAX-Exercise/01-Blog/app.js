function attachEvents() {
    const postsURL = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsURL = 'http://localhost:3030/jsonstore/blog/comments';

    const loadBtnElement = document.getElementById('btnLoadPosts');
    const selectElement = document.getElementById('posts');

    const viewBtnElement = document.getElementById('btnViewPost');
    const commentsListElement = document.getElementById('post-comments');
    const postTitleElement = document.getElementById('post-title');
    const postBodyElement = document.getElementById('post-body');

    loadBtnElement.addEventListener('click', loadData);
    viewBtnElement.addEventListener('click', addComments);
    let posts = [];

    function loadData() {
        selectElement.innerHTML = '';
        posts = [];

        fetch(postsURL)
            .then(response => response.json())
            .then(data => {
                for (const [postKey, postData] of Object.entries(data)) {
                    const newOptionElement = document.createElement('option');
                    newOptionElement.value = postKey;
                    newOptionElement.textContent = postData.title;

                    selectElement.appendChild(newOptionElement);
                    posts.push(postData);
                }
            })
            .catch();

    }

    function addComments() {
        const post = posts[selectElement.selectedIndex];

        postTitleElement.textContent = post.title;
        postBodyElement.textContent = post.body;

        commentsListElement.innerHTML = '';
        fetch(commentsURL)
            .then(response => response.json())
            .then(data => {
                const comments = Object.values(data).filter(comment => comment.postId === post.id);
                comments.forEach(comment => {
                    const newLi = document.createElement('li');
                    newLi.value = comment.id;
                    newLi.textContent = comment.text;
                    commentsListElement.appendChild(newLi);
                });
            })
            .catch();
    }
}

attachEvents();