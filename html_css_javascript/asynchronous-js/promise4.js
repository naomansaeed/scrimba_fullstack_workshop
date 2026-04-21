const promise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;
  
  if (success) {
    resolve('✅ Operation Successful');
  } else {
    // 👇 CHANGED THIS LINE:
    reject(new Error('❌ Operation Failed'));
  }
});

// 👇 WRAPED IN ASYNC FUNCTION (if not using type="module"):
async function execute() {
  try {
    const response = await promise;
    console.log(response);
  } catch (error) {
    // 👇 Optional: Distinguish error types
    console.error(error.message); // "❌ Operation Failed"
     console.error(error.stack); // Full stack trace for debugging
  }
}
execute();