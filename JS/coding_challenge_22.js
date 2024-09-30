// API Key: 106934239566026e15921057x125568
// URL: 'https://geocode.xyz/51.50354,-0.12768?geoit=xml&auth=your_api_key'
// URL2: `https://restcountries.com/v3.1/name/${country}`
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} million people</p>
        <p class="country__row"><span>🗣️</span>${Object.values(
          data.languages
        ).join(", ")}</p>
        <p class="country__row"><span>💰</span>${Object.values(data.currencies)
          .map((currency) => currency.name)
          .join(", ")}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=106934239566026e15921057x125568`
  )
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })

    .then((response) => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err.message}`));
};
whereAmI(52.508, 13.381);
