const ourTeam = document.getElementById("team");
const images = [
            "images/desmond.jpg",
            "images/lyra.jpg",
            "images/rudolf.jpg"
        ]


function displayTeam () {
    for (i = 0; i < images.length; i++) {
        let path = images[i];
        ourTeam.innerHTML += `<img src="${path}">`;
    }
}

displayTeam();