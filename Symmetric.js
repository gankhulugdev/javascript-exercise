const findSymetric = (arr1, arr2) => {
    const result = arr1.concat(arr2);
    
    console.log(result);
    const res = result.filter((num, i) => {
        if(arr1.includes(num) && arr2.includes(num)){
            return;
        }
        return num;
    })

    return res;

}

const newarr = findSymetric([1,1,3], [2,3,3,5]);

console.log(newarr);