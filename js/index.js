$("#mode").click(function (e) { 
    e.preventDefault();
    $("#body").toggleClass('dark-mode')

})


var main_modal = document.getElementById("main_modal");
var main_btn = document.getElementById("main_btn");

// main_btn.click(function() {
//     // $(".pro").show(1000);
//     main_modal.hide;
// });


function myFunction() {
    document.getElementById("main_modal").style.display = "none";
}

function myFunction2() {
    location.reload();
}