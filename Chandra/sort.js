let data = [];

for (let i = 0; i < 10; i++) {
  let num = Math.random() * (250 - 50) + 20;
  data.push(Math.floor(num));
}
let unsortedData = [...data];
console.log(unsortedData);

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

// Max Bubble Sort
const bubbleSort1 = (arr) => {
  let swap = true;
  do {
    swap = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        const tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swap = true;
      }
    }
  } while (swap);
  return arr;
};

// Min Bubble sort
function bubbleSort2(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
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
  draw(bubbleSort1(data), "#bubblesort1", "red");
  draw(bubbleSort2(data), "#bubblesort2", "blue");
  document.getElementById("bubble1").style.display = "block";
  document.getElementById("bubble2").style.display = "block";

  //Display results
  document.querySelector("#sort1").innerText = data.join(", ");
  document.querySelector("#sort2").innerText = data.join(", ");
}
