const marks=[20,30,40,50,60];
const e = marks.map((marks) =>{
    if (marks >= 50){
        return 'A';
    }
    else if(marks >= 40){
        return 'B';
    }
    else {
        return 'C';
    }
});
console.log(e);


 const f= marks.filter((mark) => {
return mark >=40;
 });
 console.log(f);    

 const g= marks.reduce((acc,marks) => {
 return acc=  acc + marks
});
    console.log(g);

 