var myAccording = document.getElementsByClassName('according'),
    
    myDis = document.getElementsByClassName('dis'),
    
    x;
    
for (x = 0; x < myAccording.length; x++) {
    
    myAccording[x].addEventListener("click", function () {
        
        'use strict';
        
        this.classList.toggle("active");
        
        myDis = this.nextElementSibling;
        
        if (myDis.style.display === "block") {
            
            myDis.style.display = "none";
        
        } else {
            
            myDis.style.display = "block";
        }
    });
}