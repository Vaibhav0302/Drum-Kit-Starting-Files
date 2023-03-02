var numberOfDrum=document.querySelectorAll(".drum").length;
var i=0;
while(i<numberOfDrum)
{
    document.querySelectorAll("button")[i].addEventListener("click", function handleClicked(){
        var audio= new Audio('sounds/tom-1.mp3');
        audio.play();
    });
    i++;
}


