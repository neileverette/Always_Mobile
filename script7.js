$(document).ready(function () {
	fadeOut(); // fades the header out
	fadeIn();
});


function fadeOut(){
	$('.title').delay(3000).fadeTo(1000, 0);
	//fadeIn();
}

function fadeIn(){
	$(document).click(function(){
	$('.title').fadeTo(1500, 100 );
	fadeOut();
	})
	
	
	}