const sortingChoice = {
    interested: "Are you interested in sorting?",
    confirmation: "Awesome lets do some sorting",
    notInterested: "No worries. Thanks for coming",
    sorting:"What type of sorting you want?",
    bubble: "Would you like bubble sorting or insertion sorting?",
    ascendingOrder: "Awesome! Let's do some sorting in ascendingOrder on arrays",
    descendingOrder: "Awesome! Let's do some sorting in descendingOrder on arrays",
    sortedresult: "Your array is sorted"
 }



 function sortingConfirmation(){
   // 'confirm' shows a message and waits for the user to press “OK” or “CANCEL”. It returns true for OK and false for CANCEL/Esc.
   const response = confirm(sortingChoice.interested);
  // console.log(response);
   if (response) {
     // 'alert' shows a message.
     alert(sortingChoice.confirmation);
     sortType(); //
   } else {
     alert(sortingChoice.notInterested);
   }
 }


 function sortType() {
   // 'prompt' shows a message asking the user to input text. It returns the text or, if CANCEL or Esc is clicked, null.
   const response = prompt(sortingChoice.sorting);
   if (response === 'ascendingOrder'|| response === 'AscendingOrder') {
     const startOver = confirm(sortingChoice.ascendingOrder);
     alert(bubbleSort([8,1,2,3,4,5,6,7]));
   } else if (response === 'descendingOrder' || response === 'DescendingOrder') {
     let proceed = confirm(sortingChoice.descendingOrder);
     alert(bubbleSort1([8,1,2,3,4,5,6,7]));
   }
 }



 function bubbleSort(arr){
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

 let result = bubbleSort([8,1,2,3,4,5,6,7]);

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


 sortingConfirmation();