$(document).ready(function(){
    $('#login').on('click',login);
    $('#newMail').on('click',compose);
    $('#Submit').on('click', createUser);
    $('#send').on('click',savemessage);
    $('#logout').on('click',logout);
});

/*function compose(e){
   $('#compose').show();
 // var down = new MouseEvent('mousedown');
 //   $('#compose').dispatchEvent(down);
    e.preventDefault();
   console.log('clicked');
}*/


function login(e){
    e.preventDefault();
    var url='chepoLogIn.php';
    var name=$('#name').val();
    var password=$('#password').val();
    var dataString='uname='+name+'&pass='+password; //Request which will be made to server
    // $('#head').load('message.html'); 
    $.ajax(url,{
        type: 'POST',
        data: dataString,
    }).done(function (resp){
        //document.getElementById('head').innerHTML='<object type="text/html" data="message.html" ></object>';
     /* document.getElementById('head').innerHTML=resp;*/
       if (resp==true){
         //  document.getElementById('head').innerHTML='<object type="text/html" data="message.html" ></object>';
       $('#head').load('message.html');
        }
        else if (resp==false){
            $('#name').addClass('error');
            $('#password').addClass('error');
            $('#error').append('<h3 class="error">Please Enter a Valid Username and Password</h3>')
        }
    }).fail(function(){
       console.log('fail'); 
    });
    
}

function logout(){
    $('#head').load('index.html');
    console.log('logout');
}
function compose(){
    var comp = $('#messagearea');
    console.log(comp)
    var span = document.getElementsByClassName("close")[0];
    span.onclick=function(){
        $('.close').css('display','none');
        comp.css('display','none');
    }
    comp.css('display','Block');
    $('.close').css('display','block');
}

function createUser(e){
     e.preventDefault();
     console.log('User created');
}

function savemessage(e){
    e.preventDefault();
    var url='message.php';
    var recipient=$('#recp').val();
    var subject=$('#sub').val();
    var message=$('#mes').val();
    var name=$('#name').val();
    var dataString='recc='+recipient+'&subb='+subject +'&mess='+message; //Request which will be made to server
    $.ajax(url,{
        type: 'POST',
        data: dataString,
    }).done(function (resp){
        
            console.log(resp);

    }).fail(function(){
       console.log('FFail'); 
    });
    }
