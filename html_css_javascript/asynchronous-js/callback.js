function uploadFile(callback) {
    console.log('Step 1: Uploading File...');
    setTimeout(() =>{
        callback(); // call the next step after one second
    }, 1000);
}

function processFile(callback) {
    console.log('Step 2: Processing File...');
    setTimeout(() => {
        callback(); // call the next step after one second
    }, 1000)
}

function notifyUser(callback) {
    console.log('Step 3: Notifying User...');
    setTimeout(() => {
        callback(); // call the next step after one second
    }, 1000)
}

uploadFile(() => 
    processFile(() =>
        notifyUser(
            () => console.log('All Steps Completed.')
        )
    )
)

/* 
Challenge: 
    - write the code differently so that it utilises 
    'await', 'promises' etc. in order; in a try/catch block & 
    when they are done, log 'All steps completed.'. 
    - The objective is to escape the "callback hell".
*/