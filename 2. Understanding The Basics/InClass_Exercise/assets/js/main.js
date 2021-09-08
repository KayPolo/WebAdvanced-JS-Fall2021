/*
 * Original Code by Lucien Huang! 
 */


// Array to store list of images

let images = [
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
    "img15.jpg"
];


//What get's executed when you load your program
document.addEventListener("DOMContentLoaded",function(){
    console.log("Hello world");

    loadImages();
})

//This is the same as the arrow function
// function loadImages(){ }

loadImages = () => {

    let imageNumber = 0;

    //1. Get the columns class
    let varColumns = document.getElementsByClassName("column");

    //2. Loop thorugh array and create image based on how many elements the array has. 
    for(let i = 0; i<images.length; i++){
    
        //3. create the image componet
        let newImg = document.createElement("img");
        newImg.className = "images";
        newImg.id = i;
        newImg.src = "./assets/images/"+images[i];


        //Add images to coumns

        varColumns[imageNumber].appendChild(newImg);
        imageNumber++;

        if(imageNumber > varColumns.length - 1){
            imageNumber = 0;
        }

    
    }

}



