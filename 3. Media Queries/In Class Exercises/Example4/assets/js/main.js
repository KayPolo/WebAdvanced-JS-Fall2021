console.log("JS is connected!")


screenSize = ()=>{

    document.getElementById("screen_size").innerHTML = ("W:" + window.innerWidth + "      H:" + window.innerHeight);
}

window.onresize = screenSize;
window.onload = screenSize;
