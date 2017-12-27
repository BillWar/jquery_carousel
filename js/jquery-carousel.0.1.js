;(function(method){
	method(window,window.document,jQuery);
}(function(win,doc,$){
	$.fn.myCarousel = function(options){
		var settings = {
			width:1000,		//轮播区的宽度
			height:'400px',	//轮播区的高度
			background:'rgb(70,69,118)',	//轮播区的背景颜色
			page:5,		//轮播的页数
			className:'body',	//轮播区所在的类
			margin:'0 auto',	//轮播区的外边距
			btnSize:'40px',		//左右按钮大小
			btnMargin:'20px',	//左右按钮外边距
			btnIsShow:'block',	//左右按钮是否隐藏(none：隐藏；block：显示)
			dotsMarginBottom:'20px',	//轮播点容器的下外边距
			dotBg:'white',	//点的背景颜色
			dotLightBg:'rgb(222,58,58)',	//点的高亮背景颜色
			dotWidth:'15px',	//点的宽高
			dotMargin:'0 5px 0 5px',	//点的外边距
			dotsIsShow:'block',	//点是否隐藏(none：隐藏；block：显示)
			backgroundImgs:[{img:''},{img:''},{img:''},{img:''},{img:''}],	//图片路径数组（注：1、/符号记得转义成\/；2、有多少页就有多少个图片路径）
			checkVelocity:'1s',	//图片切换速度（值在0-1s以内）	
			checkTime:3000,		//图片轮播时间
			carouselType:'shadow'	//轮播的样式（leftRight:左右轮播;shadow:渐变轮播）
		}
		$.extend(settings,options);
		$("<style/>").html("div,span,ul,li{padding:0;margin:0} @font-face{font-family:'mycarouselFont';src: url('data:application/octet-stream;base64,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') format('woff'),url('data:application/octet-stream;base64,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sEsssgABQSstsEwssgEAQSstsE0ssgEBQSstsE4ssgAAQistsE8ssgABQistsFAssgEAQistsFEssgEBQistsFIssgAAPistsFMssgABPistsFQssgEAPistsFUssgEBPistsFYssgAAQCstsFcssgABQCstsFgssgEAQCstsFkssgEBQCstsFossgAAQystsFsssgABQystsFwssgEAQystsF0ssgEBQystsF4ssgAAPystsF8ssgABPystsGAssgEAPystsGEssgEBPystsGIssDcrLrErARQrLbBjLLA3K7A7Ky2wZCywNyuwPCstsGUssAAWsDcrsD0rLbBmLLA4Ky6xKwEUKy2wZyywOCuwOystsGgssDgrsDwrLbBpLLA4K7A9Ky2waiywOSsusSsBFCstsGsssDkrsDsrLbBsLLA5K7A8Ky2wbSywOSuwPSstsG4ssDorLrErARQrLbBvLLA6K7A7Ky2wcCywOiuwPCstsHEssDorsD0rLbByLLMJBAIDRVghGyMhWUIrsAhlsAMkUHiwARUwLQBLuADIUlixAQGOWbABuQgACABjcLEABUKyAAEAKrEABUKzCgIBCCqxAAVCsw4AAQgqsQAGQroCwAABAAkqsQAHQroAQAABAAkqsQMARLEkAYhRWLBAiFixA2REsSYBiFFYugiAAAEEQIhjVFixAwBEWVlZWbMMAgEMKrgB/4WwBI2xAgBEAAA=') format('truetype');} .mycarouselFont{font-family:mycarouselFont;font-weight:normal;}").appendTo("head");
		$("<div/>").css('position','relative').css('background',settings.background).css('margin',settings.margin).css('width',settings.width+"px").css('height',settings.height).css('overflow','hidden').addClass("myCarousel").mouseover(function(){
			window.clearInterval(time);
		}).mouseleave(function(){
			autoPlay();
		}).appendTo(settings.className);
		if(settings.carouselType==='leftRight'){
			$("<ul/>").css('background',settings.background).css('width',settings.width*settings.page+"px").css('height',settings.height).css('position','absolute').css('left','0').css('transition','all '+settings.checkVelocity+'').addClass("myCarousel_ul").appendTo(".myCarousel");
			for(var i=0;i<settings.page;i++){
				$("<li/>").css('background',settings.background+'  no-repeat').css('background-image',"url("+settings.backgroundImgs[i].img+")").css('background-size','cover').css('background-position','center 0').css('list-style','none').css('width',settings.width+"px").css('height',settings.height).css('float','left').addClass("myCarousel_li").appendTo(".myCarousel_ul");
			}
		} else if(settings.carouselType==='shadow'){
			$("<ul/>").css('background',settings.background).css('width',settings.width+"px").css('height',settings.height).css('position','relative').addClass("myCarousel_ul").appendTo(".myCarousel");
			for(var i=0;i<settings.page;i++){
				$("<li/>").css('background',settings.background+'  no-repeat').css('background-image',"url("+settings.backgroundImgs[i].img+")").css('transition','all '+settings.checkVelocity+'').css('background-size','cover').css('background-position','center 0').css('position','absolute').css('left','0').css('opacity','0').css('list-style','none').css('width',settings.width+"px").css('height',settings.height).addClass("myCarousel_li").appendTo(".myCarousel_ul");
			}
			$(".myCarousel_li:eq(0)").css('opacity','1');
		}
		$("<button/>").html('&#xe800').addClass("mycarouselFont").css('display',settings.btnIsShow).css('margin-left',settings.btnMargin).css("font-size",settings.btnSize).css('left','0').css('color','white').css('background','rgba(0,0,0,0)').css('border','none').css('outline','none').css('cursor','pointer').css('position','absolute').css('top','50%').css('transform','translateY(-50%)').click(function(){
			myCarousel(false);
		}).appendTo(".myCarousel");
		$("<button/>").html('&#xe801').addClass("mycarouselFont").css('display',settings.btnIsShow).css('margin-right',settings.btnMargin).css("font-size",settings.btnSize).css('right','0').css('color','white').css('background','rgba(0,0,0,0)').css('border','none').css('outline','none').css('cursor','pointer').css('position','absolute').css('top','50%').css('transform','translateY(-50%)').click(function(){
			myCarousel(true);
		}).appendTo(".myCarousel");
		$("<div/>").addClass('myCarousel_dots').css('display',settings.dotsIsShow).css('color','white').css('margin-bottom',settings.dotsMarginBottom).css('position','absolute').css('bottom','0').css('left','50%').css('transform','translateX(-50%)').appendTo(".myCarousel");
		
		for(var i=0;i<settings.page;i++){
			/*$("<li/>").css('background',settings.background+'  no-repeat').css('background-image',"url("+settings.backgroundImgs[i].img+")").css('background-size','cover').css('background-position','center 0').css('list-style','none').css('width',settings.width+"px").css('height',settings.height).css('float','left').addClass("myCarousel_li").appendTo(".myCarousel_ul");*/
			$("<span/>").attr('index',i).css('background',settings.dotBg).css('cursor','pointer').css('list-style','none').css('margin',settings.dotMargin).css('width',settings.dotWidth).css('height',settings.dotWidth).css('border-radius',settings.dotWidth).css('float','left').addClass("myCarousel_dot").click(function(){
				index = $(this).attr('index');
				$(".myCarousel_ul").css({'left':'-'+100*index+'%'});
				$(".myCarousel_dot").css("background",settings.dotBg);
				$(".myCarousel_dot:eq("+index+")").css("background",settings.dotLightBg);
			}).appendTo(".myCarousel_dots");
		}
		$(".myCarousel_dot:eq(0)").css("background",settings.dotLightBg);
		var index = 0;
		var time;
		function myCarousel(flag){
			if(flag){
				index++;
			} else {
				index--;
			}
			if(index>settings.page){
				index=0;
			} else if(index<0) {
				index = settings.page-1;
			} else if(index*100>=settings.page*100){
				index=0;
			}
			if(settings.carouselType==='leftRight'){
				$(".myCarousel_ul").css({'left':'-'+100*index+'%'});
			} else if(settings.carouselType==='shadow'){
				$(".myCarousel_li").css('opacity','0');
				$(".myCarousel_li:eq("+index+")").css('opacity','1');
			}
			
			$(".myCarousel_dot").css("background",settings.dotBg);
			$(".myCarousel_dot:eq("+index+")").css("background",settings.dotLightBg);
		}
		//自动切换
		function autoPlay(){
			time = window.setInterval(function(){
				myCarousel(true);
			},settings.checkTime);
		}
		autoPlay();
	}
}));