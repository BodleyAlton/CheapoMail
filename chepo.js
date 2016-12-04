var name;
$(document).ready(function(){
    $('#login').on('click',login);
    $('#newMail').on('click',compose);
    $('#submit').on('click', createUser);
    $('#send').on('click',savemessage);
    $('#logout').on('click',logout);
    $('#create').on('click',create);
});

function login(e){
    e.preventDefault();
    var url='chepoLogIn.php';
    name=$('#name').val();
    var password=$('#password').val();
    var dataString='uname='+name+'&pass='+password; //Request which will be made to server
    $.ajax(url,{
        type: 'POST',
        data: dataString,
    }).done(function (resp){
         if (resp==true){
        $('#head').load('message.html');
        }
        else if (resp==false){
            $('#name').addClass('error');
            $('#password').addClass('error');
            $('#error').append('<h3 class="error">Please Enter a Valid Username and Password</h3>')
        }
    }).fail(function(){
       login(e); 
    });
    if(name=='Administrator'){
        $('#create').css('display','inline');
    }else{$('#create').css('display','none');}
}

function logout(){
    $('#head').load('index.html');
}
function compose(){
      var comp = $('#messagearea');
    var span = document.getElementsByClassName("close")[0];
    span.onclick=function(){
        $('.close').css('display','none');
        comp.css('display','none');
    }
    comp.css('display','Block');
    $('.close').css('display','block');
}

function create(){
    var comp = $('#composearea');
    var span = document.getElementsByClassName("close")[1];
    span.onclick=function(){
        $('.close').css('display','none');
        comp.css('display','none');
    }
    comp.css('display','Block');
    $('.close').css('display','block');
}
function createUser(e){
    e.preventDefault();
    var fName=$('#firstname').val();
    var lName=$('#lastname').val();
    var uName=$('#username').val();
    var pass=$('#password').val();
    var dataString='fname='+fName+'&lname='+lName+'&uname='+uName+'&pass='+pass;
    var url= 'create_user.php';
    $.ajax(url,{
        type: 'POST',
         data: dataString
    }).done(function(resp){
        alert(resp);
    }).fail(function(){
        alert("There was an error creating this user");
    });
}

function savemessage(e){
    e.preventDefault();
    var url='message.php';
    var recipient=$('#recp').val();
    var subject=$('#sub').val();
    var message=$('#mess').val();
    var dataString='recc='+recipient+'&user='+name+'&subb='+subject +'&mess='+message; //Request which will be made to server
    recent(recipient,name);
    $.ajax(url,{
        type: 'POST',
        data: dataString,
    }).done(function (resp){
        alert(resp);
    }).fail(function(){
       alert('There was an eror processing your request'); 
    });
    $('#messagearea').css('display','none');
    $('.close').css('display','none');
}

function recent(resp,name){
   var url = 'recent.php';    
   var dataString = 'recp='+resp+'&name='+name; // Data to be sent to recent.php
   $.ajax(url,{
        type: 'POST',
        data: dataString,
    }).done(function (resp){
        console.log(resp);
    }).fail(function(){
       alert('There was an eror processing your request'); 
    });
}

