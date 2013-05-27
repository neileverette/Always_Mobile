$(document).ready(function () {
	console.log($(window).height());
	console.log($(window).width());
	$('#Div1').css('height', $(window).height() * .58);
	$('#Div2').css('height', $(window).height() * .14);
    $('#Div3').css('height', $(window).height() * .14);
    $('#Div4').css('height', $(window).height() * .14);
});

$(window).resize(function () {
	$('#Div1').css('height', $(window).height() * .58);
    $('#Div2').css('height', $(window).height() * .14);
    $('#Div3').css('height', $(window).height() * .14);
    $('#Div4').css('height', $(window).height() * .14);

});

