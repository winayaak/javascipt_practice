function markscal(marks){
    return new Promise((resolve, reject) => {
        if(marks>40){
            resolve("pass")
        }
        else{
            reject("fail")
        }
    });
}
markscal(50).then((result) => {
    console.log(result);
    
}).catch((error) => {
    console.error(error);

});