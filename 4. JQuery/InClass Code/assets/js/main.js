// document.addEventListener('DOMContentLoaded', ()=>{

//     console.log("This is Vanilla!");
// })


// $(document).ready(()=>{
//     console.log("This is JQuery");
// })


// This is going to be loaded before anything else

$(()=>{
    console.log ("Ready to Rock!")

    let navigation = ("<li><a class = 'submenu' href ='#home'>HOME</a><a class = 'submenu' href ='#linkOne'>SECTION 1</a><a class = 'submenu' href ='#linkTwo'>SECTION 2</a><a class = 'submenu' href ='#linkThree'>SECTION 3</a></li>")

    $("#mySideNav").html(navigation);
    $("#navigation").html(navigation);


    $("a").click(function(){
        let myTarget = $(this.hash).offset().top;
        $("html,body").animate({scrollTop:myTarget},1000);
    })


})



// document.getElementById("hamburguer").addEventListener("click",()=>{

// })

$(".hamContainer").click(()=>{
    $("#mySideNav").addClass('openMenu');
    

    console.log("Click Menu");

    //.html() is same as .innerHTML()
    $("#closeContainer").html("<span id='closeIcon'>&times;</span>");
});


$("#closeContainer").click(()=>{
    $("#mySideNav").removeClass('openMenu');
    $("#closeIcon").remove();
})


