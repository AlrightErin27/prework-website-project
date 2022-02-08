const button = document.querySelector(`#button`);
let count = 0;

button.addEventListener(`click`, function (event) {
  //inserts random number into path to get fish image
  //generate random number between 0-10
  const source = `fishes/fish${Math.floor(Math.random() * 11)}.png`;
  const image = new Image();
  image.src = source;
  //all photos are now 13em tall & centered
  image.style.height = "13em";

  // console.log(document.querySelector(`img`));

  //if there is already a generated image, remove it and replace it with random fish.
  //If not, just add random fish image.
  if (document.querySelector(`img`)) {
    document.querySelector(`img`).remove();
    document.querySelector(`#fish-container`).appendChild(image);
  } else {
    document.querySelector(`#fish-container`).appendChild(image);
  }
});
