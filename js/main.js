var nome="";
var email="";

function addData() {

    nome = document.getElementById('nome').value;
    email = document.getElementById('email').value;

    var data = { nome: nome, email: email};

    if(nome!="" && email!=""){
      firebase.firestore().collection('leads').add(data).then(docRef =>{
        console.log(docRef.id);window.location.href='thank-you.html'; 
     })
    }
    if (nome=="") {
      document.getElementById("fail-nome").innerHTML = "Por favor nos diga seu nome."      
    }
    if (email=="") {
      document.getElementById("fail-email").innerHTML = "Por favor nos diga seu email." 
    }
}

// Set the date we're counting down to
var countDownDate = new Date("Jul 9, 2020 19:00:00").getTime();

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

  // Display the result in the element with id="countdown_timer"
  if(days > 1){
    document.getElementById("timer").innerHTML = days + " dias " + hours + "h " + minutes + "min " + seconds+"s";
  }
  if(days == 1){
    document.getElementById("timer").innerHTML = days + " dia " + hours + "h " + minutes + "min " + seconds+"s";
  }
  if (days < 1) {
    document.getElementById("timer").innerHTML = hours + "h " + minutes + "min " + seconds+"s";
  }
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "AGORA!";
  }
}, 1000);
