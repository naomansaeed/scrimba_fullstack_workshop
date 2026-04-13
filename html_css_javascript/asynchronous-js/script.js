// 1️⃣ Define where we're asking for data
const apiUrl = "https://dog.ceo/api/breeds/image/random";

const imageEl = document.getElementById("image-el");

// 2️⃣ Start the asynchronous request (returns immediately)
fetch(apiUrl)

    // 3️⃣ Wait for the network response, then convert raw text to a JS object
    .then((response) => response.json())
        
        // 4️⃣ Wait for the conversion to finish, then use the actual data
        //.then((data) => console.log("Dog Image URL: ", data.message))

        .then((data) => {
            imageEl.src = data.message;
          /*  const img = document.createElement("img");
            img.src = data.message;
            document.body.appendChild(img); */
        })

            // 5️⃣ Catch any network or parsing failures that happen along the way
            .catch((error) => console.error("Something went wrong.", error));