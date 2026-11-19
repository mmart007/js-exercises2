function filterInPlace(arr, a, b) {
    for(let index=arr.length - 1; index>=0; index--){
        if (arr[index] < a || arr[index] > b)  {
            arr.splice(index,1);
        }
    }
}

let arr = [1,2,5,6,9]
filterInPlace(arr,2,6);
console.log(arr);