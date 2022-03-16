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

function clr(el) {
  el.innerHTML = "";
}

function getInput() {
    clr(document.getElementById("hand"));
    clr(document.getElementById("poppedNum"));
    clr(document.getElementById("remained"));
    clr(document.getElementById("finished"));

  resetArr(bag);
  resetArr(bagOut);
  n = parseInt(maxNum.value);
  console.log(n, typeof n);
  if (!isNaN(n)) {
    document.getElementById("chosenMax").style.visibility = "visible";
    document.getElementById("chosenMax").innerHTML = `You chose ${n} numbers!`;
    for (let i = 0; i < n; i++) {
      bag[i] = i + 1;
    }
    console.log(bag);
    document.getElementById("remained").innerHTML = bag.join(" , ");
  } else {
    document.getElementById("chosenMax").style.visibility = "hidden";
    resetArr(bag);
    console.log(bag);
    document.getElementById("remained").innerHTML = "";
  }
}

function shuffle() {
  for (let i = bag.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = bag[i];
    bag[i] = bag[j];
    bag[j] = k;
  }
  document.getElementById("remained").innerHTML = bag.join(" , ");
}

function pick() {
  if (bag.length > 0) {
    let pickedNum = bag.pop();
    bagOut.push(pickedNum);

    document.getElementById("remained").innerHTML = bag.join(" , ");
    document.getElementById("poppedNum").style.visibility = "visible";
    document.getElementById(
      "poppedNum"
    ).innerHTML = `You picked number ${pickedNum} !`;
    document.getElementById(
      "hand"
    ).innerHTML = `You have ( ${bagOut.join(" , ")} ) in your hand!`;
  } else {
    document.getElementById("finished").style.visibility = "visible";
    document.getElementById("finished").innerHTML = `No numbers left!`;
  }
}
