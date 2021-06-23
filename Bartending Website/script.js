$(document).ready(function(){
    $("#drink").on('change', function(){
        $(".data").hide();
        $("#" + $(this).val()).fadeIn(700);
    }).change();
})