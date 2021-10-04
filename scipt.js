const changeColor = document.querySelector(".changeColor");
const btnChange = document.querySelector(".btnChange");
const h1 = document.querySelector(".h1");
const title = document.querySelector(".title");
const p = document.querySelector(".p");

const eua = document.querySelector(".eua");
const br = document.querySelector(".br");
let hexCode;
const changeColorFunc = function () {
  const hexNumbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  hexCode = "";

  for (let count = 0; count < 6; count++) {
    let randomColors = Math.floor(Math.random() * hexNumbers.length);
    hexCode += hexNumbers[randomColors];
  }
  changeColor.innerHTML = hexCode;
  document.body.style.backgroundColor = `#${hexCode}`;
  title.classList.remove("hidden");
  h1.classList.add("hidden");
};

const euaChange = function () {
  eua.classList.add("flagOn");
  eua.classList.remove("flag");
  br.classList.remove("flagOn");
  h1.innerHTML =
    "Click the button bellow to display the hex" +
    "<br />" +
    "code of the a random color";
  title.innerHTML =
    "Click the button bellow to display the hex" +
    "<br />" +
    "code of the a random color";
  p.textContent = `The hex code of the color is #`;
  btnChange.textContent = "Click Me";
};

const brChange = function () {
  eua.classList.remove("flagOn");
  eua.classList.add("flag");
  br.classList.add("flagOn");
  h1.innerHTML =
    "Clique no botão abaixo para mostrar" + "<br />" + "as cores aleatórias";
  title.innerHTML =
    "Clique no botão abaixo para mostrar" + "<br />" + "as cores aleatórias";
  p.textContent = `O hex Code da cor é #`;
  btnChange.textContent = "Clique aqui";
};

btnChange.addEventListener("click", changeColorFunc);
eua.addEventListener("click", euaChange);
br.addEventListener("click", brChange);
