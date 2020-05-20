const softkeyCallback = {
    left: function() { console.log('You click on SoftLeft') },
    center: function() { console.log('You click on Enter') },
    right: function() { console.log('You click on SoftRight') }
};

function nav (move) {
  const currentIndex = document.activeElement.tabIndex;
  console.log(currentIndex);
  const next = currentIndex + move;
  //const items = document.querySelectorAll('.c1');
  const items = document.querySelectorAll('.c1');
  const targetElement = items[next-1];
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
            // Action case press center key
            softkeyCallback.center();
        break;
        
        case 'ArrowUp':
            nav(-1);
            console.log('done');
            break;
        case 'ArrowDown':
            nav(1);
            console.log('done');
            break;
        case 'ArrowRight':
            nav(1);
            console.log('done');
            break;
        case 'ArrowLeft':
            nav(-1);
            console.log('done');
            break;
    }
};


document.addEventListener('keydown', handleKeyDown);











