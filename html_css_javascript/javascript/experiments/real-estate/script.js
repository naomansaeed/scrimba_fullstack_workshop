/*
There is a folder called real-estate. it contains the following:
- folders
    -images
    -properties
- files
    index.html
    style.css
    script.js

Super Challenge:
===============

Render out a card for each of the properties in the propertyForSaleArr array (in the properties folder). 
Each card should have an image, a property location, a price, a comment and TOT, and total property size in 
square meters (each object has an array with the size in the square meters of the individual rooms).

If no array of properties is passed to getPropertyHtml, the place-holder property stored in 
placeholderPropertyObj (in the 'properties' folder) should be rendered instead.

JS to use in the complete challenge:
- import/ export
- .map()
- .join()
- Object Destructuring
- .reduce()
- Default Parameters

Following is the HTML template. Replace everything in the UPPERCASE with property data.

<section class="card">
    <img src="/images/IMAGE" alt="">
    <div class="card-right">
        <h2> PROPERTY LOCATION</h2>
        <h3>PRICE PKR</h3>
        <p>COMMENT (DESCRIPTION OF PROPERTY)</p>
        <h3>TOTAL SIZE IN SQUARE METERS m&sup2;</h3>
    </div>
</section>

*/

import { propertyForSaleArr, placeholderPropertyObj } from "./properties/data.js";

/* | Modify 👇 by adding an argument for the function call ONLY. |*/
document.getElementById("container").innerHTML = getPropertyHtml(propertyForSaleArr);



/*
  - Generates HTML cards for property listings.
  - @param {Array} properties - Array of property objects. Defaults to placeholder.
  - @returns {string} - Joined HTML string of all property cards.
 */
export function getPropertyHtml(properties= [placeholderPropertyObj]){

    // Transform each property object into an HTML card string
    const cardsArray = properties.map((property) =>{

        // Destructure for clean access to properties
        const {propertyLocation, pricePKR, roomsM2, comment, image} = property;

        // Calculate total size: sum all room areas using reduce
        // acc = accumulator (running total), curr = current room size
        const totalSize = roomsM2.reduce((acc, curr) => {
            return acc + curr;
        }, 0); // Start accumulation from 0

        // Return the complete card HTML with interpolated values
        return `<section class="card">
                    <img src="${image}" alt="Property in ${propertyLocation}">
                    <div class="card-right">
                        <h2>${propertyLocation}</h2>
                        <h3>${pricePKR.toLocaleString()} PKR</h3>
                        <p>${comment}</p>
                        <h3>Total Size in Square Meters: ${totalSize} m&sup2;</h3>
                    </div>
                </section>`;
    });

    // Join all card strings into one HTML string (no spaces between cards)
    return cardsArray.join(' ');
}