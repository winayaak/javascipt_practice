function payment(status){
    return new Promise((resolve, reject) => {
        if (status) {
            resolve("succesfull...")
        }
        else{
            reject("error occured")
        }
    });
}
payment(false).then((result) =>{
console.log(result)
}).catch((error) =>{
    console.log(error);
    
});