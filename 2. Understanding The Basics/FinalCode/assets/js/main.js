
//1. Comment Everything!!! 
// I should comment everything - it's a good practice var myVariable; 
//I can comment pretty much anywhere. 
/* Let's think in plane English what do I want to 
    •	Step 1 - Describe what do you want to do
    •	Step 2 - Describe what do you want to do
    •	Step 3 - Describe what do you want to do
    •	Step 4 - Describe what do you want to do
// /*


2. Difference between null and undefined

// document.write(varName); // what is this value?
// var varName = null;


// var varName = null;
// document.write(varName); // what is this value?

var varName = 0/0;
document.write(varName); // what is this value?



// There are several ways in which NaN can happen:
// Division of zero by zero
// Dividing an infinity by an infinity
// Multiplication of an infinity by a zero
// Any operation in which NaN is an operand
// Converting a non-numeric string or undefined into a number


https://javascriptrefined.io/nan-and-typeof-36cd6e2a4e43



3. Understanding var vs let

//     let and const didn't existed before ES6(ES2015)

//     let and const => block-scoped
//     var => function-scoped
// */

    // function start(){
    //     for(let i = 0 ; i < 5; i++){
    //     console.log(i);
    // }

//     start= ()=>{
//         for(let i = 0 ; i < 5; i++){
//          console.log(i);
//     }

//     /* the second console.log throughs error 
//     because let only can be used locally*/

//     // console.log(i);

//     /* When we change let to var it won't 
//     througt error because var allows to access the 
//     variable from outside the block*/

// }
// start(); 




/* 4. If and else statements */
// let age = 20;

// if (age < 21) {
// alert("Sorry, you shouldn't be here.");
// } else {
// console.log("Please proceed.");
// }


/**
 * 5. Switch Statements (Math.floor aproximates the number to the whole number,
 * random alone can include the decimal)
 * 
     let num = Math.floor(Math.random() * 7);
    switch (num) {
    case (4):
    console.log("You rolled a four"); break;
    case (5):
    console.log("You rolled a five"); break;
    case (6):
    console.log("You rolled a six"); break;
    default:
    console.log("You rolled a number less than four"); break;
    }
 * 
 * 
 */

//6. Understanding Arrays
// const myArray = ["blue", "red", "green"];
// // adding
// myArray[0] = "pink";
// myArray[3] = "purple";
// myArray[5] = null;
// myArray[6] = 4;


// property


// modifiers

//POP
//myArray.pop(); // updates array deleting the last element in the array

//PUSH
// myArray.push('item'); // updates array

//CONCAT
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);// new array

//JOIN
// // myArray.join(joiner); // new string

// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join('+'));
// // expected output: "Fir+Air+Water"

// console.log(elements.join(' '));
// // expected output: "FireAirWater"

// console.log(elements.join('-'));
// // expected output: "Fire-Air-Water"



//Slice // new array starting at index 2 and ending at index 3
//console.log(myArray.slice(2, 4));

//Splice
// myArray.splice(2,1,"brown"); //First number is the index and second if something is replaces
// console.log(myArray);

//INCLUDE
//console.log(myArray.includes("red")); //this is a bulean 

// console.log(myArray.length);
// console.log(myArray);



/* 7. Undestanding for loops


// //For...OF

// let newArray = ["blue", "red", "green"];
// for (const value of newArray) {
// console.log("The selected color: "+value);
// }


//For ... Loop

// for(let i = 0; i< newArray.length; i++){
//     console.log("The selected color: "+ newArray[i]);
// }




___________________________________________________________  


/*
 * Original Code by Lucien Huang! 
 */

//This is the array of the images

var images = [
    "img01.jpg",
    "img02.jpg",
    "img03.jpg",
    "img04.jpg",
    "img05.jpg",
    "img06.jpg",
    "img07.jpg",
    "img08.jpg",
    "img09.jpg",
    "img10.jpg",
    "img11.jpg",
    "img12.jpg",
    "img13.jpg",
    "img14.jpg",
    "img15.jpg"];




//3. I need to set the initial value of the images that are going to open
let imgSwitch = 0;    


document.addEventListener("DOMContentLoaded", ()=>{

    console.log("JS connected");

    loadImages();

});



//here I'm going to load my function

// function loadImages() {

    loadImages= ()=> {

   let imageNumber = 0; 



//1. Get the varColumns from the DOM
   let varColumns = document.getElementsByClassName("column");

//    console.log(varColumns.length);




//2. Load the images
   for(let i = 0; i< images.length; i++){


    // In this case we're creating the image tag with and ID and class

        let newImg = document.createElement("img");
        newImg.className = "images";
        newImg.id = i; 
        newImg.src = "./assets/images/"+images[i];


    //Now we need to add the images to the DOM    
        varColumns[imageNumber].appendChild(newImg);

        imageNumber++; 
    
    /*The array of images is bigger than the array of varColumns,
    so when we get to the end the next image should start to count 
    from zero
    */
        if(imageNumber > varColumns.length-1){
            imageNumber = 0; 
        }


    /*5. When I click each image, I want to trigger the function popUp
     and assign a value to the image that correspond with the image
    that I'm clicking */

        newImg.addEventListener("click", (tempvalue)=>{

            popUp(tempvalue.target.id);
            imgSwitch = tempvalue.target.id; 

        });


        
        
   }
}

/*4. I want to declare my function popUp that is 
going to be triggered when I click each image */

function popUp (imgCount){

    imgSwitch = imgCount;

    var popup = document.getElementById("popup");

    var img = document.getElementById("pic");

    popup.style.zIndex = "1";
    popup.style.display = "block";


// 6. Now that we created the images, we can use it as a trigger to close itself
    img.addEventListener("click", function(){
        close();
    });

    img.src = "./assets/images/"+images[imgCount];

}    



function close(){

    let popup = document.getElementById("popup");
    popup.style.zIndex = "-1";
    popup.style.display = "none";

}


// 7. Program arrows 

function change(direction){
    var numOfImg = images.length;

    var next = 0;

    var img = document.getElementById("pic");



    if( direction == 1){

        if(imgSwitch > numOfImg-2){
            next = 0; 
        } else {

            imgSwitch++;
            next = imgSwitch;
        }

    }else if( direction == -1){

        if(imgSwitch-1 < 0){
            next = numOfImg - 1; 
        }else{
            next = imgSwitch - 1; 
        }

    }

    img.src = "./assets/images/"+images[next];
    imgSwitch = next;
}

