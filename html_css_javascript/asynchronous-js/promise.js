// 🎯 GOAL: Create a Promise that resolves after 2 seconds

const waitTwoSeconds = new Promise((resolve, reject) => {
  // 👇 This runs immediately when the Promise is created
  console.log("⏳ Timer started...");
  
  setTimeout(() => {
    // 👇 After 2000ms, we decide the "work" is done
    const success = true; // Simulate a condition
    
    if (success) {
      // 👇 Fulfill the Promise with a value
      resolve("✅ Done waiting!");
    } else {
      // 👇 Reject with an error message
      reject("❌ Timer failed");
    }
  }, 2000);
});

// 👇 Now CONSUME the Promise (like you've done with fetch)
waitTwoSeconds
  .then(message => console.log(message))  // Runs on resolve
  .catch(error => console.error(error));  // Runs on reject

// 🔍 Notice: This logs BEFORE "✅ Done waiting!"
console.log("🔵 Script continues immediately");