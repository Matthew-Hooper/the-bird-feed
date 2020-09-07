// Bird image endpoint - https://some-random-api.ml/img/birb
// Bird fact endpoint - https://some-random-api.ml/facts/bird

let facts = document.querySelector('.facts');
let button = document.querySelector('.button');

button.addEventListener('click', showFacts);


// Find a different API for this
function showFacts() {
    let url = "https://some-random-api.ml/facts/bird";
    fetch(`https://cors-anywhere.herokuapp.com/${url}`)
    .then(res => res.json())
    .then(data => 
        facts.innerHTML = data.fact)
    .catch((error) => {
        console.error('Error:', error);
    });
}