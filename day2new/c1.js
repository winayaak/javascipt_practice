console.log(`Array Destructuring`)
const arr=[1,2,3,4,5];
console.log(arr[2]);
const [first,second,third,fourth,fifth]=arr;
console.log(third);

console.log(`Object Destructuring`);
const student ={
    name:"vinayak",
    age:20,
    course:"javascript"

}

const {name,age,course}=student;
console.log(name,age,course);
console.log(student.age);
