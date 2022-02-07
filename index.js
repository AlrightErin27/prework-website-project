const button = document.querySelector(`#button`);

button.addEventListener(`click`, function (event) {
  //   console.log(`Button Clicked`);
  //generate random number between 0-10
  const randomNum = Math.floor(Math.random() * 11);
  console.log(randomNum);

  const source = `fishes/fish${randomNum}.png`;
  //   const fishContainer = document.querySelector(`#fish-container`);
  const image = new Image();

  image.src = source;
  document.querySelector(`#fish-container`).appendChild(image);
});
