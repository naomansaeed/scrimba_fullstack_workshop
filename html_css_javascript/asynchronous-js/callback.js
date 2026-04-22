// 🎯 GOAL: Wrap the setTimeout logic in a Promise

function uploadFile() {
    // Return a new Promise so callers can await it
    return new Promise((resolve, reject) => {
        console.log('Step 1: Uploading File...');
        setTimeout(() =>{
            // Simulate success (no error for now)
            // 👇 Call resolve() to signal "this step is done"
            resolve();
                            //callback(); // call the next step after one second

        // If there was an error, we'd call: reject(new Error("Upload failed"))
    }, 1000);
    })
    
}

function processFile(callback) {
    return new Promise((resolve, reject) => {
        console.log('Step 2: Processing File...');
        setTimeout(() => {
            resolve();
        //callback(); // call the next step after one second
    }, 1000)
    })
    
}

function notifyUser(callback) {
    return new Promise((resolve, reject) => {
        console.log('Step 3: Notifying User...');
        setTimeout(() => {
            resolve();
        //callback(); // call the next step after one second
    }, 1000)
    })
    
}

async function runPipeline() {
    try {
        await uploadFile();
        await processFile();
        await notifyUser();
    } catch (error) {
        console.error('Operation failed: ', error.message);
    } finally{
        console.log('All Steps Completed.');
    }
}

runPipeline();

/*
uploadFile(() => 
    processFile(() =>
        notifyUser(
            () => console.log('All Steps Completed.')
        )
    )
) */

/* 
Challenge: 
    - write the code differently so that it utilises 
    'await', 'promises' etc. in order; in a try/catch block & 
    when they are done, log 'All steps completed.'. 
    - The objective is to escape the "callback hell".
*/