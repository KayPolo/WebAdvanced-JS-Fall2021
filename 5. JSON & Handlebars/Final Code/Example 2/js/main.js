/*------------------------------------------------*/
// 	Handlebars Intro
//	http://handlebarsjs.com/
//	Learn more: http://javascriptissexy.com/handlebars-js-tutorial-learn-everything-about-handlebars-js-javascript-templating/
/*------------------------------------------------*/

//	Define Data Object


let data = {
	title: "My First Post",
	description: "Why is this so easy?!"
}






// Compile data in handlebars

let source = $('#myfirst-template').html();

let templete = Handlebars.compile(source); 

let results = templete(data);

$('body').append(results);

