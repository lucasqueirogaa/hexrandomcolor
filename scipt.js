const changeColor = document.querySelector(".changeColor");
const btnChange = document.querySelector(".btnChange");
const h1 = document.querySelector(".h1");
const p = document.querySelector("p");
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

  let hexCode = "";

  for (let count = 0; count < 6; count++) {
    let randomColors = Math.floor(Math.random() * hexNumbers.length);
    hexCode += hexNumbers[randomColors];
  }
  changeColor.innerHTML = hexCode;
  document.body.style.backgroundColor = `#${hexCode}`;
};

btnChange.addEventListener("click", changeColorFunc);
