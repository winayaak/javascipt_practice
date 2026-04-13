const { log } = require("node:console");

class Emp{
    name
    id;
    salary;
    constructor(id,name){
        this.id=id;
        this.name=name
    }
    displayinfo(){
        console.log("my name is"+this.name)
    }
}
const emp1=new Emp(1,"vinayak")
emp1.displayinfo()