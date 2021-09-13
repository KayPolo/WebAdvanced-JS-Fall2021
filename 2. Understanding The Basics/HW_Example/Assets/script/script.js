//I'm creating an array that contains the questions and answers inside my quiz

let data = [

    {
        "question": "Pick a Color!",
        "answerA": "yellow",
        "answerB": "teal"
    },

    {
        "question": "One More Time!",
        "answerA": "purple",
        "answerB": "salmon"
    }
];

console.log(data);

//This is going to be loaded first than anything else in my code
document.addEventListener("DOMContentLoaded", ()=>{

    loadQuestions();


});


//Here I'm making the declaration of the function that will be loaded
//When my code starts 
loadQuestions = ()=>{

    let questionNumber = 0;

    let questions = document.getElementsByClassName("questions");


    for (let i = 0; i < data.length; i++) {


//Using the data declarations, I'm creating elements that will 
//display my questions and answers. I'm using a for loop, 
//so I don't have to manually declare things over and over

        //This is where the question will go
        let newQuestion = document.createElement("span");
        newQuestion.className = "title";
        newQuestion.innerText = data[i].question;

        
        //Answer One 
        let optionA = document.createElement("button");
        optionA.className = "btn";
        //this ID is dynamic, and it is very important, bacause based on this ID,
        //I will define what happens when something with the ID
        //Is clicked
        optionA.id = data[i].answerA;
        optionA.innerText = data[i].answerA;

        //Answer Two 
        let optionB = document.createElement("button");
        optionB.className = "btn";
        //this ID is dynamic, and it is very important, bacause based on this ID,
        //I will define what happens when something with the ID
        //Is clicked
        optionB.id = data[i].answerB;
        optionB.innerText = data[i].answerB;

        //Adding everything to the HTML     
        questions[questionNumber].appendChild(newQuestion);
        questions[questionNumber].appendChild(optionA);
        questions[questionNumber].appendChild(optionB);
        questionNumber++;




    }


    //End of the for loop


    //REMEMBER THE ID???

    //If the ID of the clicked element is yellow,
    //all this is going to happen
    let answerYellow = document.getElementById("yellow");

    answerYellow.addEventListener("click", function() {
        console.log("YELLOW");

        let background = document.getElementById("container");
        background.style.backgroundColor = "gold";

        let questionTwo = document.getElementById("questionTwo");
        questionTwo.style.display = "block";

        let questionOne = document.getElementById("questionOne");
        questionOne.style.display = "none";

        let pickColor = document.getElementById("pickColor");
        pickColor.style.display = "block";
        pickColor.innerText = "OH YEA, I LOVE YELLOW!";



    });

    //If the ID of the clicked element is teal,
    //all this is going to happen

    let answerTeal = document.getElementById("teal");

    answerTeal.addEventListener("click", function() {

        let background = document.getElementById("container");
        background.style.backgroundColor = "teal";

        let questionTwo = document.getElementById("questionTwo");
        questionTwo.style.display = "block";

        let questionOne = document.getElementById("questionOne");
        questionOne.style.display = "none";

        let pickColor = document.getElementById("pickColor");
        pickColor.style.display = "block";
        pickColor.innerText = "I GUESS THAT YOU PREFER TEAL";

    });

    
    //If the ID of the clicked element is purple,
    //all this is going to happen

    let answerPurple = document.getElementById("purple");

    answerPurple.addEventListener("click", function() {

        let background = document.getElementById("container");
        background.style.backgroundColor = "purple";

        let questionTwo = document.getElementById("questionTwo");
        questionTwo.style.display = "none";

        let questionOne = document.getElementById("questionOne");
        questionOne.style.display = "block";

        let pickColor = document.getElementById("pickColor");
        pickColor.style.display = "block";
        pickColor.innerText = "YEA, PURPLE IS NICE";

    });

    //If the ID of the clicked element is salmon,
    //all this is going to happen

    let answerSalmon = document.getElementById("salmon");

    answerSalmon.addEventListener("click", function() {

        let background = document.getElementById("container");
        background.style.backgroundColor = "salmon";

        let questionTwo = document.getElementById("questionTwo");
        questionTwo.style.display = "none";

        let questionOne = document.getElementById("questionOne");
        questionOne.style.display = "block";

        let pickColor = document.getElementById("pickColor");
        pickColor.style.display = "block";
        pickColor.innerText = "SALMON? REALY?";

    });

}