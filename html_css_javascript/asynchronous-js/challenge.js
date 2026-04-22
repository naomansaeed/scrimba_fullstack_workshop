/* 
Challenge:
1. Return a new promise. It should :
 - create a new image and assign the incoming url 
 to its src attribute. (Use image consructor for this)
 - listen out for a laod event. If a load event is detected, 
 the promise should resolve, providing the image element.
 - listen out for an error event. If an error event is detected, 
 the promise should reject giving the message "img has NOT loaded".
*/

function preLoadImg(url) {
    return new Promise ((resolve, reject) => {
        //creating new image object and assigning the src value
        const myImage = new Image();   //`<img src="${url}">`;
       // myImage.crossOrigin = "anonymous";
        myImage.src = url;
        myImage.alt = "a beautiful scene";
        myImage.addEventListener('load',() => resolve(myImage));
        myImage.addEventListener('error', () => reject('img has NOT loaded'));

    /*    myImage.addEventListener('load', () => {
            resolve(myImage);
        });
        myImage.addEventListener('error', () => {
            reject (new Error('Failed to load the desired resource.'));
        });
         */
    /*    if (myImage) {
            resolve (myImage);
        } else {
            reject(new Error('Failed to load the desired resource.'));
        } */
    });
}

try {
    //const results = await preLoadImg('https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenicl.jpg');
    // https://images.stockcake.com/public/f/2/c/f2c6b3f8-e9a4-4d6b-ae17-0644ce9d7822_large/vibrant-urban-painting-stockcake.jpg
    // Photo by Stephen Leonardi from Pexels: https://www.pexels.com/photo/autumn-landscape-at-yosemite-national-park-34636070/
    //const results = await preLoadImg('https://www.pexels.com/photo/autumn-landscape-at-yosemite-national-park-34636070/');

    const results = await preLoadImg('https://images.stockcake.com/public/f/2/c/f2c6b3f8-e9a4-4d6b-ae17-0644ce9d7822_large/vibrant-urban-painting-stockcake.jpg');
    console.log(results);
    document.getElementById('img-container').appendChild(results);
} catch (error) {
    console.error(error);
}