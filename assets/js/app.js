//create an array containing quiz questions
//array contains objects with the correct answers and incorrect answers

let Ques = [{ Q1: [{ question: "Green is the best color?", answer: [{ correct: "yes", incorrect1: "no", incorrect2: "sometimes", incorrect3: "never" }] }] }, {
    Q2: [{ question: "Yellow is part of the alphabet?", answer: [{ correct: "no", incorrect1: "yes", incorrect2: "sometimes", incorrect3: "never" }] }]
}, {
    Q3: [{ question: "My bank account money is still there?", answer: [{ correct: "no", incorrect1: "yes", incorrect2: "sometimes", incorrect3: "never" }] }]
}, {
    Q4: [{ question: "Made you look?", answer: [{ correct: "yes", incorrect1: "no", incorrect2: "sometimes", incorrect3: "you almost got me" }] }]
}];


//create an array to contain the questions that have already been answered so that they do not appear again in the series of questions
let answeredQues = [];

//create a counter for each of the following: correct, incorrect, and timeout
let correct = 0;
let incorrect = 0;
let timeout = 0;
let gameover = false;


//create function that pulls a random question from the array
function genQuestion() {
    let qNum = Math.floor(Math.random() * 4);
    $(".display-4").text(qNum); 
    console.log(qNum);
};

genQuestion(Ques);


//create a reset functions that resets everything to its original state


//create a confirmation message that confirms whether the answer was correct or in correct.

