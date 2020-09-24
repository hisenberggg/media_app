window.addEventListener("load", function() {
  console.log("Hello World!");
  
});

'use strict';
document.getElementById("1").focus();
var x=0;
document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  if(keyName=="Backspace") //this is the code to implement back key
     {
       PressTime=false;                      //Creating a parameter for key press time
       Timer=setTimeout(function(){          //Setting Timer For 3 seconds
       PressTime=true;
       
},3000);
       
       
       event.preventDefault();               //Disabling the default keypress function
     
     }
  
}, false);

document.addEventListener('keyup', (event) => {
  
  const keyName = event.key;
  
   if(keyName=="Backspace")
     { 
       if(!PressTime)            //For Short Press
       {
        clearTimeout(Timer);         //Clearing the timer
         window.history.back();     //Going to previous page
       }
       else              //Long Press
         {
           
          window.close();   //Closing the app
          
         }
       
     }
  
   
  console.log('Key up ',keyName);
}, false);
