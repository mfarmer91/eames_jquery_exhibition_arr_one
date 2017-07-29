//Hide imgs and reveal text when user clicks img

//1, Hide text
$(".description").hide();
//2, User clicks img

function hideImage() {
    $(this).next().show();
    //2.2, remove img
    $(this).hide(); 
}

function hideText() {
    $(this).hide();
    $(this).prev().show();
}

$("img").click(hideImage);
$(".description").click(hideText);





    


