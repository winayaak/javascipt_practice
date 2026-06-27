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
payment(true).then((result) =>{
console.log(result)
}).catch((error) =>{
    console.log(error);
    
});
async function order(status) {
    try {
        const result=await payment(100);
        if (result) {
            console.log(result)
            
        }
    } catch (error) {
        console.log(error)
    }
    
}
order();
