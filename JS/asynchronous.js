// const p = document.querySelector(".p");
// setTimeout(function () {
//   p.textContent = "My name is Mihir";
// }, 3000);
// p.style.color = "red";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const languages = Object.entries(data.languages)
//       .map(([key, value]) => value)
//       .join(", ");
//     console.log(languages);

//     const currencies = Object.entries(data.currencies)
//       .map(([key, value]) => value.name)
//       .join(", ");

//     const countryName = data.name.common;

//     const html = `
//         <article class="country">
//             <img class="country__img" src="${data.flags.svg}" />
//             <div class="country__data">
//               <h3 class="country__name">${countryName}</h3>
//               <h4 class="country__region">${data.region}</h4>
//               <p class="country__row"><span>👫</span>${(
//                 data.population / 10000000
//               ).toFixed(1)}M People</p>
//               <p class="country__row"><span>🗣️</span>${languages}</p>
//               <p class="country__row"><span>💰</span>${currencies}</p>
//             </div>
//         </article>
//   `;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData("India");
// getCountryData("Russia");
// getCountryData("USA");

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

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders ? data[0].borders[0] : null;
      console.log(data);
      if (!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response) => {
      if (!response) return;
      return response.json();
    })
    .then((data) => {
      if (data) renderCountry(data[0], "neighbour");
    });
};

getCountryData("india");
