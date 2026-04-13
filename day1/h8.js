const students=[
    {
        name: "vinayak",   
        marks: 90
    },
    {
        name: "Ayush",
        marks: 90
    },
    {
        name: "Swayam",
        marks: 90
    },
    {
        name: "ritam",
        marks: 60
    }
]

const f = students.reduce((total,students) => {
    return total=total + students.marks
},0);
console.log(f);
