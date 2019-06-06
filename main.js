
const all = 'https://api.punkapi.com/v2/beers?page=5&per_page=80';
const random = 'https://api.punkapi.com/v2/beers/random';
const displayRandom = document.getElementById("random");
const displayOverview = document.getElementById("random");

function displayRandomBeer(data) {
    let randomBeer = data[0].name;
    let randomImage = data[0].image_url;

    // console.table(data);
    displayRandom.innerHTML = randomBeer;
    displayRandom.innerHTML += "<br>";
    displayRandom.innerHTML += `<img src=${randomImage}>`;
};

function displayOverviewBeer(data){
    // let overviewBeer = data;
    console.log(data);



}




fetch(all)
    .then((resp) => resp.json())
    .then((data) => displayOverviewBeer(data));




fetch(random)
    .then((resp) => resp.json())
    .then((data) => displayRandomBeer(data));










