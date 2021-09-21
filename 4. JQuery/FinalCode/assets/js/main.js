//document.addEventListener('DOMContentLoaded', ()=>{ //since we don't have anything to triger the action of pushing all the links
														  //inside the HTML, we need to use this statement
														  //the meaning of this statement is when the you load the DOM, load as well the 
														  //function that contains all the information inside...

//There are two ways to do this. THis is the longer, but easier to understand

// 	var topNav = document.getElementById("navigation"); 
//	topNav.innerHTML += "<a href = '#home'>HOME</a>"; 
// 	topNav.innerHTML += "<a href = '#linkOne'>LINK 1</a>"; 
// 	topNav.innerHTML += "<a href = 'linkTwo'>LINK 2</a>";
// 	topNav.innerHTML += "<a href = 'linkThree'>LINK 3</a>"; 

// 	var sideNav = document.getElementById("mySideNav");
//	sideNav.innerHTML += "<a href = '#home'>HOME</a>"; 
// 	sideNav.innerHTML += "<a href = '#linkOne'>LINK 1</a>"; 
// 	sideNav.innerHTML += "<a href = 'linkTwo'>LINK 2</a>";
// 	sideNav.innerHTML += "<a href = 'linkThree'>LINK 3</a>";   

// });



// $(document).ready(()=> {
//     console.log( "ready!" );
// });



$( ()=>{
    console.log( "ready!" );


	let navigation = "<li><a class='submenu' href = '#home'>HOME</a><a class='submenu' href = '#linkOne'>SECTION 1</a><a class='submenu' href = '#linkTwo'>SECTION 2</a><a class='submenu' href = '#linkThree'>SECTION 3</a></li>"

	$("#mySideNav").html(navigation);
	$("#navigation").html(navigation);


	// Arrow function expressions
	// An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

	// Differences & Limitations:

	// Does not have its own bindings to this or super, and should not be used as methods.
	// Does not have new.target keyword.
	// Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
	// Can not be used as constructors.
	// Can not use yield, within its body.


	$('a').click(function() {
		
		let myTarget = $(this.hash).offset().top;
		$('html,body').animate({scrollTop: myTarget}, 1000);

	});
	
	
});

let closeIcon = $(".closeIcon");

openNav = ()=>{
	$("#mySideNav").addClass("openMenu");

}

// closeNav = ()=> {
// 	$("#mySideNav").removeClass("openMenu");
// 	$("#closeIcon").style.display = "none";
// }





//Close Side Navigation



$("#hamberguer").click(()=>{
	$("#mySideNav").addClass("openMenu");

	let closeicon = "<span id='closeIcon'>&times;</span>"
	$("#closecontainer").html(closeicon);

});


$("#closecontainer").click(()=>{
	$("#mySideNav").removeClass("openMenu");
	$("#closeIcon").remove();

});




