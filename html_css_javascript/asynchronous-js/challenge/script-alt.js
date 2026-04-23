// 🎯 GOAL: Preload multiple images concurrently using Promise.all()

// Helper: Wrap image loading in a Promise with simulated delay
function getImagePromise(url) {
  return new Promise((resolve, reject) => {
    // Simulate network delay for learning purposes
    setTimeout(() => {
      const img = new Image();
      img.src = url;
      img.alt = 'scenic image';
      
      // ✅ Resolve when image successfully loads
      img.addEventListener('load', () => resolve(img));
      
      // ❌ Reject with helpful error message if load fails
      img.addEventListener('error', () => 
        reject(new Error(`Failed to load image: ${url}`))
      );
    }, 500);
  });
}

// Array of image URLs to preload
const images = [
  'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/5/50/Salta-VallesCalchaquies-P3140151.JPG',
  'https://www.bbc.com/storyworks/specials/qatar-airways/img/coasts-with-the-most/hero.jpg'
];

// Main async function: preload and display images
async function preLoadImages(imageUrlArr) {
  const imgContainer = document.getElementById('img-container');
  const uploadContainer = document.getElementById('upload-container');

  // 🔁 Map URLs to an array of Promises (all start executing immediately)
  const promises = imageUrlArr.map((url) => getImagePromise(url));

  try {
    // ⏳ Wait for ALL promises to resolve concurrently
    // 💡 Promise.all() returns results in the SAME ORDER as input array
    const results = await Promise.all(promises);

    // ✅ Success path: log, hide initial view, render images
    console.log('All images loaded successfully!');
    uploadContainer.style.display = 'none'; // Hide entire initial view

    // 🖼️ Append each loaded image element to the container
    results.forEach((img) => imgContainer.appendChild(img));
    
  } catch (error) {
    // ❌ Error path: log technical details for debugging
    console.error('Image preload failed:', error.message);
    console.error('Stack trace:', error.stack);
    
    // 💡 Optional: Show user-friendly error on page
    // imgContainer.innerHTML = `<p style="color:red">⚠️ Could not load images</p>`;
  }
  // 💡 Note: No finally needed here, but could add loading state cleanup
}

// 🚀 Attach click handler to trigger the preload
document.getElementById('submit-imgs').addEventListener('click', () => {
  preLoadImages(images);
});