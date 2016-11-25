$(document).ready(function(){
    $('#login').on('click',login);
    $('#newMail').on('click',compose);
    $('#Submit').on('click', createUser);
});

function compose(e){
    $('#compose').toggle();
}

function login(e){
    e.preventDefault();
    var url='chepoLogIn.php';
    var name=$('#name').val();
    var password=$('#password').val();
    var dataString='uname='+name+'&pass='+password; //Request which will be made to server
    $.ajax(url,{
        type: 'POST',
        data: dataString,
        //dataType: 'text'
    }).done(function (resp){
        console.log(resp);
    }).fail(function(){
       console.log('failed'); 
    });
    
}

function createUser(e){
     e.preventDefault();
     console.log('User created');
}