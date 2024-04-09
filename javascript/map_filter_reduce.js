let students = [
    {
        name: "Vineet",
        marks: 70
    },
    {
        name: "Rahul",
        marks: 30
    },
    {
        name: "ashok",
        marks: 40
    },
    {
        name: "pranit",
        marks: 60
    }
]

// map used to return name of all student
let name = students.map(student => student.name);

console.log('name', name);
// get student having marks greater than 60
let above60 = students.filter(student => student.marks > 60 );
console.log('above60', above60);
// get total marks greater than 60, after adding 20 to less than 60
let marks = students.map(stu => stu.marks < 60 ? stu.marks + 20 : stu.marks).filter(mark => mark >= 60).reduce((acc, curr) => acc + curr, 0);

console.log('marks', marks);
