function fetchUserById(id) {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      const mockUsers = {
        1: { id: 1, name: "Aria", role: "admin" },
        2: { id: 2, name: "Ben", role: "user" }
      };
      
      const user = mockUsers[id];
      
      // 👈 YOUR CODE HERE: 
    //  for(i=0; i<1000; i++) {
        // If user exists, resolve with the user object
        if (mockUsers[id]){
            //console.log("User Details: ", mockUsers[id]);
            resolve(mockUsers[id]);
        }
        else {
            //console.log("User Not Found")
            reject(new Error("User Not Found."));
        }
        // If not, reject with an Error("User not found")
    //  }
      
    }, 1000);
  });
}

// Test it:

fetchUserById(1)
  .then(user => console.log("✅ Found:", user))
  .catch(err => console.error("❌ Error:", err.message));

fetchUserById(999) // Should trigger reject
  .then(user => console.log("✅ Found:", user))
  .catch(err => console.error("❌ Error:", err.message)); 