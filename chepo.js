$(document).ready(function(){
    $('#login').on('click',login);
    $('#newMail').on('click',compose)
});

function compose(e){
    $('#compose').toggle();
}

function login(e){
   e.preventDefault();
   console.log('Logged In');
}