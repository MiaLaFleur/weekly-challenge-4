var q1 = {
    question: "Commonly used data types do NOT include:",
    answerChoices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: 2

};

var q2 = {
    question: "The condition in an if/else statement is enclosed with:",
    answerChoices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: 1
};

var q3 = {
    question: "Arrays in javascript can be used to store:",
    answerChoices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: 3
};

var q4 = {
    question: "String values must be enclosed within ____ when being assigned to variables",
    answerChoices: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: 2
};

var questionTitle = document.querySelector(".question");

var answerList = document.querySelector(".answers-list");

var ansChoice1 = document.querySelector(".a1");
var ansChoice2 = document.querySelector(".a2");
var ansChoice3 = document.querySelector(".a3");
var ansChoice4 = document.querySelector(".a4");

var ansFeedBack = document.createElement("h3");

var mainDiv = document.querySelector(".main-div");

mainDiv.appendChild(ansFeedBack);

var startScreenDiv = document.querySelector(".start-screen");

var startScreen = function() {
    
    mainDiv.style.display = "none";
    startScreenDiv.style.visibility = "visible";

    var startButton = document.querySelector(".start-btn");
    startButton.addEventListener("click", question1);

}

 var question1 = function() {
     mainDiv.style.display = "initial";
     startScreenDiv.style.display = "none";

     questionTitle.textContent = q1.question;

    ansChoice1.textContent = q1.answerChoices[0];
    ansChoice2.textContent = q1.answerChoices[1];
    ansChoice3.textContent = q1.answerChoices[2];
    ansChoice4.textContent = q1.answerChoices[3];

    answerList.addEventListener("click", function(event) {
      if (!event.target.matches(".a3")) {
           ansFeedBack.textContent = "Wrong";
    }
    else {
        ansFeedBack.textContent = "Right";
    };
    
    question2();
 });

};

var question2 = function() {

    questionTitle.textContent = q2.question;

    ansChoice1.textContent = q2.answerChoices[0];
    ansChoice2.textContent = q2.answerChoices[1];
    ansChoice3.textContent = q2.answerChoices[2];
    ansChoice4.textContent = q2.answerChoices[3];

    answerList.addEventListener("click", function(event) {
        if (!event.target.matches(".a2")) {
            ansFeedBack.textContent = "Wrong";
        }
        else {
            ansFeedBack.textContent = "Right";
        }

        question3();
    });
};

var question3 = function() {
    questionTitle.textContent = q3.question;

    ansChoice1.textContent = q3.answerChoices[0];
    ansChoice2.textContent = q3.answerChoices[1];
    ansChoice3.textContent = q3.answerChoices[2];
    ansChoice4.textContent = q3.answerChoices[3];

    answerList.addEventListener("click", function(event) {
        if (!event.target.matches(".a4")) {
            ansFeedBack.textContent = "Wrong";
        }
        else {
            ansFeedBack.textContent = "Right";
        } 

        question4();
    });

};

var question4 = function() {
    questionTitle.textContent = q4.question;

    ansChoice1.textContent = q4.answerChoices[0];
    ansChoice2.textContent = q4.answerChoices[1];
    ansChoice3.textContent = q4.answerChoices[2];
    ansChoice4.textContent = q4.answerChoices[3];

    answerList.addEventListener("click", function(event) {
        if (!event.target.matches(".a3")) {
            ansFeedBack.textContent = "Wrong";
        }
        else {
            ansFeedBack.textContent = "Right";
        }
    });
};


startScreen();