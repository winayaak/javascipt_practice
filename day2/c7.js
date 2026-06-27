function meth(){
    console.log("hello");
}

function meth1(){
    meth();
}
function meth2(){
    try{
        meth1();
    }
    catch(e){
        console.log("error");
}
}
meth2();