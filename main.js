$(function(){
	var el = $('h1').eq(0);
	var text = el.text();
	var markup = '';
	for(i = 0; i < text.length; i++) {
		markup += '<span>'+text[i]+'</span>';
	}
	el.html(markup);
});
