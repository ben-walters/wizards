var wizard = {
	init: function() {
		this.equalize();
	},
	equalize: function() {
		$('.equalizer').each(function(k,v) {
		    var h = 0;
		    $(this).find('.equalize').each(function(k,v) {
		    	$(this).css('height','auto');
		        var c = $(this).height();
		        if(c>h) {
		            h=c;
		        }
		    });
		    $(this).find('.equalize').css('height',h + 'px');
		});
	}
}

$(function() {
	wizard.init();
});