/* eslint-env browser */

function random_bg_color() {
        setTimeout(random_bg_color, 10000)   
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";  
    document.body.style.background = bgColor;
    
    var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    var be = "rgb(" + a + "," + b + "," + c + ")";
    
    var circles = document.getElementsByClassName("circle"); 
    var len = circles.length;
    
    for (var i=0 ; i<len; i++) {
        circles[i].style.backgroundColor=be;
    
    }


}



  
  

random_bg_color