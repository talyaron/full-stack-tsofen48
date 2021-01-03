$(document).ready(function(){
	$('.category_item').click(function(){
		var category = $(this).attr('id');
	
		if(category) =='all'){
			$('.flower_item').addClass('hide');
			setTimeout(function(){
				$('.flower_item').removeClass('hide');
			}, 300);
		} else {
			$('.flower_item').addClass('hide');
			setTimeout(function(){
				$('.' + category).removeClass('hide');
			}, 300);

		}

	});
});