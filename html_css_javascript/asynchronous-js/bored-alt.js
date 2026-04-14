// =====================================================
// 🎯 GOAL: Fetch a random activity suggestion from the 
// Bored API (via Scrimba's reliable proxy) and display 
// it on the webpage.
// =====================================================

// 1️⃣ DOM SELECTION: Grab the HTML element where we'll show the activity
//    - Ensure your HTML has: <div id="activity-el"></div>
//    - We select it once at the top so it's ready when data arrives
const activityEl = document.getElementById("activity-el");

// 2️⃣ API CONFIG: Define the endpoint (using Scrimba's proxy for reliability)
//    - Original: https://www.boredapi.com/api/activity/ (sometimes down)
//    - Proxy:    https://apis.scrimba.com/bored/api/activity/ (learner-friendly)
//    - Using a constant makes it easy to swap endpoints later if needed
const myApiUrl = "https://apis.scrimba.com/bored/api/activity/";

// 3️⃣ ASYNC REQUEST START: fetch() initiates the HTTP GET request
//    - Returns a Promise IMMEDIATELY → script continues without waiting
//    - Browser handles the network call in the background
fetch(myApiUrl)

  // 4️⃣ RESPONSE HANDLING: Wait for server reply, then parse JSON
  //    - response.json() also returns a Promise (parsing is async!)
  //    - This .then() only runs after BOTH fetch AND parsing complete
  .then((response) => response.json())

  // 5️⃣ DATA USAGE: 'data' is now a plain JS object with activity details
  //    - We use template literals for clean, multi-line string formatting
  //    - .trim() removes extra whitespace for cleaner display in HTML
  .then((data) => {
    activityEl.textContent = `
      🎲 Suggested Activity: ${data.activity}
      🏷️ Category: ${data.type}
      👥 Required Participants: ${data.participants}
      💰 Estimated Cost (0=free, 1=expensive): ${data.price}
    `.trim();
  })

  // 6️⃣ ERROR HANDLING: Catches ANY failure in the chain:
  //    - Network issues (no internet, DNS failure)
  //    - Invalid JSON response
  //    - Server errors (if we added response.ok checking)
  .catch((error) => {
    // Log technical details for debugging
    console.error("❌ Failed to fetch activity:", error.message);
    
    // Optional: Show user-friendly error on page too
    // activityEl.textContent = "⚠️ Could not load activity. Please try again.";
  });

// 🔍 DEBUG TIP: Uncomment below to see execution order
// console.log("✅ Script finished (fetch still in progress!)");