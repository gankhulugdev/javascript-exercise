
let step = 0;

const funny = (num) => {
    let digit
    let multiple = 1;

    // digits multiplication 
    while (num) {
        digit = num % 10;
        num = Number.parseInt(num / 10);
        multiple *= digit;
    }

    
    
    //is multiplication single digit? 
    if (multiple > 9) {
        funny(multiple);
    }
    step++;

}


funny(738);
console.log(step)
