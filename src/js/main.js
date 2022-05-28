const app = document.querySelector("#app");

document.addEventListener("DOMContentLoaded", () => {
  console.log("please wait filter starting");
  fetchData();
});

// Api GET
const fetchData = async () => {
  await fetch("https://restcountries.com/v3.1/all", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      countries(data);
      formApp(data);
    })
    .catch(() => console.log("the API is not responding"));
};

// country mapper
const countries = (data) => {
  let elements = "";
  data.map((item, id) => {
    if (id < 12) {
      elements += `
        <article class="card">
            <img src="${item.flags.png}" alt="Cargando..." class="img-fluid" />
            <div class="card-content">
              <a  href="#open-modal${id}" class="link-country">Country:
                ${item.name.common}
              </a>
              <div id="open-modal${id}" class="modal-window">
              <div>
              <h1>Continent: ${item.continents}</h1>
              <a href="#" title="Close" class="modal-close">Close</a>
              </div>
            </div>
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
            </div>
            <div class="footer-card">
              <a href="country.html?name=${item.name.common}" class="link-card">More Details</a>
            </div>
      </article>
        `;
      app.innerHTML = elements;
    }
  });
};
