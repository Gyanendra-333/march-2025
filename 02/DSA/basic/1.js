
let a = 10
let b = 20
let c;

c = a
a = b
b = c
// console.log(a, b)


a = a + b
b = a - b
a = a - b
// console.log(a, b)



i = 10;
i = i++ + ++i;
// console.log(i);




const ans = prompt("Enter your age");
let age = 18;


if (age <= ans) {
    console.log("you can vote")
} else {
    console.log("you can not vote")
}