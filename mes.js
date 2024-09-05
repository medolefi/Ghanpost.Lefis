const loggedInUser = localStorage.getItem('loggedInUser');
if (!loggedInUser) {
    window.location.href = 'login.html'; // Redirect to login if no user is logged in
}

let posts = JSON.parse(localStorage.getItem('posts')) || [];

// Add a new post
document.getElementById('add-post').addEventListener('click', () => {
    const postContent = document.getElementById('post-content').value;

    if (postContent.trim()) {
        posts.push({ content: postContent, user: loggedInUser });
        localStorage.setItem('posts', JSON.stringify(posts));
        loadPosts();
        document.getElementById('post-content').value = ''; // Clear textarea after posting
    }
});

// Load posts from localStorage
function loadPosts() {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `<p><strong>${post.user}</strong>: ${post.content}</p>`;
        postsContainer.appendChild(postDiv);
    });
}

// Load posts when the page is opened
loadPosts();

// Logout
document.getElementById('logout-button').addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html'; // Redirect to login page after logout
});



