var timer=document.querySelector("#time");
var two=document.getElementById("two");
var five=document.getElementById("five");
var ten=document.getElementById("ten");
var play=document.getElementById("m");
var beach=document.getElementById("bec");
var rain=document.getElementById("rai");
var back=document.getElementById("myVideo");
var music=document.getElementById("myAudio");
var time=temp=5*60 ;
var min;
var sec;
var myVar;
var temp;

two.addEventListener("click",function(){
  timer.textContent="02:00";
  time=temp=2*60;
  // var myVar = setInterval(myTimer, 2*60);

});
five.addEventListener("click",function(){
  timer.textContent="05:00";
  time=temp=5*60;
// var myVar = setInterval(myTimer, *60);

});
ten.addEventListener("click",function(){
  timer.textContent="10:00";
  time=temp=10*60;
// var myVar = setInterval(myTimer, 10*60);

});


var toggle=false;
play.addEventListener("click",function(){
  // play.setAttribute("src","svg/pause.svg")
  
  if(toggle===true)
  {
    document.getElementById("pl").src="svg/play.svg";
    clearInterval(myVar);
  }
  else{
    document.getElementById("pl").src="svg/pause.svg";
    myVar = setInterval(myTimer, 1000);
  }
  toggle=!toggle;
  if(min===0 && sec===0){
    time=temp;
    min=parseInt(time/60);
    sec=parseInt(time%60);
    myVar = setInterval(myTimer, 1000);
    document.getElementById("pl").src="svg/pause.svg";
    toggle=true;
  }

});

rain.addEventListener("click",function(){
  back.src=("video/rain.mp4");
  music.src="sounds/rain.mp3";
})

beach.addEventListener("click",function(){
  back.src=("video/beach.mp4");
  music.src="sounds/beach.mp3";
})



function myTimer() {
  min=parseInt(time/60);
  sec=parseInt(time%60);
  
  time--;
  var mi=min;
  var se=sec;
  mi = mi < 10 ? "0" + mi : mi;
  se = se < 10 ? "0" + se : se;

  console.log(time);
  timer.textContent=mi+":"+se;
  if(min===0 && sec===0)
  {
    clearInterval(myVar);
    document.getElementById("pl").src="svg/replay.svg";
  }
}
