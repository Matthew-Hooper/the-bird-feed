// http://shibe.online/api/birds?count=3

let image1 = document.querySelector('.image-1');
let image2 = document.querySelector('.image-2');
let image3 = document.querySelector('.image-3');
let button = document.querySelector('.button');

button.addEventListener('click', loadImages);

function loadImages() {
    let url = "http://shibe.online/api/birds?count=3";
    fetch(`https://cors-anywhere.herokuapp.com/${url}`)
    .then(response => response.json())
    .then(data => {
        image1.src = data[0];
        image2.src = data[1];
        image3.src = data[2];
    })

    .catch(error => `Error= ${error}` )
}