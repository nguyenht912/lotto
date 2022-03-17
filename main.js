//create an array contains n numbers (n=90)
let maxNum, n;
const bag = [];
const bagOut = [];
maxNum = document.getElementById("maxNum");
maxNum.addEventListener("input", getInput);

function resetArr(arr) {
  arr.length = 0;
  arr = [];
}

function clrEl(el) {
  getEl(el).innerHTML = "";
}

function getInput() {
  // clr(document.getElementById("hand"));
  // clr(document.getElementById("poppedNum"));
  // clr(document.getElementById("remained"));
  // clr(document.getElementById("finished"));
  clrEl("hand");
  clrEl("poppedNum");
  clrEl("remained");
  clrEl("finished");

  resetArr(bag);
  resetArr(bagOut);

  n = parseInt(maxNum.value);
  console.log(n, typeof n);

  if (!isNaN(n)) {
    getEl("chosenMax").style.visibility = "visible";
    getEl("chosenMax").innerHTML = `You chose ${n} numbers!`;
    for (let i = 0; i < n; i++) {
      // bag.length = n - 1;
      bag[i] = i + 1;
    }
    console.log(bag);
    getEl("remained").innerHTML = bag.join(" , ");
  } else {
    getEl("chosenMax").style.visibility = "hidden";
    resetArr(bag);
    console.log(bag);
    // document.getElementById("remained").innerHTML = "";
    clrEl("remained");
  }
}

function shuffle() {
  if (bag.length > 0) {
    for (let i = bag.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let k = bag[i];
      bag[i] = bag[j];
      bag[j] = k;
    }
    getEl("remained").innerHTML = bag.join(" , ");
  }
  else {
    getEl("finished").style.visibility = "visible";
    getEl("finished").innerHTML = `No numbers left!`;
  }
}

function pick() {
  if (bag.length > 0) {
    let pickedNum = bag.splice(Math.floor(Math.random() * bag.length), 1);
    pickedNum = parseInt(pickedNum);
    // let pickedNum = bag.pop();
    bagOut.push(pickedNum);

    getEl("remained").innerHTML = bag.join(" , ");
    getEl("poppedNum").style.visibility = "visible";
    getEl("poppedNum").innerHTML = `You picked number ${pickedNum}!`;
    getEl("hand").innerHTML = `You have (${bagOut.join(" , ")}) in your hand!`;
  } else {
    getEl("finished").style.visibility = "visible";
    getEl("finished").innerHTML = `No numbers left!`;
  }
}

function getEl(el) {
  return document.getElementById(el);
}
