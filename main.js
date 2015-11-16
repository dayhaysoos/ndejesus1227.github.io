$(document).ready(function() {

    $('#submit').click(function() {

        $.post("send.php", $("#mycontactform").serialize(), function(response) {
            $('#success').html(response);
            //$('#success').hide('slow');
        });
        return false;


    });

});