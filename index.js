const button = document.querySelector(`#button`);

button.addEventListener(`click`, function (event) {
  //generate random number between 0-10
  const randomNum = Math.floor(Math.random() * 11);
  //   console.log(randomNum);

  //inserts random number into path to get fish image
  const source = `fishes/fish${randomNum}.png`;
  const image = new Image();
  image.src = source;
  //all photos are now 13em tall & centered
  image.style.height = "13em";
  document.querySelector(`#fish-container`).appendChild(image);
});
