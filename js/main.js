var nome="";
var email="";

function addData() {

    nome = document.getElementById('nome').value;
    email = document.getElementById('email').value;

    var data = { nome: nome, email: email};

    firebase.firestore().collection('leads').add(data).then(docRef =>{
        console.log(docRef.id);
    })
}

// Set the date we're counting down to
var countDownDate = new Date("Jul 9, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance / (1000 * 60 * 60)));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown_timer"
    document.getElementById("timer").innerHTML = hours + " : " + minutes + " : " + seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown_timer").innerHTML = "AGORA!";
  }
}, 1000);
