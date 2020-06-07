let counter = 0 ;

function quicksort(array)
{
    {
        if( array.length <= 1 )
        return array;
    }

    const pivot = array[array.length-1 ] ;
    const leftArr = [] ;
    const rightArr = [] ;

    for( const el of array.slice( 0 , array.length-1 ) )
    {
        el < pivot ? leftArr.push(el) : rightArr.push(el) ;
        counter++ ;
    }

  
    return[ ...quicksort(leftArr) , pivot , ...quicksort(rightArr) ] ;
  
}

//test array

const arr = [ 5643 , 63 , 123 , 1 , 234 ] ;

console.log( "Quick Sort:\n" + quicksort(arr)  + "\nNumber of swaps: " + counter ) ;
console.log( arr ) ; //to show that it does not change original array

counter = 0 ;
//helper function
//leftArr and rightArr are sorted!
const merge = (leftArr , rightArr ) => 
{
    const output = [] ;
    let leftIndex = 0 ;
    let rightIndex = 0 ; 
    
    while( leftIndex < leftArr.length && rightIndex < rightArr.length )
    {
        const leftEl = leftArr[leftIndex] ;
        const rightEl = rightArr[rightIndex] ;

        if( leftEl < rightEl )
        {
            output.push( leftEl ) ;
            leftIndex++ ;
        }
        else
        {
            output.push( rightEl) ;
            rightIndex++ ;
        }
        counter++ ;
    }
    return [ ...output , ...leftArr.slice(leftIndex) , ...rightArr.slice(rightIndex) ] ;
} ;

//recursive function
const mergeSort = array => 
{
    if( array.length <= 1 )
        return array ;

    const middleIndex = Math.floor( array.length/2 ) ;
    const leftArr = array.slice( 0 , middleIndex ) ;
    const rightArr = array.slice( middleIndex ) ;

    return merge( mergeSort( leftArr ) , mergeSort( rightArr ) ) ;
        
}

console.log( "\nMerge Sort:\n" + mergeSort(arr) + "\nNumber of swaps: " + counter ) ;
console.log( arr ) ; //to show that it does not change the original array