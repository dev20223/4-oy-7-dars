// 1 masala
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const counter = (num => num % 2).length;
// console.log(counter);

//  2 masala
// let arrayNumbers = [10, 21, 42, 64]
// function arrayNumbersFunction(arg) {
//     let sum = 1;
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] % 3 == 0 && arg[i] % 7 == 0) {
//             sum = sum * arg[i];
//         }
//     }
//     return sum;
// }
// console.log(arrayNumbersFunction(arrayNumbers));


//  3 masala

// let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArrayNumbers = [];
// function addArraynumbers(arg) {
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] % 2 == 1) {
//             newArrayNumbers.push(arg[i]);
//         }
//     }
//     return newArrayNumbers;
// }
// console.log(addArraynumbers(arrayNumbers));



//  4 masala

// let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = [];

// function addArraynumbers(arg) {
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] % 2 == 0) {
//             newArray.push(arg[i]);
//         }
//     }
//     return newArray;
// }
// console.log(addArraynumbers(arrayNumbers));

//  5 masala 

// let wordArray = ["Moon", "Euro", "Rolsroys", "Sedan"];
// let newWordArray = [];
// function newWordFunction(arg) {
//     for(let i = 0; i < arg.length; i++){
//         newWordArray.push(arg[i].charAt(0))
//     }
//     return newWordArray
// }
// console.log(newWordFunction(wordArray));



//  6 masala 

// let numbersArray = [1, 2, 3, 5, 5, 6, 7, 8, 9, 11, 13, 17, 19]

// function tubNumbers(arg){
//     let counter = 0;
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] % 2 == 1) {
//             counter++
//             if (counter == 2) {
//                 return arg[i]
//             }        
//         }

//     }
// }
// console.log(tubNumbers(numbersArray));



//  7 masala
// let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 25]
// let newArray = []

function newArrayNumbers(arg) {
    for (let i = 0; i < arg.length; i++) {  
        if (arg[i] % 2 == 0 && arg[i] % 5 == 0) {
            newArray.push(arg[i])
        }
    }
    return newArray
}
console.log(newArrayNumbers(arrayNumbers));