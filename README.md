#一个多功能自定义的轮播插件
#使用方法：
#一：引用jquery-carousel.0.1.js
#二：在页面中创建轮播插件
#<script>
#	$("#main").myCarousel({
#		className:"#main",		/*必填属性，其它属性可选填*/
#		margin:"50px 0 0 0",
#		backgroundImgs:[{img:'img\/t1.jpg'},{img:'img\/t2.jpg'},{img:'img\/t3.jpg'},{img:'img\/t4.jpg'},{img:'img\/t5.jpg'}]
#	});
#</script>


###################更多属性如下
#width:1000,		//轮播区的宽度
#height:'400px',	//轮播区的高度
#background:'rgb(70,69,118)',	//轮播区的背景颜色
#page:5,		//轮播的页数
#className:'body',	//轮播区所在的类
#margin:'0 auto',	//轮播区的外边距
#btnSize:'40px',		//左右按钮大小
#btnMargin:'20px',	//左右按钮外边距
#btnIsShow:'block',	//左右按钮是否隐藏(none：隐藏；block：显示)
#dotsMarginBottom:'20px',	//轮播点容器的下外边距
#dotBg:'white',	//点的背景颜色
#dotLightBg:'rgb(222,58,58)',	//点的高亮背景颜色
#dotWidth:'15px',	//点的宽高
#dotMargin:'0 5px 0 5px',	//点的外边距
#dotsIsShow:'block',	//点是否隐藏(none：隐藏；block：显示)
#backgroundImgs:[{img:''},{img:''},{img:''},{img:''},{img:''}],	//图片路径数组（注：1、/符号记得转义成\/；2、有多少页就有多少个图片路径）
#checkVelocity:'1s',	//图片切换速度（值在0-1s以内）	
#checkTime:3000,		//图片轮播时间
#carouselType:'shadow'	//轮播的样式（leftRight:左右轮播;shadow:渐变轮播）