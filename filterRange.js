function filterRange(arr, a, b) {
    const newArr = arr.filter((num)=> {
        return num > a && num <= b}
    )
    return newArr;
}

let arr = [5, 5, 9, 2, 1];
let min = 2;
let jsMax = 6;


alert(`The array ${arr} becomes ${filterRange(arr,min,jsMax)} 
    after applying your criteria that items must be greater than ${min}
    and less than or equal to ${jsMax}.`)
