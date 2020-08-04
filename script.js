let a = document.getElementById("navbarhide");
console.log(a);
function closet(){ 
    a = getComputedStyle(a).display;
    
    if(a == "block"){
        document.getElementById("navbarshow").id="navbarhide";
        document.getElementById("listen").id = "listen-click";
        
        a = document.getElementById("navbarhide");
        
    }
    else if (a == "none"){ 
       
        document.getElementById("navbarhide").id="navbarshow";                  
        document.getElementById("listen-click").id = "listen";
        a = document.getElementById("navbarshow");
        
    } 
                
}

document.getElementById("listen-click").addEventListener("click",closet);
