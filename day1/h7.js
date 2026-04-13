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

const e = students.filter((students) => {
    return students.marks >80;

});
console.log(e);