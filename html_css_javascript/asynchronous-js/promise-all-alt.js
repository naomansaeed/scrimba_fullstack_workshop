// 🎯 GOAL: Run multiple async operations concurrently with Promise.all()
// 💡 Key insight: Promise.all() waits for ALL promises to resolve, 
//    but fails FAST if ANY promise rejects.

// Helper: Creates a Promise that randomly resolves or rejects
function createPromise() {
  return new Promise((resolve, reject) => {
    // Simulate 50/50 success chance
    const success = Math.random() > 0.5;
    
    if (success) {
      // ✅ Fulfill with a value
      resolve('Operation Successful');
    } else {
      // ❌ Reject with a string (works, but Error objects give better stack traces)
      reject('Operation Failed');
    }
  });
}

// 🚀 Main execution: wrapped in try/catch for async error handling
try {
  // Create 3 independent Promises (they start executing immediately)
  const promise1 = createPromise();
  const promise2 = createPromise();
  const promise3 = createPromise();
  
  // ⏳ Await ALL promises to complete concurrently
  // 💡 Promise.all() returns an array of results in the SAME ORDER as input
  const myResult = await Promise.all([promise1, promise2, promise3]);
  
  // ✅ Only runs if ALL three promises resolved
  console.log("🎉 All operations succeeded:", myResult);
  // Example output: ["Operation Successful", "Operation Successful", "Operation Successful"]
  
} catch (error) {
  // ❌ Runs if ANY promise rejected (Promise.all() "fails fast")
  // 💡 Note: error.message only works if error is an Error object
  console.error("⚠️ At least one operation failed:", error);
  
  // 🔍 Show stack trace for debugging (helpful during development)
  console.error("🔍 Debug info:", error.stack);
}

// 🧠 Pro insight: 
// - Promises start executing when CREATED, not when awaited
// - Promise.all() doesn't "run" them — it just waits for already-running Promises
// - Order of results ALWAYS matches order of input array, regardless of completion order