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
var countDownDate = new Date("Jul 9, 2021 19:00:00").getTime();
var finalEvent = new Date("Jul 9, 2020 21:10:00").getTime();

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

  var totalHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // Display the result in the element with id="countdown_timer"
  if(distance > 0){
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    if(now<finalEvent){
      document.getElementById("evento").innerHTML = "<div class='event-now'><p class='meetup'>Meetup começa agora</p></div><center class='cont-btn'><a href='https://www.youtube.com/watch?v=bI73Jv5aEZY'><button class='btn-event'>YouTube</button></a></center>";
    }
    if(now>finalEvent){
      document.getElementById("evento").innerHTML = "<div class='cont-event' id='data-evento'><h2 class='event'>Assista o meetup em </h2></div><center class='cont-btn'><a href='https://www.youtube.com/watch?v=bI73Jv5aEZY'><button class='btn-event'>YouTube</button></a></center>";
    }
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