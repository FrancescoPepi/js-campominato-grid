const playButton = document.getElementById("play-game");
const cellContainer = document.getElementById("cell-group");

playButton.addEventListener("click", function () {
  const difficulty = document.getElementById("difficulty").value;
  const cellsTotalDifficulty = difficultySelect(difficulty);
  console.log(cellsTotalDifficulty + "prova");
  gridGenerate(cellsTotalDifficulty, cellContainer);
});

function gridGenerate(cellsTotal, cellsContainer) {
  cellsContainer.innerHTML = "";
  for (let i = 1; i <= cellsTotal; i++) {
    cellCreation(cellsTotal, i);
  }
}

function cellCreation(cellsTotal, i) {
  //   const randomNumber = Math.floor(Math.random() * 100);
  const cell = document.createElement("li");
  cell.setAttribute("data-index", i);
  cell.classList.add("cell");
  if (cellsTotal < 81) {
    cell.classList.add("lg-7");
  } else if (cellsTotal > 81) {
    cell.classList.add("lg-10");
  } else {
    cell.classList.add("lg-9");
  }
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
  let cellsTotal = 10 * 10;

  if (difficulty == 2) {
    cellsTotal = 9 * 9;
    console.log(cellsTotal);
    return cellsTotal;
  } else if (difficulty == 3) {
    cellsTotal = 7 * 7;
    console.log(cellsTotal);
    return cellsTotal;
  }
  return cellsTotal;
}
