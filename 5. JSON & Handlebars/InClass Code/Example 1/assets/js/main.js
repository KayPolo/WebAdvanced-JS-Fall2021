//Test if my JSON is built correctly https://jsonlint.com/
//Options to host my JSON file https://geekflare.com/best-json-hosting/


//1. Building an object and call information from the object 

// let myInfo = {

//     "firtName":"Karla",
//     "lastName":"Polo",
//     "age":32
// }


// console.log(myInfo);

// //document.getElementById("test").innerHTML = myInfo.firtName;

// $('.json-container').append(`my name is ${myInfo.firtName} and I am ${myInfo.age} years old`);
// $('.json-container').append('my name is' + myInfo.firtName + "and I am " + myInfo.age + 'years old');



// 2. Creating data sets 
// let myFriends = {"friends":[

//     {
//         "firstName":"Chris",
//         "lastName":"Smith",
//         "age":"54"

//     },
//     {
//         "firstName":"Daniel",
//         "lastName":"Klain",
//         "age":"22"

//     },
//     {
//         "firstName":"Diana",
//         "lastName":"Palmer",
//         "age":"76"

//     }
// ]}

// console.log(myFriends);

// //$('.json-container').append(`${myFriends.friends[0].firstName} ${myFriends.friends[2].lastName} ${myFriends.friends[1].age}` );

// //Strigify 

// let stringfriends = JSON.stringify(myFriends);

// console.log (stringfriends);
// $('.json-container').append(stringfriends);

// //Parse 

// let backtoobject = JSON.parse(stringfriends);
// console.log(backtoobject);



// Pull info from JSON

$.getJSON("../data.json", (data)=>{

    console.log(data.friends);

});