<!DOCTYPE html>
<html>
    <head>
        <title>Compose New Message</title>
        <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
        <script type="text/javascript" src="chepo.js"></script>
        <link href="chepo.css" type="text/css" rel="stylesheet" />
    </head>
    <body>
        <h2>Compose Message</h2>
        <form>
            Recipient(s): <input type="text" id= "recp" name="recipient" required/>
            <br><br>
            Subject: <input type="text" id="sub" name="subject" required/><br><br>
            <textarea type="textarea" id= "mess" name="body" placeholder="Compose Message" rows='10' cols='40'></textarea><br>
            <input type="submit" value="Send" id="sennd"/>
        </form>
    </body>
</html>





