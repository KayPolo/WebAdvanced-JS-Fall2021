
// 1. get JSON Method
// $.getJSON("https://app.ticketmaster.com/discovery/v2/events.json?apikey=VFoN8YyhEPonjOL3cy5sqYpFqGCgeUfc&keyword=concerts", (data)=>{

//     console.log(data._embedded.events[4]);
// })




$(()=>{

    // loadData();

    attachEvent();

});





loadData = ()=>{

    //let city = "Chicago";
    
    let city= $("#city").val();

$.ajax({

    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events.json?city="+city+"&apikey=5dw4mPnZNEdQLTgNlejFLhrG4AyrYLEr&keyword=concerts",
    async: true, 
    dataType: "json",

    success:(data)=>{

        let events = data._embedded.events;
        for (let i = 0; i < events.length; i++){
            console.log(events[i]);
        }
        
        //console.log(data._embedded.events[0]);

        let name = data._embedded.events[0].name;
        let images = data._embedded.events[0].images[0].url;
        let date = data._embedded.events[0].dates.start.localDate;


        $("#error").empty();


        $(".name").html(name);
        $(".images").attr("src",images);
        $(".date").html(date);






    }




})
}







// Attach Event when click or Enter 

attachEvent = ()=>{

    $("#search-button").click(()=>{
        loadData();

        //Field get's cleaned after clicking GO
        $("#city").val("");


        window.onerror = function(msg, url, linenumber){

            $(".name").empty();
            $(".images").attr("src"," ");
            $(".date").empty();



            $("#error").html("Please, enter a valid city.");
        }

    })


    $("#city").keypress((e)=>{

        if(e.keyCode == 13){

            loadData();

            //Field get's cleaned after enter
            $("#city").val("");

            window.onerror = function(msg, url, linenumber){

                $(".name").empty();
                $(".images").attr("src"," ");
                $(".date").empty();



                $("#error").html("Please, enter a valid city.");
            }
    

        }

    })


}