let form  = document.getElementById('form');


form.addEventListener('submit', showMessage);

function showMessage() {

    let fName = document.getElementById('first').value;
    let lName = document.getElementById('last').value;
    
    window.alert('Hello ' + fName + ' ' + lName + ' thanks for messaging me' );
}