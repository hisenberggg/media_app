window.addEventListener("load", function() {
  console.log("Hello World!");
  
});
'use strict';
document.addEventListener('keydown', (event) => {
if (event.keyCode==13)
{
  event.preventDefault();
  buttonclicked=document.getElementById("2");
  buttonclicked.style.background="red";
  buttonclicked.style.color="black";
  document.getElementById("2").click();

}
},false);

document.addEventListener('keyup', (event) => {
  
  const keyName = event.key;

  
   
  console.log('Key up ',keyName);
}, false);