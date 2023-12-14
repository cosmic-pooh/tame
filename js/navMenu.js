$(".openbtn2").click(function () {
    if($(this).hasClass('active')){
        $(this).toggleClass('active');
        $('nav').fadeOut();
        $('spNav').css('opacity',.8);
    }else {
        $(this).toggleClass('active');
        $('nav').fadeIn();
        $('nav').css('display','flex');
        $('nav').css('background-color','#EAF3F3');
        $('spNav').css('opacity',1);
    }
});