const students =[ 10,20,30,40,50,60,70,80,90,100,45,79,99];
const e  = students.map((students) => {
    return students*2;
});
console.log(e);

const f = students.filter((students) => {
    
        return students %2 !==0;

    
}
);
console.log(f);

const g= students.reduce((total,students) => {
    return total=total + students;
});
console.log(g);