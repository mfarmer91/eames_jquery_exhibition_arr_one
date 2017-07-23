//Hide imgs and reveal text when user clicks img

//1, Hide text
$(".description").hide();
//2, User clicks img
$("img").click(function() {
    //2.2, show text
    $(this).next().show();
    //2.2, remove img
    $(this).remove();   
});
    
    


