let pageNumber = 1;
let all = `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=80`;
const random = 'https://api.punkapi.com/v2/beers/random';
const displayRandom = document.getElementById("randomBeers");
const displayAllBeers = document.getElementById('allbeers');
const updateButton = document.getElementById('updatepage');
const updateRandom = document.getElementById('updateRandom');
const nextButton = document.getElementById('nextPage');
const sortPageButton = document.getElementById('sortPage');
const nextPage = document.querySelectorAll(".nextpage");
const lastPage = document.querySelectorAll(".previouspage");
let ingredientSpan = document.getElementsByClassName('ingredient');

//basic call for loading page
fetch(all)
  .then((resp) => resp.json())
  .then((data) => displayOverviewBeer(data));

// Update list button and next page button grouped, loads next 80 beers
nextPage.forEach(function(elem) {
  elem.addEventListener("click", function() {
    if (pageNumber === 5) {
      return;
    }
    Number(pageNumber++);
    let all = `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=80`;
    fetch(all)
      .then((resp) => resp.json())
      .then((data) => displayOverviewBeer(data));
    return pageNumber;
  });
});

// Update list button and next page button grouped, loads previous 80 beers
lastPage.forEach(function(elem) {
  elem.addEventListener("click", function() {
    if (pageNumber === 1) {
      return;
    }
    Number(pageNumber--);
    let all = `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=80`;
    fetch(all)
      .then((resp) => resp.json())
      .then((data) => displayOverviewBeer(data));
    return pageNumber;
  });
});




// Sorts the page Alphabetic.
sortPageButton.addEventListener("click", function() {

  function compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
  data.sort(compare);
});

//Use fetched data to display it in template literal
function displayOverviewBeer(data) {
  displayAllBeers.innerHTML = `
                                  ${Object.keys(data).map(key => (
                                    `<div id="cards" class="card d-inline-flex" style="width: 18rem;">
                                    <h5 class="card-title">${data[key].id}</h5>
                                      <img  class="beerImage card-img-top" src="${data[key].image_url}" alt="">
                                      <div class="card-body">
                                        <h5 class="card-title">${data[key].name}</h5>
                                        <p class="card-text">${data[key].tagline}</p>
                                        <a class="btn btn-primary" data-toggle="collapse" href="#${data[key].name}" role="button" aria-expanded="false" aria-controls="collapseExample">More info</a>
                                        <div class="collapse mt-2" id="${data[key].name}">
                                         <div class="card card-body">
                                          <ul>
                                            <li>alcohol level: ${data[key].abv}%</li>
                                            <li>tip from the brewer: ${data[key].brewers_tips}</li>
                                            <li>description: ${data[key].description}</li>
                                            <li>PH-level: ${data[key].ph}</li>
                                            <li>contributed by: ${data[key].contributed_by}</li>
                                            <li class="ingredient">malt: ${data[key].ingredients.malt[0].name} </li>
                                            <li>hops: ${data[key].ingredients.hops[0].name} </li>
                                            <li>yeast: ${data[key].ingredients.yeast} </li>
                                          </ul>
                                         </div>
                                        </div>
                                       </div>
                                      </div>`
                                  )).join(' ')}
                                  `;
};

function displayRandomBeer(data) {
  displayRandom.innerHTML = `
  ${Object.keys(data).map(key => (
                                    `<div id="cards" class="card d-inline-flex" style="width: 18rem;">
                                      <h5 class="card-title">${data[key].id}</h5>
                                      <img  class="beerImage card-img-top" src="${data[key].image_url}" alt="">
                                      <div class="card-body">
                                        <h5 class="card-title">${data[0].name}</h5>
                                        <p class="card-text">${data[0].tagline}</p>
                                        <a class="btn btn-primary" data-toggle="collapse" href="#${data[0].name}" role="button" aria-expanded="false" aria-controls="collapseExample">More info</a>
                                        <div class="collapse mt-2" id="${data[0].name}">
                                          <div class="card card-body">
                                            <ul>
                                              <li>alcohol level: ${data[0].abv}%</li>
                                              <li>tip from the brewer: ${data[0].brewers_tips}</li>
                                              <li>description: ${data[0].description}</li>
                                              <li>PH-level: ${data[0].ph}</li>
                                              <li>contributed by: ${data[0].contributed_by}</li>
                                              <li class="ingredient">malt: ${data[key].ingredients.malt[0].name} </li>
                                              <li class="ingredient">hops: ${data[key].ingredients.hops[0].name} </li>
                                              <li class="ingredient">yeast: ${data[key].ingredients.yeast} </li>

                                            </ul>
                                         </div>
                                       </div>
                                      </div>
                                     </div>`
                                      )).join(' ')}
                                      `;
};






updateRandom.addEventListener("click", function() {
  fetch(random)
    .then((resp) => resp.json())
    .then((data) => displayRandomBeer(data));
  return;
});
