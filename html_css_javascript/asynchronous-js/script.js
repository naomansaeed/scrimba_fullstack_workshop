// 1️⃣ Define where we're asking for data
const apiUrl = "https://dog.ceo/api/breeds/image/random";
// get the existing image tag from html document
const imageEl = document.getElementById("image-el");
const breed = document.getElementById("breed-el");

// 2️⃣ Start the asynchronous request (returns immediately)
fetch(apiUrl)

    // 3️⃣ Wait for the network response, then convert raw text to a JS object
    .then((response) => response.json())
        
        // 4️⃣ Wait for the conversion to finish, then use the actual data
        //.then((data) => console.log("Dog Image URL: ", data.message))

        //Wait for the conversion to finish, then SHOW the image on the page
        .then((data) => {
            imageEl.src = data.message; // assigned api image url to the existing image tag
          /*  const img = document.createElement("img");       // Create a new <img> element
            img.src = data.message;                           // Set its source to the API's URL
            document.body.appendChild(img); */               // Add it to the page

            //extract breed name from url
            const urlParts = data.message.split('/');
            const breedName = urlParts [urlParts.length - 2];
            breed.textContent = "Dog Breed: " + breedName ; 
        })

            // 5️⃣ Catch any network or parsing failures that happen along the way
            .catch((error) => console.error("Something went wrong.", error));