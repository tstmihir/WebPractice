const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

let currentImg;

const loadNPause = async function () {
  try {
    let img = await createImage("/img-1.jpg");
    console.log("Image 1 loaded");
    await wait(2);
    img.style.display = "none";

    img = await createImage("/img-2.jpg");
    console.log("Image 2 loaded");
    await wait(2);
    img.style.display = "none";
  } catch (err) {
    console.error(err);
  }
};
loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach((img) => img.classList.add("parallel"));
  } catch (err) {
    console.error(err);
  }
};
loadAll(["/img-1.jpg", "/img-2.jpg", "/img-3.jpg"]);

// Old method
// createImage("/img-1.jpg")
//   .then((img) => {
//     currentImg = img;
//     console.log("Image 1 Loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//     return createImage("/img-2.jpg");
//   })
//   .then(() => {
//     currentImg = img;
//     console.log("Image 2 loaded");
//     wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//   })
//   .catch((err) => console.error(err));
