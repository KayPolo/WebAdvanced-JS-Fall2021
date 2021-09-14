let data = [ 
    {
        'question':'What Day Is Today',
        'answerA': 'Tuesday',
        'answerB': 'Sunday'

    },
    {
        'question':'Are you seeing your friends',
        'answerA': 'Yes',
        'answerB': 'No'
        
    },
    {
        'question':'How is the weather',
        'answerA': 'Sunny',
        'answerB': 'Rainy'
        
    }
]



    console.log(data);


    document.addEventListener("DOMContentLoaded", ()=>{

        loadQuestions();
    })



    loadQuestions = ()=>{

        let questionNumber = 0;

        let questions = document.getElementsByClassName ("questions");

        for(let i = 0; i < data.length; i++){

                let newQuestion = document.createElement("span");
                newQuestion.className = "title";
                newQuestion.innerText = data[i].question;

                let optionA = document.createElement("button");
                optionA.className = "btn";
                optionA.id = data[i].answerA;
                optionA.innerText = data[i].answerA;


                let optionB = document.createElement("button");
                optionB.className = "btn";
                optionB.id = data[i].answerB;
                optionB.innerText = data[i].answerB;




                questions[questionNumber].appendChild(newQuestion);
                questions[questionNumber].appendChild(optionA);
                questions[questionNumber].appendChild(optionB);
                questionNumber++;


                

        }


        let answerTuesday = document.getElementById('Tuesday');
        answerTuesday.addEventListener("click", ()=>{


            let questionOne = document.getElementById('questionOne');
            questionOne.style.display = "none";

            let questionTwo = document.getElementById('questionTwo');
            questionTwo.style.display = "block";

            let questionThree = document.getElementById('questionThree');
            questionThree.style.display = "none";



        });


        let answerSunday = document.getElementById("Sunday");
        answerSunday.addEventListener('click', ()=>{
    
            let questionOne = document.getElementById('questionOne');
            questionOne.style.display = "none";
    
            let questionTwo = document.getElementById('questionTwo');
            questionTwo.style.display = "none";
    
            let questionThree = document.getElementById('questionThree');
            questionThree.style.display = "block";
    
                
        });


    }



   





