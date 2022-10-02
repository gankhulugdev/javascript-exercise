// const convertToRoman = (number) => {
//     // digits to roman
//     let roman = "";
//     if (number % 100 === 0) {
//         return 'C';
//     }

//     if (number < 0 || number > 100) {
//         return "Provide numbers between 1 and 100";

//     }

//     switch (Number.parseInt(number / 10)) {
//         case 1: roman += 'X';
//             break;
//         case 2: roman += 'XX';
//             break;
//         case 3: roman += 'XXX';
//             break;
//         case 4: roman += 'XL';
//             break;
//         case 5: roman += 'L';
//             break;
//         case 6: roman += 'LX';
//             break;
//         case 7: roman += 'LXX';
//             break;
//         case 8: roman += 'LXXX';
//             break;
//         case 9: roman += 'XC';
//             break;
//         default:
//             break;
//     }

//     switch (number % 10) {
//         case 1: roman += 'I';
//             break;
//         case 2: roman += 'II';
//             break;
//         case 3: roman += 'III';
//             break;
//         case 4: roman += 'IV';
//             break;
//         case 5: roman += 'V';
//             break;
//         case 6: roman += 'VI';
//             break;
//         case 7: roman += 'VII';
//             break;
//         case 8: roman += 'VIII';
//             break;
//         case 9: roman += 'IX';
//             break;
//     }

//     return roman;
// }

// console.log(convertToRoman(97));

// const romans = [
//     { index: 1, char: 'I' },
//     { index: 5, char: 'V' },
//     { index: 10, char: 'X' },
//     { index: 50, char: 'L' },
//     { index: 100, char: 'C' },
//     { index: 500, char: 'D' },
//     { index: 1000, char: 'M' }
// ]

// console.log(romans[0].index)

const romanConversion = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C'
}

const intToRoman = (num) => {
    if(typeof num !== 'number'){
        console.log(`${num} is not a number type`)
        return
    }

    if(num <= 0){
        console.log("Negative numbers")
        return
    }

    let romanNumber = '';
    Object.entries(romanConversion).reverse().forEach(([int, roman])=>{
        console.log(int, roman)
        int = parseInt(int);
        while(num >= int){
            romanNumber += roman;
            num-=int;
        }
    })

    console.log(romanNumber)
}

intToRoman(338)