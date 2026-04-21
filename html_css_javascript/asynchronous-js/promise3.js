
const promise = new Promise((resolve, reject) => {
    // Bollean variable with 50/50 chance of being true
    const success = Math.random() > 0.5

    // check if boolean value is true or false
    if (success) {
        resolve('Operation Successful');
    }else{
        reject('Operation Failed');
    }
})

//promise.then((response) => console.log(response))

try {
    const response = await promise;
    console.log(response);
} catch (error) {
    console.log(error);
}