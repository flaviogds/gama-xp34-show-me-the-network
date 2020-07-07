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
