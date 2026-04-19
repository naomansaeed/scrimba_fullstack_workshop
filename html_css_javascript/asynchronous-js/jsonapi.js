const postsSection = document.getElementById("posts-section");
const url_addr = 'https://jsonplaceholder.typicode.com/posts';

/*
try {
    fetch(url_addr)
        .then((response) => response.json()
            .then((data) => {
                jsonapi.textContent = `${data}`.trim();
            })
}
catch((error) {
    console.error("Something went wrong: ", error.message
}   */
    

/* 
base api url: https://jsonplaceholder.typicode.com
Endpoint: /posts
Objective: Make a fetch request to get all the available posts.
 - Remember to handle all the errors.
*/

async function fetchAndDisplayPosts() {
    postsSection.innerHTML = '<p>Loading ...</p>';

    try{
        const response = await fetch(url_addr);
        if (!response.ok) { 
            console.log("Failed! Resourse not found.");
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
         }
        const posts = await response.json();

        postsSection.innerHTML = "";
        posts.forEach(post => { 
            postsSection.innerHTML += `
            <article>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <small>${post.id}</small>
            </article>
            `;
         })
    }
    catch (error) {
        console.error("⚠️ Could not load posts. Check your connection.", error.message);
    }
    finally{
        console.log("Posts fetch attempt completed");
    }
}

// 🚀 Start the process
fetchAndDisplayPosts();

//---

// 🎯 GOAL: Create a new post with title "Holiday Nightmares"

// const createPostUrl = "https://jsonplaceholder.typicode.com/posts";

async function createNewPost() {
    try {
        // Configure the fetch options object
        const response = await fetch(url_addr, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({
                title: 'Holiday Nightmares',
                body: 'when I was kidnapped in Scotland...',
                userId: 1,
            })
        });
        if(!response.ok){
            throw new Error(`HTTP ${response.status}: Failed to create post`);
        }
        const newPost = await response.json();

        console.log('New Post Created: ', newPost);
    }
    catch(error){
        console.error("Failed to create the post.", error.message);
    }
    finally{
        console.log("Operation Completed!");
    }
}

// Calling the function
createNewPost();