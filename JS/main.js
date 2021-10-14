$('.accord > ul > li:has(ul)').addClass("has-sub");
		$('.accord > ul > li > a').click(function() {
  		var $accordion = $(this);
  		var checkElement = $(this).next();
  		$accordion.find('li').removeClass('active');
  		$accordion.closest('li').addClass('active');
  	if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    		$accordion.closest('li').removeClass('active');
    		checkElement.slideUp('normal');
  	}
  	if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    		$accordion.find('ul ul:visible').slideUp('normal');
    		checkElement.slideDown('normal');
  	}
  	if (checkElement.is('ul')) {
    		return false;
  	} 
	else {
    		return true;
  	}
	});
