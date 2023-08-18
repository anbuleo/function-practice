//give a number 'n', find the first 'n' elements of fibonacci sequence

//the first two number in fibonacci is '0' and '1'

function fibonacci(n) {
    const fib = [0, 1];
    for(let i=2;i<n;i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib
}

console.log(fibonacci(5))
//above function is work as O(n) =>time comlexity
//bcoz there is one loop = O(n)
//so bid-O=O(n)

//given a integer 'n'. find the factorial of that integer

function factorial(n) {
    let fact = 1;
    for(let i=2;i<=n;i++) {
        fact = fact * i;
    }
    return fact
}
console.log(factorial(5))//120

//the Big-O==O(n) -->bcoz there is a one for loop
//
//prime number or not

function isPrime(n) {
    if(n<2){
        return false;
    }
    for(let i=2;i<n;i++) {
        if(n%i===0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(4))

// big -O is O(n)
// here there is  a one for loop and so O(n)
