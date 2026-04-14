// 🎯 GOAL: Fetch a post and log its title using async/await

// 1️⃣ 'async' keyword: declares this function contains async operations
//    - It automatically wraps the return value in a Promise
//    - Enables the use of 'await' inside this function
async function getTitle() {
  
  // 2️⃣ 'try/catch': async/await uses traditional error handling
  //    - Any error in the try block jumps to catch
  //    - More intuitive than .catch() chains for many learners
  try {
    
    // 3️⃣ 'await fetch(...)': pause here until the network request finishes
    //    - fetch() still returns a Promise — await just "unwraps" it
    //    - response is now the actual Response object (not a Promise)
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    
    // 4️⃣ 'await response.json()': pause again while parsing JSON
    //    - response.json() also returns a Promise — await waits for it
    //    - data is now a plain JavaScript object we can use
    const data = await response.json();
    
    // 5️⃣ Use the data synchronously — no more nested .then() callbacks!
    console.log("Post title:", data.title);
    
  } catch (error) {
    // 6️⃣ Catches network errors, JSON parse errors, or any thrown error
    console.error("❌ Failed to fetch post:", error.message);
  }
}

// 7️⃣ Important: async functions return Promises, so we call them normally
getTitle();