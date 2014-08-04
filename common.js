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
	},
	tabs: function() {
		$('.tabs a').click(function(e) {
  			if(!$(this).hasClass('active')) {
  				var ind = $(this).index();
  				//remove old active classes
  				$(this).closest('.tabs-tabs').find('.active').removeClass('active');
  				$(this).closest('.tabs').find('.tabs-content .active').removeClass('active');
  				$(this).addClass('active');
  				$(this).closest('.tabs').find('.tabs-content li[nth-child="' + ind+1 + '"]').addClass('active');
  			}
		});
	}
}

$(function() {
	wizard.init();
});