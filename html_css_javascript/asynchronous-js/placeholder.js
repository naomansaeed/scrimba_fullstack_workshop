// =====================================================
// 🎯 GOAL: Fetch a sample post from JSONPlaceholder API
// and display its details on the webpage.
// =====================================================

// 1️⃣ DOM SELECTION: Grab the HTML element where we'll show the data
//    - We do this BEFORE the fetch so it's ready when data arrives
//    - If this returns null, the script will fail later — so ensure 
//      your HTML has: <p id="placeholder"></p>
const placeholder = document.getElementById("placeholder");

// 2️⃣ API CONFIG: Define the endpoint we're requesting
//    - This is a mock API that always returns the same post (id=1)
//    - Using a constant makes it easy to change/update later
const myUrl = "https://jsonplaceholder.typicode.com/posts/1";

// 3️⃣ ASYNC REQUEST START: fetch() initiates the network call
//    - It returns a Promise IMMEDIATELY (non-blocking)
//    - The browser handles the HTTP request in the background

fetch(myUrl)

  // 4️⃣ RESPONSE HANDLING: Wait for the server to reply
  //    - response is a Response object (headers, status, body stream)
  //    - response.json() parses the response body as JSON
  //    - IMPORTANT: .json() ALSO returns a Promise (parsing is async!)
.then((response) => 
    // Optional: Check if the HTTP request was successful (status 200-299)
    // if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    response.json())

    // 5️⃣ DATA USAGE: This runs ONLY after fetch AND json() both complete
  //    - 'data' is now a plain JavaScript object we can work with
  //    - We use template literals (`...`) for clean, readable string formatting
.then((data) => {
    // Update the DOM element with formatted post details
    // 💡 Why template literals? They allow multi-line strings and ${variable} interpolation
    placeholder.textContent = ` Post Title: ${data.title} 
    Post Content: ${data.body}
    ID : ${data.id}
    User ID : ${data.userId}
    `.trim(); // .trim() removes extra whitespace at start/end for cleaner output
})

   // 6️⃣ ERROR HANDLING: Catches ANY failure in the chain above:
  //    - Network errors (no internet, DNS failure)
  //    - HTTP errors (if we threw one in step 4)
  //    - JSON parsing errors (if response isn't valid JSON)
.catch((error) => 
    // Log a user-friendly message + the technical details for debugging
    console.error("Something went wrong: ", error.message
    // Optional: Show error on page too for user feedback
    // placeholder.textContent = "⚠️ Could not load post. Please try again.";
    ));

// 🔍 DEBUG TIP: Add this line temporarily to see execution order:
// console.log("✅ Script finished running (but fetch may still be in progress!)");
