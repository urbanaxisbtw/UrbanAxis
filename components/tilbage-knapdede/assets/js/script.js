document.addEventListener('DOMContentLoaded', function(){

    var backbutton = document.querySelector('.tilbage-knap');

    backbutton.addEventListener('click', function(){
        history.back();
    });

});