

let arr = [1, 2, 3, 4, 5];
let lastShift = arr[0];

for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]
}
arr[arr.length - 1] = lastShift;
console.log(arr);



// Rotate Right 

let arr1 = [1, 2, 3, 4, 5]
let copy = arr1[arr1.length - 1]

for (let i = arr1.length - 1; i > 0; i--) {
    arr1[i] = arr1[i - 1]
}
arr1[0] = copy
console.log(arr1);