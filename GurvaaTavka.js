const funFunction = (numbers) =>{

   

    for(let i = 1; i <= numbers; i++){
        if(i % 3 === 0) {
            console.log("Gurvaa");
        }else if(i % 5=== 0){
            console.log("Tavka");
        }else{
            console.log(i);
        }
    }
}

funFunction(11);