const classA = [{
        name: "Karoline",
        grade: 10
    },
    {
        name: "Katherine",
        grade: 10
    },
    {
        name: "Evelise",
        grade: 10
    }
]
const classB = [{
        name: "Janaina",
        grade: 8
    },
    {
        name: "Izabella",
        grade: 10
    },
    {
        name: "Danielle",
        grade: 7.5
    },
    {
        name: "Chiquin",
        grade: 3
    }
]

function calculateAverage(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }
    const average = sum / students.length

    return average
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(` ${turma} average: ${average}. Congrats`)
    } else {
        console.log(` ${turma} average: ${average}. Is not good.`)
    }
}

function markAsFlunked(student) {
    student.flunked = false;
    if (student.grade < 5) {
        student.flunked = true;
    }
}
//console.table(students)

//markAsFlunked(classA)
//markAsFlunked(classB)

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} is flunked!`)
    }
}

function studentsReprovados(students) {
    for (let student of students) {
        markAsFlunked(student);
        sendFlunkedMessage(student)
    }
}
const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

studentsReprovados(classA)
studentsReprovados(classB)