const reversedString = (str) => {
    // let strToArr = str.split("");
    // strToArr.reverse();
    // return strToArr.join('')

    let reversedStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        reversedStr+= str[i];
    }
    return reversedStr;
}
console.log(reversedString("was mach ma"));


