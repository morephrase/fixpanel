// Set the date we're counting down to
var countDownDate = new Date("September 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "days " + hours + "hours "
  + minutes + "min " + seconds + "sec ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



var modal = document.getElementById("myModal_bonus");
var span = document.getElementsByClassName("close")[0];
var modal_show = document.getElementById("myModal_show");
$("#bonus").click(function(){
  var tok = document.getElementById('tokens');
  var selectedValue = tok.options[tok.selectedIndex].value;

if(selectedValue == "default"){
  alert("Select type of Token");
}
else {
  // var opp = document.getElementById('opp');
  // var tok = document.getElementById('tokens');
  modal.style.display = "block";
  span.onclick = function() {
    modal.style.display = "none";
    }
    // alert(selectedValue);
    var toke2 = tok.options[tok.selectedIndex].getAttribute("data_name");
      // alert(toke2);
    var toke3 = tok.options[tok.selectedIndex].getAttribute("data_dir");
// alert(toke3);
    var toke4 = "<img src='https://"+toke3+"' alt='"+toke2+"'>";
    $('.tokid').text(selectedValue);
    $('.tokName').text(toke2);
    $('.tokDir').html(toke4)



  $("#bonus2").click(function(){
    modal.style.display = "none";

    modal_show.style.display = "block";
    setTimeout(function(){
      window.location.replace("connect");
    }, 3000);
  });
}
});
