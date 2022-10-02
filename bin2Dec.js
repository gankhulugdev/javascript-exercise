const bin2Dec = (bin) => {
    let strBin = bin.toString();

    let length = strBin.length;
    let result = 0;

    for (let i = 0; i < length; i++) {
        if (strBin.charAt(length - 1 - i) === '1') {
            result += 2 ** (i);
        }
    }
    console.log(result)
}
bin2Dec(11100000);
