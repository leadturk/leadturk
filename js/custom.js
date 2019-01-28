$(document).ready(function(){
	console.log("ready");
	var mHeight = $(document).height();
    $(window).scroll(function(){
        var sPosition = $(window).scrollTop();
        console.log(sPosition);
        if(sPosition > (mHeight/2)) {
        	$(".sticky-share").addClass('visible');
        } 
    });
});