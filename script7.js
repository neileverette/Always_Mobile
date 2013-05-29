$(document).ready(function () {
	
	$('#filter').css('display', 'none');
	filter();
});

function filter(){
	$('#dotOne').click(function() {
		$('#filter').toggle('slide', 500);
		filter();
	});
}