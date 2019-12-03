for(var i=0 ; i<document.querySelectorAll(".btn").length ; i++)
{
    document.querySelectorAll(".btn")[i].addEventListener("click",function()
    {
       var buttonInnerHtml = this.innerHTML;
       keySound(buttonInnerHtml);
       buttonAnimation(buttonInnerHtml);
       
    });
}



   document.addEventListener("keypress",function(event)
    {   
        keySound(event.key);
        buttonAnimation(event.key);
    });
 
function keySound(key)
{
    switch(key)
    {
     case ("w"):
         var audio = new Audio("sounds/tom-1.mp3");
         audio.play();
         break;
     case ("a"):
         var audio = new Audio("sounds/tom-2.mp3");
         audio.play();
         break;
     case ("s"):
         var audio = new Audio("sounds/tom-3.mp3");
         audio.play();
         break;
     case ("d"):
         var audio = new Audio("sounds/tom-4.mp3");
         audio.play();
         break;
     case ("j"):
         var audio = new Audio("sounds/crash.mp3");
         audio.play();
         break;
     case ("k"):
         var audio = new Audio("sounds/kick-bass.mp3");
         audio.play();
         break;
     case ("l"):
         var audio = new Audio("sounds/snare.mp3");
         audio.play();
         break;
     
    }
}

function buttonAnimation(pressedkey)
{
    var btnpress=document.querySelector("."+ pressedkey);
    btnpress.classList.add("pressed");
    setTimeout(function(){
        btnpress.classList.remove("pressed")
    },200);

}

  