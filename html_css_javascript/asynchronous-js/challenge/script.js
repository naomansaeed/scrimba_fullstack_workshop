/*
Challenge:
- create an array of promises using getImagePromise
- save the results of calling all those promises in 
one go; to a const ''results'.
- If the promises resolve:
    - log "All images loaded successfully!".
    - hide 'uploadContainer'
    - iterate over the results and render them to imgContainer
- if a promises reject, catch and log the error
*/
function getImagePromise(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const img = new Image();
            img.src = url;
            img.alt = 'scenic image';
            img.addEventListener('load',() => resolve(img));
            img.addEventListener('error',() => reject(new Error(`Failed to load image: ${url}`)));
        }, 500)
    })
}

const images = [
    'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/5/50/Salta-VallesCalchaquies-P3140151.JPG',
    'https://www.bbc.com/storyworks/specials/qatar-airways/img/coasts-with-the-most/hero.jpg'
]

async function preLoadImages(imageUrlArr) {
    const imgContainer = document.getElementById('img-container');
    const uploadContainer = document.getElementById('upload-container');

    const promises = imageUrlArr.map((url) => getImagePromise(url));

    try {
        const results = await Promise.all(promises);

        console.log('All images loaded successfully!');
        uploadContainer.style.display = 'none';

        results.forEach((img) => imgContainer.appendChild(img));
    } catch (error) {
        console.error(error.message);
        console.error(error.stack);
    }

    //const results = getImagePromise(images);
}

document.getElementById('submit-imgs').addEventListener('click', () => preLoadImages(images));