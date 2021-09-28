//1. This function get's triggered when I load my page 
$(()=>{

    console.log("JS is ready!")
    
    loadData();

})


//Load my JSON

loadData = ()=>{

    $.getJSON("../data.json", (data)=>{

        console.log(data);

        generateWebsites(data);


    });

}




//Compile my data - Handlebars.js

generateWebsites = (temp)=>{
    let source = $("#websites-template").html();
    let template = Handlebars.compile(source);
    let results = template(temp);
 
    $(".websites-list").append(results);
}