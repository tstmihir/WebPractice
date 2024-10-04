function fetchApi() {
  fetch("https://fakestoreapi.com/products/1")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.title);
      //   console.log(data.length);
    })
    .catch((err) => console.log(err));
}
fetchApi();
