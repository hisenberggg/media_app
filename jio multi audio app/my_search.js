document.addEventListener('keydown', (event) => {

      input = document.getElementById("1");
      filter = input.value.toUpperCase();
      link=window.location.href;
      if(link=="app://4e0d642f-930c-4b3e-bb3f-63c9f194ab91/audio_edit(1).html")
      {
        divi = document.getElementById("cont1");
      }
      else
      {
        divi = document.getElementById("cont");
      }
      btn = divi.getElementsByTagName("button");
      
  
      const keyName = event.key;
       if(keyName=="Backspace")
         { 
          event.preventDefault();

              if(filter=="")
              {

                for(let i=0;i<btn.length;i++)
                {
                  btn[i].style.display="none";
                  btn[i].className="temp";

                }
                for(let i=0;i<4;i++)
                {
                  btn[i].style.display="";
                  btn[i].className="c1";
                } 
              }
              else
              {
                  for(let i=0;i<btn.length;i++)
                  {
                    btn[i].style.display="none";
                    btn[i].className="temp";

                  } 
                  var j=2;
          
                for(i=0;i<btn.length;i++)
                {
                 if(input)
                 {
                   txtValue = btn[i].textContent || btn[i].innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) 
                    {
                         btn[i].style.display = "";
                    } 
                    else
                    {
                         btn[i].style.display = "none";
                         btn[i].style.className = "temp";
                    }
                 }
                
                }
              }
         }
        else if(event.key=="ArrowUp" || event.key=="ArrowDown") 
        {
            if(term=="")
                              {
                                console.log("Cursoring part1");
                              }
                              else
                              {
                              
                                
                                document.getElementById("1").value="";
                                document.getElementById("1").value=val;

                              }
                               
        } 
        else       
        {
       
      
      var j=2;
      btn = divi.getElementsByTagName("button");
      for(i=0;i<btn.length;i++)
      {
       if(input){
         txtValue = btn[i].textContent || btn[i].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
               btn[i].style.display = "";
             } 
          else {
               btn[i].style.display = "none";
               btn[i].style.className = "temp";
             }
       }
      }
    }
      console.log('Key up ',keyName);
  }, false);