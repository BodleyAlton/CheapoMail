$(document).ready(function(){
    $('#login').on('click',login);
    $('#newMail').on('click',compose);
    $('#Submit').on('click', createUser);
});

function compose(e){
    $('#compose').show();
    $('#newMail').prop('disabled', true);
}

function login(e){
   e.preventDefault();
   console.log('Logged In');
}
function createUser(e){
     e.preventDefault();
     console.log('User created');
}