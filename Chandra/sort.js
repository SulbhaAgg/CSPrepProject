// Orginal data array
let data = [];

// Random number array generator
for (let i = 0; i < 10; i++) {
  let num = Math.random() * (250 - 50) + 50;
  data.push(Math.floor(num));
}

// Drawing Function
const draw = (bar, htmlId, color) => {
  const canvas = document.querySelector(htmlId);
  const ctx = canvas.getContext("2d");
  const barWidth = 50;
  let xPos = 5,
    yPos = 0;

  ctx.save();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
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
  let start = window.performance.now();
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

  let stop = Math.round((window.performance.now() - start) * 1000);
  console.log("BUBBLE SORT count: " + counter, "time: " + stop + " μs");
  document.querySelector("#bubble-num").innerText = counter;
  document.querySelector("#bubble-time").innerText = stop + " μs";
  return copyArr;
}

function selectionSort(arr) {
  let copyArr = [...arr];
  let counter = 0;
  let start = window.performance.now();
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

  let stop = Math.round((window.performance.now() - start) * 1000);
  console.log("SELECTION SORT count: " + counter, "time: " + stop + " μs");
  document.querySelector("#selection-num").innerText = counter;
  document.querySelector("#selection-time").innerText = stop + " μs";
  return copyArr;
}

function insertionSort(arr) {
  let copyArr = [...arr];
  let counter = 0;
  let start = window.performance.now();
  for (let i = 1; i < copyArr.length; i++) {
    let current = copyArr[i];
    let j = i - 1;
    for (; j >= 0 && copyArr[j] > current; j--) {
      counter++;
      copyArr[j + 1] = copyArr[j];
    }
    copyArr[j + 1] = current;
  }
  let stop = Math.round((window.performance.now() - start) * 1000);
  console.log("INSERTION SORT count: " + counter, "time: " + stop + " μs");
  document.querySelector("#insertion-num").innerText = counter;
  document.querySelector("#insertion-time").innerText = stop + " μs";
  return copyArr;
}

// Quick Sort
function quickSort(arr) {
  let counter = 0;
  function quickSortInner(array) {
    if (array.length <= 1) return array;
    const pivot = array[array.length - 1];
    const leftArr = [];
    const rightArr = [];

    for (const el of array.slice(0, array.length - 1)) {
      el < pivot ? leftArr.push(el) : rightArr.push(el);
      counter++;
    }

    return [...quickSortInner(leftArr), pivot, ...quickSortInner(rightArr)];
  }
  let start = window.performance.now();
  let output = quickSortInner(arr);
  let stop = Math.round((window.performance.now() - start) * 1000);
  console.log("QUICK SORT count: " + counter, "time: " + stop + " μs");
  document.querySelector("#quick-num").innerText = counter;
  document.querySelector("#quick-time").innerText = stop + " μs";
  return output;
}

function mergeSort(arr) {
  let counter = 0;

  //helper function
  //leftArr and rightArr are sorted!
  const merge = (leftArr, rightArr) => {
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      const leftEl = leftArr[leftIndex];
      const rightEl = rightArr[rightIndex];

      if (leftEl < rightEl) {
        output.push(leftEl);
        leftIndex++;
      } else {
        output.push(rightEl);
        rightIndex++;
      }
      counter++;
    }
    return [
      ...output,
      ...leftArr.slice(leftIndex),
      ...rightArr.slice(rightIndex),
    ];
  };

  //recursive function
  const mergeSortInner = (array) => {
    if (array.length <= 1) return array;

    const middleIndex = Math.floor(array.length / 2);
    const leftArr = array.slice(0, middleIndex);
    const rightArr = array.slice(middleIndex);

    return merge(mergeSortInner(leftArr), mergeSortInner(rightArr));
  };
  let start = window.performance.now();
  let output = mergeSortInner(arr);
  let stop = Math.round((window.performance.now() - start) * 1000);
  console.log("MERGE SORT count: " + counter, "time: " + stop + " μs");
  document.querySelector("#merge-num").innerText = counter;
  document.querySelector("#merge-time").innerText = stop + " μs";
  return output;
}

// Display unsorted data
draw(data, "#unsorted", "green");

document.getElementById("selection-div").style.display = "none";
document.getElementById("bubble-div").style.display = "none";
document.getElementById("insertion-div").style.display = "none";
document.getElementById("quick-div").style.display = "none";
document.getElementById("merge-div").style.display = "none";

//On click, randomize numbers
function randomize() {
  data = [];
  for (let i = 0; i < 10; i++) {
    let num = Math.random() * (250 - 50) + 50;
    data.push(Math.floor(num));
  }
  draw(data, "#unsorted", "green");
  myFunction();
}

// Envoke sorting algorithms
function myFunction() {
  console.clear();
  // Excecute sorting and drawing functions
  draw(selectionSort(data), "#selection-sort", "red");
  draw(bubbleSort(data), "#bubble-sort", "blue");
  draw(insertionSort(data), "#insertion-sort", "orange");
  draw(quickSort(data), "#quick-sort", "pink");
  draw(mergeSort(data), "#merge-sort", "purple");

  // Unhide divs
  document.getElementById("selection-div").style.display = "block";
  document.getElementById("bubble-div").style.display = "block";
  document.getElementById("insertion-div").style.display = "block";
  document.getElementById("quick-div").style.display = "block";
  document.getElementById("merge-div").style.display = "block";
}
