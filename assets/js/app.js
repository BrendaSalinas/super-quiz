//all the questions with the answers using a variable with an array and 5 objects 
var questions = [
    
    {question: "Inside which HTML element do we put the JavaScript", 
    choices: ["< javascript >", "< scripting >", "< script >", "< js >"],
    answer: 2
    },

    {question: "Which of the following is the correct syntax to print a page using JavaScript?", 
    choices: ["window.print();", "browser.print();", "navigator.print();", "document.print();"],
    answer: 0
    },

    {question: "Which of the following function of String object returns the calling string value converted to upper case?", 
    choices: ["toLocaleUpperCase()", "toUpperCase()", "toString()", "substring()"],
    answer: 1
    },

    {question: "The correct sequence of HTML tags for starting a webpage is ", 
    choices: ["Head, Title, HTML, body", "HTML, Body, Title, Head", "HTML, Head, Body, Div", "HTML, Head, Title, Body"],
    answer: 3
    },

    {question: "Which of the following is the correct syntax to select all paragraph elements in a div element?", 
    choices: ["p", "div p", "div#p", "div~p"],
    answer: 1
    },

    {question: "Which of the following tag is used to define options in a drop-down selection list?", 
    choices: ["< select >", "< list >", "< option >", "< dropdown >"],
    answer: 2
    }
];

//click the button "START and go the next window"
var questionIndex = 0;
function handleClick() {
    time = 60; 
    document.getElementById('main').style.display = 'none';
    document.getElementById('qDiv').style.display = 'block';
    populateQuestions(questionIndex);
};


function nextQuestion() {
    document.getElementById('question_1').style.display = 'none';
}

document.getElementById('start').addEventListener('click',handleClick);

function populateQuestions(index){

    var text1 = document.querySelector("#text");
    var options = document.querySelector(".option");
    
    text1.innerHTML=questions[index].question

    var listEl = document.createElement('ul');


    options.append(listEl);


    for (let i = 0; i < questions[index].choices.length; i++) {
        var listTag = document.createElement('li');
        var buttonEl = document.createElement('button');

        buttonEl.innerHTML=questions[index].choices[i]

        buttonEl.classList.add("choices");

        listTag.append(buttonEl);
        listEl.append(listTag);

        if (i === questions[index].answer) {
            buttonEl.classList.add("correct");
        }else {

        }

    };

    var choices1 = [...document.querySelectorAll(".choices")];




    for (let i = 0; i < choices1.length; i++) {

        choices1[i].addEventListener('click', function(event){
            if (this.classList.contains('correct')){  
                this.classList.add('correct-choice');


            }else{
                this.classList.add('incorrect-choice')};
        });
       
    }

    questionIndex++;

    
};



//clear the questions re-do it and add the timer. keep track the score. 

