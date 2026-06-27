function meth(status){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status) {
                console.log("sucess");
                
                
            }
            else{
                console.log("error ");
                
            }
            
        }, 2000);
    });
}
meth(true).then((result) => {
    console.log(result);
    
}).catch((err) => {
    console.log(err);
    
});