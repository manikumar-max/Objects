// creating the Nested Objects

let fullStackExpertsAcademy = {
    Batch58 : {
        studentDetails1 : {
            name : "mani",
            passedOut : 2026,
            courseDetails : {
                whichCourse : "python fsd",
                languages : {
                    frontEnd : {
                        frontEndLanguages : "Html , css , Java script",
                        frontEndFrameWorks : "Bootstrap , Taiwind css ,REAct, Vue , Angular",
                    },
                    backEnd : {
                        backEndLanguages : "python , Java",
                        backEndFrameWorks : "Django , spring , spring Boot"
                    },
                    dataBase : "mongoDB , SQL , Postgress SQL"
                }
            }
        },
        studentDetails2 : {
            name : "Kumar",
            passedOut : 2025,
            courseDetails : {
                whichCourse : "Java fsd",
                languages : {
                    frontEnd : {
                        frontEndLanguages : "Html , css , Java script",
                        frontEndFrameWorks : "Bootstrap , Taiwind css ,REAct, Vue , Angular",
                    },
                    backEnd : {
                        backEndLanguages : "Java , Node.js",
                        backEndFrameWorks : "Express.js , spring , spring Boot"
                    },
                    dataBase : "mongoDB , SQL , Postgress SQL"
                }
            }
        },
        studentDetails3 : {
            name : "prudhvi",
            passedOut : 2022,
            courseDetails : {
                whichCourse : "MERN fsd",
                languages : {
                    frontEnd : {
                        frontEndLanguages : "Html , css , Java script",
                        frontEndFrameWorks : "Bootstrap , Taiwind css ,REAct, Vue , Angular",
                    },
                    backEnd : {
                        backEndLanguages : "python , Node.js",
                        backEndFrameWorks : "express.js , spring , spring Boot"
                    },
                    dataBase : "mongoDB , SQL , Postgress SQL"
                }
            }
        }

    }
}

// Retrieving (or) Reading (or) Accessing the key, value pairs

// console.log(fullStackExpertsAcademy)
// console.log(fullStackExpertsAcademy.Batch58)
// console.log(fullStackExpertsAcademy.Batch58.studentDetails1)
// console.log(fullStackExpertsAcademy.Batch58.studentDetails2)
// console.log(fullStackExpertsAcademy.Batch58.studentDetails3)
// console.log(fullStackExpertsAcademy.Batch58.studentDetails1.name)
// console.log(fullStackExpertsAcademy.Batch58.studentDetails1.courseDetails)
// console.log(fullStackExpertsAcademy.Batch58.studentDetails1.courseDetails.languages)
// console.log(fullStackExpertsAcademy.Batch58.studentDetails1.courseDetails.languages.backEnd)
// console.log(fullStackExpertsAcademy.Batch58.studentDetails1.courseDetails.languages.backEnd.backEndFrameWorks)


// updating or adding new key,value pairs to the nestrd objects

console.log("before adding or updating any values to nested objects",fullStackExpertsAcademy);
fullStackExpertsAcademy.Batch58.studentDetails4 = {name : "Ravi",
            passedOut : 2020,
            courseDetails : {
                whichCourse : "MEAN fsd",
                languages : {
                    frontEnd : {
                        frontEndLanguages : "Html , css , Java script",
                        frontEndFrameWorks : "Bootstrap , Taiwind css ,Angular, Vue , Angular",
                    },
                    backEnd : {
                        backEndLanguages : "java , Node.js",
                        backEndFrameWorks : "express.js , spring , spring Boot"
                    },
                    dataBase : "mongoDB , SQL , Postgress SQL"
                }
            }
        }


// fullStackExpertsAcademy.Batch58.studentDetails4.name = "ravi kumar"
// fullStackExpertsAcademy.Batch58.studentDetails4.courseDetails.languages.frontEnd.frontEndFrameWorks = "so this the updated new frameworks 'angular, bootstrap,tailwind css'"

// console.log(fullStackExpertsAcademy.Batch58.studentDetails4.courseDetails.languages.frontEnd.frontEndFrameWorks)
console.log("after adding and updating new key,value pairs to the nested objects" , fullStackExpertsAcademy)

// deleting the key,value pairs of the nested objects
console.log("before deleting" ,fullStackExpertsAcademy.Batch58.studentDetails4.courseDetails.languages)
delete fullStackExpertsAcademy.Batch58.studentDetails4.courseDetails.languages.frontEnd.frontEndFrameWorks
console.log("after deleting" ,fullStackExpertsAcademy.Batch58.studentDetails4.courseDetails.languages)

delete fullStackExpertsAcademy.Batch58.studentDetails4
console.log("after deleting the last student" , fullStackExpertsAcademy)
