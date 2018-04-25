$(document).ready(function() {
    $("#submit").click(function(){
        var formData = $('form').serialize();
        alert(formData)
    }); 
});