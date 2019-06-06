
let pageNumber = 1;
let all = `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=80`;
const random = 'https://api.punkapi.com/v2/beers/random';
const displayRandom = document.getElementById("random");
const displayOverview = document.getElementById("random");
const displayAllBeers = document.getElementById('allbeers');
const updateButton = document.getElementById('updatepage');

updateButton.addEventListener("click", function(){
  console.log("clicky");
  Number(pageNumber++);
  console.log(pageNumber);
  let all = `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=80`;
  fetch(all)
      .then((resp) => resp.json())
      .then((data) => displayOverviewBeer(data));
  return pageNumber;
});

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
    displayAllBeers.innerHTML = `
                                  ${Object.keys(data).map(key => (
                                    `<div class="card m-0" style="width: 18rem;">
                                      <img class="card-img-top" src="${data[key].image_url}" alt="">
                                      <div class="card-body">
                                        <h5 class="card-title">${data[key].name}</h5>
                                        <p class="card-text">S${data[key].tagline}</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                      </div>
                                    </div>`
                                  )).join(' ')}
                                  `;
}

/*`<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${data[key].image_url}" alt="">
  <div class="card-body">
    <h5 class="card-title">${data[key].name}</h5>
    <p class="card-text">S${data[key].tagline}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`*/

fetch(all)
    .then((resp) => resp.json())
    .then((data) => displayOverviewBeer(data));




/*fetch(random)
    .then((resp) => resp.json())
    .then((data) => displayRandomBeer(data));*/
