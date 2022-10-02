// lcm = a * b/ gcd

const checkInput = (val) => {
    if (typeof val === "string") {
        val = Number.parseInt(val);
        if (isNaN(val)) {
            console.log("Given arguments are not numbers.");
            return;
        }
    }

    if (val < 0) {
        val = Math.abs(val);
    }

    return val;
}

const gcd = (a, b) => {

    let temp;

    a = checkInput(a);
    b = checkInput(b);

    if (b > a) {
        temp = b;
        b = a;
        a = temp;
    }

    while (b) {
        a = a % b;
        temp = b;
        b = a;
        a = temp;
    }

    return a;
}


// find least common multiplier
const lcm = (a, b) => {

    a = checkInput(a);
    b = checkInput(b);

    return (a * b) / gcd(a, b);
}
// test gcd
console.log(gcd('-32', '56'))
// test lcm
console.log(lcm(5, 6))