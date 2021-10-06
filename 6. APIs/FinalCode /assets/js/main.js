
$(()=> {
    /* ----------------
    3. Let's create a function named loadData to make the JSON request
    ------------------*/


    // loadData();

    attachEvent();

});





/* ------------------------
1. Explaining getJSON Method 
--------------------------*/

// $.getJSON("https://app.ticketmaster.com/discovery/v2/events.json?apikey=5dw4mPnZNEdQLTgNlejFLhrG4AyrYLEr", 
// (data)=>{

//     console.log(data);

//     console.log(data._embedded.events[0]);
// })



/* ------------------------
1. Explaining AJAX Method 
--------------------------*/


// $.ajax({
//     type:"GET",
//     url:"https://app.ticketmaster.com/discovery/v2/events.json?city="+city+"&apikey=5dw4mPnZNEdQLTgNlejFLhrG4AyrYLEr&keyword=music",
//     async:true,
//     dataType: "json",
//     success: (json)=> {
        
//                 console.log(json);

//     }


    
//   });


loadData = ()=>{

    // let city = "Miami";

    let city = $("#city").val();

    
   if(city != ""){


    // 10. Ajax Call vs getJSON
    // This is where AJAX has the upper hand. AJAX can pull information from JSON API’s, 
    //  but they also can pull information from XML API’s. It’s just a little bit more of a process.
    //  https://medium.com/@KDweber89/ajax-vs-getjson-ca910fa6854e

    $.ajax({
        type:"GET",
        url:"https://app.ticketmaster.com/discovery/v2/events.json?city="+city+"&apikey=5dw4mPnZNEdQLTgNlejFLhrG4AyrYLEr&keyword=concerts",
        //url:"https://app.ticketmaster.com/discovery/v2/events.json?keyword="+city+"&apikey=5dw4mPnZNEdQLTgNlejFLhrG4AyrYLEr",
        async:true,
        dataType: "json",
        success: (json)=> {

            

            
            
            console.log(json._embedded.events[0]);

            
            
            
            let data = json._embedded.events;

            for (var i=0; i < data.length; i++) {
                console.log(data[i])

             }



            let name = json._embedded.events[0].name;
            let images = json._embedded.events[0].images[0].url;
            let date = json._embedded.events[0].dates.start.localDate;
     



            $("#error").empty();
            
       
        

            $(".name").html(name);
            $(".images").attr("src", images);
            $(".date").html(date);



            
      

                
    }

    });
    
   }else{
       $("#error").html("City can't be empty")
   }
    
  };




/* 6. We don't want to load the data when the page loads anymore, we want to load it only
When we input a city on the searbar
Define function that hadles the request from the input on Search Bar*/

attachEvent = ()=>{
    $("#search-button").click(()=>{
        loadData();

        $("#city").val("");


        window.onerror = function(msg, url, linenumber) {
                $(".images").attr("src", " ");
                $(".name").empty();
                $(".date").empty();

                $("#error").html("Please, enter a valid city")
            }


    })

    $("#city").keypress((e)=>{

        if(e.keyCode ==13){
            loadData();

            $("#city").val("");


            window.onerror = function(msg, url, linenumber) {
                $(".images").attr("src", " ");
                $(".name").empty();
                $(".date").empty();

                $("#error").html("Please, enter a valid city")
            }


        }

    })
}

  

