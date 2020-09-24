
const softkeyCallback = {
    left: function() { console.log('You click on SoftLeft') },
    center: function() { console.log('You click on Enter') },
    right: function() { console.log('You click on SoftRight') }
};
var count=0;

var l;
var b=document.getElementsByClassName("c1");
l=b.length;
console.log(l);

function nav (move) {
  const currentIndex = document.activeElement.tabIndex;
  //console.log(currentIndex);

  const next = currentIndex + move;
 	console.log(next);
  //const items = document.querySelectorAll('.c1');
  const items = document.querySelectorAll('.c1');
  console.log(items);
  //console.log(items);
  const targetElement = items[next-1];
  console.log(targetElement);
  targetElement.focus();
}

function handleKeyDown(evt) {
    switch (evt.key) {
        case 'SoftLeft':
            btn=document.getElementById("back");
            btn.style.background="white";
            btn.style.color="black";
            document.getElementById("back").click();
            softkeyCallback.left();
        break;

        case 'SoftRight':
            btn=document.getElementById("opt");
            btn.style.background="white";
            btn.style.color="black";
            document.getElementById("opt").click();
            // Action case press right key
            softkeyCallback.right();
        break;

        case 'Enter':
            event.preventDefault();

            buttonclicked=document.getElementById(count+1);
            document.getElementById(count+1).click();
            // Action case press center key
           // softkeyCallback.center();
        break;
        
        case 'ArrowUp':
        if(count == 0){
        	count-=0;
        }
        else{
            count-=1;
            //console.log(count);
            nav(-1);
            //console.log('done');
        }
            break;
        case 'ArrowDown':
	        if(count == l-1){
	        	count +=0;
	        	nav(-(l-3))
	        	count=2;
	        }
	        else{
	            count+=1;
	            //console.log(count);
	            nav(1);
	          }  
            //console.log('done');
            break;
        case 'ArrowRight':
            count+=1;
            console.log(count);
            nav(1);
            break;
        case 'ArrowLeft':
            count-=1;
            console.log(count);
            nav(-1);
            break;
    }
};


document.addEventListener('keydown', handleKeyDown);











