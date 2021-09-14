console.log("JS is connected!")


let myDevice = window.navigator.userAgent; 
document.getElementById("device").innerHTML = myDevice; 

console.log(myDevice)


if(myDevice.indexOf("Mobile") > -1){

    window.location.replace("./assets/html/mobile.html");

};


if(myDevice.indexOf("Macintosh") > -1){

    window.location.replace("./assets/html/desktop.html");

}