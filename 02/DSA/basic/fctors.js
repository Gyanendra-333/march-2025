

let n = 10
for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
        // console.log(i);
    }
}



let p = 16;
let isPrime = true;
for (let i = 2; i <= p / 2; i++) {
    if (p % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime);