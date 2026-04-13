const { log } = require("node:console")

const a=10
const b=0
try{
    const result=a/b
    log(result)
}
catch(error){
    console.log(error.message)
}
finally{
    console.log("finally block executed")
}