$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 50) {
    	$('#nav').addClass('shrink');
		$('#nav').removeClass('navbar-light');
		$('#nav').addClass('navbar-dark');
    }
    else {
		$('#nav').removeClass('shrink');
		$('#nav').removeClass('navbar-dark');
		$('#nav').addClass('navbar-light');
    }
  });
});