

const arr = [10, 20, 30, 40, 50]
let temp = 0;
for (let i = 0; i < arr.length; i++) {
    temp += arr[i]
}
// console.log(temp);


let str = "gyanendra"
let strTotal = ""
for (let i = 0; i < str.length; i++) {
    strTotal += str[i]
}
// console.log(strTotal);



let revStr = "ram"
let revStrTotal = ""
for (let i = revStr.length - 1; i >= 0; i--) {
    revStrTotal += revStr[i]
}
if (revStr === revStrTotal) {
    console.log("This is palindrome")
} else {
    console.log("This is not palindrome");
}