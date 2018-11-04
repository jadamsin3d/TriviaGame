//create an array containing quiz questions
//array contains objects with the correct answers and incorrect answers

let Ques = [{
    question: "Green is the best color?",
    choice: {
        a: "A. yes",
        b: "B. no",
        c: "C. sometimes",
        d: "D. never"
    },
    gif: "<img src='assets/art/gif1.gif'>",
    correct: "A. yes"
},
{
    question: "Yellow is part of the alphabet?",
    choice: {
        a: "A. no",
        b: "B. yes",
        c: "C. sometimes",
        d: "D. never"
    },
    gif: "<img src= 'assets/art/gif2.gif'>",
    correct: "C. sometimes"
},
{
    question: "My bank account money is still there?",
    choice: {
        a: "A. no",
        b: "B. yes",
        c: "C. sometimes",
        d: "D. never"
    },
    gif: "<img src='assets/art/gif3.gif'>",
    correct: "D. never"
},
{
    question: "Made you look?",
    choice: {
        a: "A. yes",
        b: "B. no",
        c: "C. sometimes",
        d: "D. you almost got me"
    },
    gif: "<img src='assets/art/gif4.gif'>",
    correct: "D. you almost got me"
}
];


//create an array to contain the questions that have already been answered so that they do not appear again in the series of questions
let answeredQues = [];

//create a counter for each of the following: correct, incorrect, and timeout
let correct = 0;
let incorrect = 0;
let timeout = 0;
let gameover = false;
let timer = 15;
let interval = setInterval(qTimer, 1000);
let qNum;
let resetbtn;

function qTimer() {
    timer--;
    $(".timerdiv").html("Time remaining: " + timer);
    if(timer == 0) {
        $(".answerbox").html("<p>" + 'You ran out of time!' + "</p>");
        timeout++;;
        timer = 4;
        answeredQues.push(Ques[qNum]);
        Ques.splice(qNum, 1);
        if(answeredQues.length == 4) {
            resetbtn = document.createElement('button');
            resetbtn.setAttribute("class", "resetButton");
            resetbtn.innerHTML = "Reset";
            $(".correctcounter").html(resetbtn);
            clearInterval(interval);
            $(".questionbox").text("You got " + correct + " correct. Good Job!");
            $(".answerbox").text("You also got " + incorrect + " incorrect. Still... Good Job!");

            $(".incorrectcounter").text("");
            $(".timeoutcounter").text("");
        }
        $(".timeoutcounter").html("<p>" + 'Timeouts: ' + timeout + "</p>")
        setTimeout(genQuestion, 3000);
        
    }
}

$(resetbtn).on("click", function () {
    setTimeout(location.reload(true), t);
});


//create function that pulls a random question from the array
function genQuestion() {
    timer = 15;
    qTimer();
    qNum = Math.floor(Math.random() * Ques.length);
    $(".questionbox").text(Ques[qNum].question);
    let btnA = document.createElement('button');
    let btnB = document.createElement('button');
    let btnC = document.createElement('button');
    let btnD = document.createElement('button');
    btnA.setAttribute("class", "mcButton");
    btnB.setAttribute("class", "mcButton");
    btnC.setAttribute("class", "mcButton");
    btnD.setAttribute("class", "mcButton");
    btnA.innerHTML = Ques[qNum].choice.a;
    btnB.innerHTML = Ques[qNum].choice.b;
    btnC.innerHTML = Ques[qNum].choice.c;
    btnD.innerHTML = Ques[qNum].choice.d;
    $(".answerbox").html(btnA);
    $(".answerbox").append(btnB);
    $(".answerbox").append(btnC);
    $(".answerbox").append(btnD);
    $(".correctcounter").html("<p>" + 'Correct: ' + correct + "</p>");
    $(".incorrectcounter").html("<p>" + 'Incorrect: ' + incorrect + "</p>");
    
    $(".mcButton").on("click", function () {
        if(this.innerHTML == Ques[qNum].correct) {
            $(".answerbox").html("<p>" + 'Correct!' + "</p>");
            $(".questionbox").html(Ques[qNum].gif);
            correct++;
            clearInterval(interval);
            answeredQues.push(Ques[qNum]);
            Ques.splice(qNum, 1);
            if(answeredQues.length == 4) {
                clearInterval(interval);
                $(".questionbox").text("You got " + correct + " correct. Good Job!");
                $(".answerbox").text("You also got " + incorrect + " incorrect. Still... Good Job!");
                $(".correctcounter").text("");
                $(".incorrectcounter").text("");
                $(".timeoutcounter").text("");
            }
            setTimeout(genQuestion, 3000);
            }
        else {
            $(".answerbox").html("<p>" + 'You were almost correct!' + "</p>");
            $(".questionbox").html(Ques[qNum].gif);
            incorrect++;
            clearInterval(interval);
            answeredQues.push(Ques[qNum]);
            Ques.splice(qNum, 1);
            if(answeredQues.length == 4) {
                clearInterval(interval);
                $(".questionbox").text("You got " + correct + " correct. Good Job!");
                $(".answerbox").text("You also got " + incorrect + " incorrect. Still... Good Job!");
                $(".correctcounter").text("");
                $(".incorrectcounter").text("");
                $(".timeoutcounter").text("");
            }
            setTimeout(genQuestion, 3000);
            
        }
    });

};

if(answeredQues.length == 4) {
    clearInterval(interval);
    $(".questionbox").text("You got " + correct + " correct. Good Job!");
    $(".answerbox").text("You also got " + incorrect + "incorrect. Still... Good Job!");
    $(".correctcounter").text("");
    $(".incorrectcounter").text("");
    $(".timeoutcounter").text("");
}
    genQuestion(Ques);



//create a reset functions that resets everything to its original state


//create a confirmation message that confirms whether the answer was correct or in correct.
