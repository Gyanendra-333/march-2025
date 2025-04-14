

let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
}
// console.log(sum);



let arr1 = [10, 20, 30, 40];
let sum1 = 0;
for (let i = 0; i < arr1.length; i++) {
    sum1 = sum1 += arr1[i]
    // console.log(sum1)
}
// console.log(`Total:${sum1}`)


let arr2 = [4, 53, 74, 5, 3, 73, 98, 99];
let max = arr2[0];
for (let i = 1; i < arr2.length; i++) {
    if (max < arr2[i - 1]) {
        max = arr2[i - 1];
    }
}
// console.log(max)


// let arr4 = [10, 20, 39, 73, 87];
// let temp = new Array(arr4.length);
// // let j = 0;

// for (let i = arr4.length - 1; i >= 0; i--) {
//     temp[j] = arr[i];
//     j++
// }
// console.log(temp);




let arr5 = [1, 1, 0, 0, 1, 0, 1, 1]
let i = 0;
let j = 0;

while (i < arr5.length) {
    if (arr5[i] == 0) {
        let temp = arr5[i];
        arr5[i] = arr5[j];
        arr5[j] = temp;
        j++
    }
    i++
}
console.log(arr5)