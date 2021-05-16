let text = document.getElementById("text");
let text2 = document.getElementById("text2");
let para = 'Welcome Gammer!!!  😎'
let para2 = 'Choose a Gametastic 👇 Game for yourself...  '
let x = 1;



setInterval(write,100);
setInterval(write2,100);


function write(){
    text.innerText = para.slice(0,x)
    x++;
    if(x > para.length){
      --x;
        }
  
        
    }
    function write2(){
        text2.innerText = para2.slice(0,x)
    x++;
    if(x > para2.length){
      --x;
        }
    }








