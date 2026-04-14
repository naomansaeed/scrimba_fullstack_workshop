// pick html document location for the output
const activityEl = document.getElementById("activity-el");

// specify the url from which to recieve data 
const myApiUrl = "https://www.boredapi.com/api/activity/";

// start asynchronous api call
/*
fetch(myApiUrl)

.then((response) => response.json())

.then((data) => {
    console.log(data);
})

.catch((error) => console.error("Something went wrong: ", error)); */