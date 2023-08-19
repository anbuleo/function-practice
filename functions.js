//give a number 'n', find the first 'n' elements of fibonacci sequence

//the first two number in fibonacci is '0' and '1'

// function fibonacci(n) {
//     const fib = [0, 1];
//     for(let i=2;i<n;i++) {
//         fib[i] = fib[i-1] + fib[i-2];
//     }

//     return fib
// }

// console.log(fibonacci(7))
//above function is work as O(n) =>time comlexity
//bcoz there is one loop = O(n)
//so bid-O=O(n)

//same with recursion method index value of fiboncci

// function fibnocirecursion(n){
//     if(n<2){
//         return n;
//     }
//     return fibnocirecursion(n-1) + fibnocirecursion(n-2);
// }
// console.log(fibnocirecursion(7))
//here big-O is O(2^n)  bcoz of irritation 2^n



//given a integer 'n'. find the factorial of that integer

// function factorial(n) {
//     let fact = 1;
//     for(let i=2;i<=n;i++) {
//         fact = fact * i;
//     }
//     return fact
// }
// console.log(factorial(5))//120

//the Big-O==O(n) -->bcoz there is a one for loop
//recursion methed of factorial 

// function factoiralRecursion(n){
//     if(n<2){
//         return n
//     }
//     return factoiralRecursion(n-1)*n
// }
// console.log(factoiralRecursion(5))
// //big-O is O(n)


//prime number or not

// function isPrime(n) {
//     if(n<2){
//         return false;
//     }
//     for(let i=2;i<n;i++) {
//         if(n%i===0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(4))

// big -O is O(n)
// here there is  a one for loop and so O(n)


//power of two problem
//given a positive integer 'n', determine if the nuumber is a power of 2 or not
//an integer is a power of two if there existd an inteher 'x' such that 'n'===2^x

// function isSqure(n){
//     let N=Math.ceil(n/2);
//     for(let i=0;i<=N;i++){
//         if(n===Math.pow(2,i)){
//             return true;
//         }        
//     }
//     return false;   
// }
// console.log(isSqure(1));
// console.log(isSqure(2));
// console.log(isSqure(5));
// console.log(isSqure(6));
// console.log(isSqure(9));
// console.log(isSqure(8))
// console.log(Math.pow(2,3))

//big-O is O(n/2)so O(logn)

//search algorithms
//=>Linear search
//=>Binary search
//=>Recrsive binary search

// Given an array of 'n', elements and a target element 
//'t', find the index of 't', in the array ,
//return -1 if the target is not found

let arr = [-5, 2, 10, 4, 6];
function indexTarget(n){
    return arr.indexOf(n)
}
console.log(indexTarget(10));//2
console.log(indexTarget(6));// 4
console.log(indexTarget(20));//-1
//the big-O is O(1) const time complex

//function for loop 

function linearSearch(arr,target) {
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }return -1;
}
console.log(linearSearch([-5, 2, 10, 4, 6],10));//2
console.log(linearSearch([-5, 2, 10, 4, 6],6));//4
console.log(linearSearch([-5, 2, 10, 4, 6],20));//-1

// the big-O is O(n) bcoz here one for loop
