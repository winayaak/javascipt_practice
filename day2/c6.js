function method1(){
    const a=3.144;
    console.log(a);
    a=5.67888;
    console.log(a);
}
try{
    method1();
}
catch(e){
    console.log(e.message + " " + e.name);
}
finally{
    console.log("this is finally block");
}