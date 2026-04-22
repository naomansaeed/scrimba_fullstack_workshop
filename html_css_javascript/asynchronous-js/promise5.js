function createPromise() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5

        // check if boolean value is true or false
        if (success) {
            resolve('Operation Successful');
        }else{
            reject('Operation Failed');
        }
    })
}

try {
    const promise1 = createPromise();
    const promise2 = createPromise();
    const promise3 = createPromise();
    const myResult = await Promise.all([promise1, promise2, promise3])
    console.log(myResult);
} catch (error) {
    console.error(error.message);
    console.error(error.stack);
}