
let pageNumber = 1;
const all = `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=80`;
const random = 'https://api.punkapi.com/v2/beers/random';
const displayRandom = document.getElementById("random");
const displayOverview = document.getElementById("random");
const displayAllBeers = document.getElementById('allbeers');

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
    displayAllBeers.innerHTML = `<ol>
                                  ${Object.keys(data).map(key => (
                                    `<li>${data[key].name} : ${data[key].tagline}</li>`
                                  )).join(' ')}
                                  </ol>`
}


function updatePage(pageNumber) {
  pageNumber++;
  return pageNumber;
}


fetch(all)
    .then((resp) => resp.json())
    .then((data) => displayOverviewBeer(data));




/*fetch(random)
    .then((resp) => resp.json())
    .then((data) => displayRandomBeer(data));*/
