var nome="";
var email = "";

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

  var totalHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  document.getElementById("hours").innerHTML = totalHours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "AGORA!";
  }
}, 1000);

/* Exit Intent Pop Up */

const popUpModal = document.querySelector('.modal-custom')
const closeModalButtons = document.querySelectorAll('[data-close-custom-button]');
const overlay = document.getElementById('overlay-custom'); 
var hasOpened = false;

document.addEventListener('mouseleave', () => {
  openModal(popUpModal);
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal-custom');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (!hasOpened) {
    if (modal == null) { console.log(modal); return; }
    modal.classList.add('active');
    overlay.classList.add('active');
    hasOpened = true;
  }
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}