const playButton = document.getElementById("play-game");
const cellContainer = document.getElementById("cell-group");
const difficulty = document.getElementById("difficulty").value;
// let difficultyValue = difficulty.options;
console.log(typeof difficulty);
// let cellsTotal = 10 * 10;

playButton.addEventListener("click", function () {
  let cellsTotalDifficulty = difficultySelect(difficulty);
  console.log(cellsTotalDifficulty + "prova");
  gridGenerate(cellsTotalDifficulty, cellContainer);
});

function gridGenerate(cellsTotal, cellsContainer) {
  cellsContainer.innerHTML = "";
  for (let i = 1; i <= cellsTotal; i++) {
    cellCreation(cellsContainer, i);
  }
}

function cellCreation(cellsContainer, i) {
  //   const randomNumber = Math.floor(Math.random() * 100);
  const cell = document.createElement("li");
  cell.setAttribute("data-index", i);
  cell.classList.add("cell");
  cell.classList.add("lg-10");
  cell.addEventListener("click", function () {
    if (cell.innerText == "") {
      const index = parseInt(this.getAttribute("data-index"));
      this.innerText = index;
      this.classList.toggle("cell-active");
      console.log(this.innerHTML);
    } else {
      this.innerText = "";
      this.classList.toggle("cell-active");
    }
  });
  //   cell.innerText = randomNumber;
  cellContainer.appendChild(cell);
}

function difficultySelect(difficulty) {
  let cellsTotal;

  if (difficulty == "2") {
    cellsTotal = 9 * 9;
    console.log(cellsTotal);
  } else if (difficulty == "3") {
    cellsTotal = 7 * 7;
    console.log(cellsTotal);
  } else {
    cellsTotal = 10 * 10;
  }
  //   console.log(cellsTotal);
  return cellsTotal;
}
