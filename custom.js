var voice = document.getElementById('voice');
  var playBTN  = document.getElementById('playBTN');
  var stop = document.getElementById('stopBTN');
  var count = 0;
  
  function playVoice(){
      if(count==0){
          count = 1;
          voice.play();
          playBTN.innerHTML = "Pause &#9208;";
      }else{
          count = 0;
          voice.pause();
          playBTN.innerHTML = "Continue &#9658;";
      }
    }
     function stopVoice(){
      playVoice()
      voice.pause();
      voice.currentTime = 0;
      playBTN.innerHTML = "Play &#9658;";
    }