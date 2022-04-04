class Card {
  constructor(row, column) {
    this.row = row;
    this.column = column;
  }

  generateGrid(grid) {
    this.totalCells = parseInt(this.row) * parseInt(this.column);
    this.grid = grid;
    for (let i = 0; i < this.totalCells; i++) {
      this.grid.innerHTML += `<div class="cell"> ${i + 1} </div>`;
    }
  }
}

const card = new Card(9, 9);
const grids = document.querySelectorAll(".grid");
grids.forEach((g) => {
  card.generateGrid(g);
});
///////////////////////////////////////////

class Bag {
  constructor(totalNumbers) {
    this.totalNumbers = totalNumbers;
    this.generateBag(this.totalNumbers);
    this.shuffleBag(this.numbersInBag);
  }

  generateBag(totalNumbers) {
    this.numbersInBag = new Array(this.totalNumbers);
    for (let i = 0; i < totalNumbers; i++) {
      this.numbersInBag[i] = i + 1;
    }
  }

  shuffleBag(numbersInBag) {
    if (this.numbersInBag.length === 0) return;
    for (let i = this.numbersInBag.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let k = this.numbersInBag[i];
      this.numbersInBag[i] = this.numbersInBag[j];
      this.numbersInBag[j] = k;
    }
  }
}

const bag = new Bag(90);

/// Test ///
document.querySelector(".output").textContent = bag.numbersInBag;
