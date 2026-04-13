const students = {
    name: "vinayak",
    grade: "A",
    subject: "javascript",  
    introduce: function(){
      console.log("Hi, I am " + this.name);
    }       



}
console.log(students.name);
console.log(students.grade);
console.log(students.subject);

students.introduce();
