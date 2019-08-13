function darthVader() {
  const reqName = new XMLHttpRequest();
  reqName.addEventListener("load", printName);
  reqName.open("GET", "https://swapi.co/api/people/4");
  reqName.send();
  function printName() {
    let vaderObj = JSON.parse(this.responseText);
    let getId = document.getElementById("person4Name");
    getId.innerHTML = vaderObj.name;

    const reqHomeworld = new XMLHttpRequest();
    reqHomeworld.addEventListener("load", printHomeworld);
    reqHomeworld.open("GET", vaderObj.homeworld);
    reqHomeworld.send();
    function printHomeworld() {
      let homeworldObj = JSON.parse(this.responseText);
      let getId = document.getElementById("person4HomeWorld");
      getId.innerHTML = homeworldObj.name;
    }
  }
}
darthVader();

function hanSolo() {
  const reqName = new XMLHttpRequest();
  reqName.addEventListener("load", printName);
  reqName.open("GET", "https://swapi.co/api/people/14");
  reqName.send();
  function printName() {
    let hanObj = JSON.parse(this.responseText);
    let getId = document.getElementById("person14Name");
    getId.innerHTML = hanObj.name;

    const reqSpecies = new XMLHttpRequest();
    reqSpecies.addEventListener("load", printSpecies);
    reqSpecies.open("GET", hanObj.species);
    reqSpecies.send();
    function printSpecies() {
      let speciesObj = JSON.parse(this.responseText);
      let getId = document.getElementById("person14Species");
      getId.innerHTML = speciesObj.name;
    }
  }
}
hanSolo();

function films() {
  const reqFilms = new XMLHttpRequest();
  reqFilms.addEventListener("load", printFilms);
  reqFilms.open("GET", "https://swapi.co/api/films/");
  reqFilms.send();

  function printFilms() {
    let filmObj = JSON.parse(this.responseText);
    let getFilmList = document.getElementById("filmList");

    for (
      let movieTitles = 0;
      movieTitles < filmObj.results.length;
      movieTitles++
    ) {
      let getFilm = document.createElement("li");
      getFilm.className = "film";
      getFilmList.appendChild(getFilm);
      let titleList = document.createElement("h2");
      getFilm.appendChild(titleList);
      titleList.className = "filmTitle";
      titleList.innerHTML = filmObj.results[movieTitles].title;
      let planetList = document.createElement("h3");
      planetList.innerHTML = "Planets";
      getFilm.appendChild(planetList);
      let filmPlanets = document.createElement("ul");
      filmPlanets.className = "filmPlanets";
      getFilm.appendChild(filmPlanets);
      let getFilmPlanets = document.getElementsByClassName("filmPlanets");

      for (
        let planetsInMovie = 0;
        planetsInMovie < filmObj.results[movieTitles].planets.length;
        planetsInMovie++
      ) {
        const reqPlanets = new XMLHttpRequest();
        reqPlanets.addEventListener("load", printPlanets);
        reqPlanets.open(
          "GET",
          filmObj.results[movieTitles].planets[planetsInMovie]
        );
        reqPlanets.send();

        function printPlanets() {
          let planetObj = JSON.parse(this.responseText);
          let createPlanet = document.createElement("li");
          createPlanet.className = "planet";
          getFilmPlanets[movieTitles].appendChild(createPlanet);
          let createPlanetName = document.createElement("h4");
          createPlanetName.className = "planetName";
          createPlanet.appendChild(createPlanetName);
          createPlanetName.innerHTML = planetObj.name;
        }
      }
    }
  }
}
films();
