$(function(){
	$('ul#stepList > li').hide();
	$('#stepList > li:first-child').addClass('active');
	var widthNumber = $('#stepList li:first-child ul.number').width();
	var paddingUl = widthNumber + 40;
	$('ul.listDenominator').css('padding-left',paddingUl);
	$('ul.numList01').css('padding-left',paddingUl);
	$('ul.numList01.lastStep li').css('float','right');
	$('ul.numList01.lastStep li').css('border-bottom','none');
	
	window.stepActive = 0;
	var maxSize = $('ul#stepList > li').length;
	$('ul#stepList > li').eq(0).addClass('active');
	$('p.nextStep').click( function(){
		window.stepActive = window.stepActive + 1;
		if(stepActive < maxSize){
			$('ul#stepList > li').removeClass('active');
			$('ul#stepList > li').eq(stepActive).addClass('active');
		}
	});
});