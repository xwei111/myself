	setTimeout(function(){
		$('#div1').css({'display':'none'});
	},1000);
	
	//音乐
	$('.music').tap(function(){
		$('.music').each(function(i){
			$('.music').eq(i).css({'display':'none'});
			$('.music').removeClass('ani');
		})
		$('#audio')[0].pause();
		$('.music1').css({'display':'block'});
		//$('.music').attr('src',"img/musicBtnOff.png");
		
	});
	$('.music1').tap(function(){
		$('.music').each(function(i){
			$('.music').eq(i).css({'display':'block'});
			$('.music').addClass('ani');
		});
		$('#audio')[0].play();
		$('.music1').css({'display':'none'});
		//$('.music').attr('src',"img/musicBtnOff.png");
		
	})

