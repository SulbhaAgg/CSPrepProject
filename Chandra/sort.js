let data = [];
let anotherData = [];

  for (let i = 0; i < 10; i++) {
    let num = Math.random() * (200 - 50) + 50;
    data.push(Math.floor(num));
    anotherData.push(Math.floor(num));
  }

  const draw = bar => {
    const canvas = document.querySelector("#bubblesort1");
    const ctx = canvas.getContext("2d");
    const barWidth = 50;
    let xPos = 0,
      yPos = 0;

    ctx.save();
    ctx.clearRect(0, 0, 290, 220);
    ctx.fillStyle = "red";

    for (let i = 0; i < data.length; i++) {
      yPos = bar[i];
      ctx.fillRect(xPos, canvas.height - yPos, barWidth, yPos);
      xPos += barWidth + 10;
    }
    ctx.restore();
  };


  const draw1 = bar => {
    const canvas = document.querySelector("#bubblesort2");
    const ctx = canvas.getContext("2d");
    const barWidth = 50;
    let xPos = 0,
      yPos = 0;

    ctx.save();
    ctx.clearRect(0, 0, 290, 220);
    ctx.fillStyle = "blue";

    for (let i = 0; i < anotherData.length; i++) {
      yPos = bar[i];
      ctx.fillRect(xPos, canvas.height - yPos, barWidth, yPos);
      xPos += barWidth + 10;
    }
    ctx.restore();
  };

  const bubbleSort1 = nums => {
    let swap = true;
    do {
      swap = false;
        for (let i = 0; i < nums.length; i++) {
          if (nums[i] < nums[i + 1]) {
            const tmp = nums[i];
            nums[i] = nums[i + 1];
            nums[i + 1] = tmp;
            swap = true;
          }
        }
    } while (swap);
    return nums;
  };

function bubbleSort2(arr){
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
      noSwaps = true;
      for(let j = 0; j < i - 1; j++){
        if(arr[j] > arr[j+1]){
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          noSwaps = false;
        }
      }
      if(noSwaps) break;
    }
    return arr;
  }
draw(bubbleSort1(data));
draw1(bubbleSort2(anotherData));

document.querySelector("span").innerText = data.join(", ");
document.querySelector("#sort2").innerText = anotherData.join(", ");
