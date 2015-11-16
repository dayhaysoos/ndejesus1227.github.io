$(document).ready(function() {

    $('#submit').click(function() {

        $.post("send.php", $("#contact-form").serialize(), function(response) {
            $('#success').html(response);
            //$('#success').hide('slow');
        });
        return false;


    });

});