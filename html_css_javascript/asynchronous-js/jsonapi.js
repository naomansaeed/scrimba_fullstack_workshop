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
        console.error("❌ Failed to fetch posts:", error.message);
    }
    finally{
        console.log("Posts fetch attempt completed");
    }
}

// 🚀 Start the process
fetchAndDisplayPosts();