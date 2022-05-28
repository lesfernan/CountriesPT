const country = document.querySelector("#country");
query = new URLSearchParams(window.location.search);
const params = query.get("name");

document.addEventListener("DOMContentLoaded", () => {
  console.log("please wait filter starting");
  fetchData();
});

// Api GET
const fetchData = async () => {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) =>
      countries(data.filter((item) => item.name.common === params))
    )
    .catch(() => console.log("the API is not responding"));
};

// country mapper
const countries = (data) => {
  let elements = "";
  data.map((item) => {
    elements += `
          <article class="card">
        <img src="${item.flags.png}" alt="Cargando" class="img-fluid" />
        <div class="card-content">
          <h2>Pais:
          ${item.name.common}
          </h2>
          <div>
            <b>Capital: ${item.capital} </b>
          </div>
          <div>
            <b>Región:
             ${item.region}
            </b>
          </div>
            <div>
            <b>Sub-Región:
            ${item.subregion}
            </b>
          </div>  
            <div>
            <b>Independent:
            ${item.independent}
            </b>
          </div>  
            <div>
            <b>Population:
            ${item.population}
            </b>
          </div>  
            <div>
            <b>Continent:
            ${item.continents}
            </b>
          </div>  
          
        </div>
      </article>
        `;
    country.innerHTML = elements;
  });
};
