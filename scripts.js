$(document).ready(function() {
    $("#submit").click(function(){
        var formData = $('form').serialize();
        var connection = new WebSocket('ws://169.254.90.228:9999');
        connection.onopen = function () {
            connection.send(formData); // Send the message 'Ping' to the server
        };
        alert(formData)
    }); 
});