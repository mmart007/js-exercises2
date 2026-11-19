function unique(arr) {
    arr.sort();
    for(let index= arr.length-1; index>0; index--){
        if (arr[index] === arr[index-1])  {
            arr.splice(index,1);
        }
    }
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

unique(strings);

alert(strings);