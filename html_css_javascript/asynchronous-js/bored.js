// pick html document location for the output
const activityEl = document.getElementById("activity-el");

// specify the url from which to recieve data 
const myApiUrl = "https://apis.scrimba.com/bored/api/activity/";

// start asynchronous api call

fetch(myApiUrl)

.then((response) => response.json())

.then((data) => {
    //console.log(data);
    activityEl.textContent = `
    Suggested Activity: ${data.activity}
    Category: ${data.type}
    Required Participants: ${data.participants}
    Estimated Cost: ${data.price}
    `.trim();
})

.catch((error) => console.error("Something went wrong: ", error)); 