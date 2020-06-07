// Orginal data array
let data = [];

// Random number array generator
for (let i = 0; i < 10; i++) {
  let num = Math.random() * (250 - 50) + 20;
  data.push(Math.floor(num));
}
let unsortedData = [...data];

// Drawing Function
const draw = (bar, htmlId, color) => {
  const canvas = document.querySelector(htmlId);
  const ctx = canvas.getContext("2d");
  const barWidth = 50;
  let xPos = 5,
    yPos = 0;

  ctx.save();
  ctx.clearRect(0, 0, 290, 220);
  ctx.fillStyle = color;

  for (let i = 0; i < data.length; i++) {
    yPos = bar[i];
    ctx.fillRect(xPos, canvas.height - yPos, barWidth, yPos);
    xPos += barWidth + 10;
  }
  ctx.restore();
};

// Min Bubble sort
function bubbleSort(arr) {
  let copyArr = [...arr];
  let counter = 0;
  let noSwaps;
  for (let i = copyArr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (copyArr[j] > copyArr[j + 1]) {
        counter++;
        let temp = copyArr[j];
        copyArr[j] = copyArr[j + 1];
        copyArr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  console.log(counter);
  document.querySelector("#sort2").innerText = counter;
  return copyArr;
}

function selectionSort(arr) {
  let copyArr = [...arr];
  let counter = 0;
  for (let i = 0; i < copyArr.length; i++) {
    let min = i;
    for (let j = i + 1; j < copyArr.length; j++) {
      if (copyArr[j] < copyArr[min]) min = j;
    }
    if (i !== min) {
      counter++;
      let temp = copyArr[i];
      copyArr[i] = copyArr[min];
      copyArr[min] = temp;
    }
  }
  console.log(counter);
  document.querySelector("#sort1").innerText = counter;
  return copyArr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    for (; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }

  return arr;
}

draw(unsortedData, "#unsorted", "green");

document.getElementById("bubble1").style.display = "none";
document.getElementById("bubble2").style.display = "none";

// On click, Sorting Algorithm Selected
function myFunction() {
  let count = 0;
  let count2 = 0;
  draw(selectionSort(data, count), "#bubblesort1", "red");
  draw(bubbleSort(data, count2), "#bubblesort2", "blue");
  document.getElementById("bubble1").style.display = "block";
  document.getElementById("bubble2").style.display = "block";
  console.log(count);
  //Display results
 // document.querySelector("#sort1").innerText = data.join(", ");
 // document.querySelector("#sort2").innerText = data.join(", ");
}
