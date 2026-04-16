try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
} 

catch{
    console.log(error);
}
finally{
    console.log('Operation Completed.');
}