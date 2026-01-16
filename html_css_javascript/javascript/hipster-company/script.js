const ourTeam = document.getElementById("team");
const images = [
            "images/desmond.jpg",
            "images/lyra.jpg",
            "images/rudolf.jpg"
        ]


function displayTeam () {
    let imgsDom ="";
    for (i = 0; i < images.length; i++) {
        let path = images[i];
        imgsDom += `<img src="${path}">`;
    }
    ourTeam.innerHTML = imgsDom;
}

displayTeam();