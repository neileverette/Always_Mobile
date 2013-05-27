
$(document).ready(function () {
	setTimeout(scrollTo,200,0,1);
    $('#Div1').css('height', $(window).height() * .58);
    $('#Div2').css('height', $(window).height() * .14);
    $('#Div3').css('height', $(window).height() * .14);
    $('#Div4').css('height', $(window).height() * .14);
});

$(window).resize(function () {
//    $('.imageGradient').css('height', $(window).height() * .14);
    $('#Div1').css('height', $(window).height() * .58);
    $('#Div2').css('height', $(window).height() * .14);
    $('#Div3').css('height', $(window).height() * .14);
    $('#Div4').css('height', $(window).height() * .14);

});

