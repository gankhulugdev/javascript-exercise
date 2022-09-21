const bin2Dec = (bin) => {
    let strBin= bin.toString();

    let length = strBin.length;
    let result = 0;
    let i = 0;
    console.log(length)

    while(length - i > 0){
        if(strBin.endsWith('1')){
            result += 1 * 2**i;
            strBin.substr(0, strBin.length - 1);
            console.log(strBin);

        }

        console.log(i);
        i++;
    }




    console.log(result)
}

bin2Dec(1011);