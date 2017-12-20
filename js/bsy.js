$(function(){
	
	var playern= 0;//用户登入情况
    var playnum=200;//初始次数————
 $("#playnum").html(playnum);
	var $zhuanpan=$("#zhuanpan");
var $zp=$("#zhuanpan");
var $btn= $("#btn");
$('.playnum').html(playnum);

var isture= 0;
$("#czhs_2").click(function(){
	$("#top_2").css("height","0rem")
})
$("#czhs_3").click(function(){
	$("#top_3").css("height","0rem")
})

	$("#czbtn").click(function(){
		$("#top").css("height","35rem")	
	});	
	$("#czhs").click(function(){
		$("#top").css("height","0px")
	});
    		
	$("#phb").click(function(){
		$("#top_2").css("height","35rem")
	});
$("#qd").click(function(){
	$("#top_3").css("height","35rem")
});





var clickfunc= function(){
var data =[1,2,3,4,5,6,7,8,9,10]; 
data= data[Math.floor(Math.random()*data.length)];
	
switch(data) {
						case 1:
							rotateFunc(1, 0, '抽到100金币');
							break;
						case 2:
							rotateFunc(2, 30, '运气真棒，抽到 小熊娃娃 一个');
							break;
						case 3:
							rotateFunc(3, 60, '抽到了10金币');
							break;
						case 4:
							rotateFunc(4, 90, '抽到娃娃碎片一个');
							break;
						case 5:
							rotateFunc(5, 120, '抽到50金币');
							break;
						case 6:
							rotateFunc(6, 150, '运气真好，抽到了兔子娃娃');
							break;
													case 7:
							rotateFunc(7, 180, '30金币');
							break;
													case 8:
							rotateFunc(8, 210, '抽到娃娃碎片一个');
							break;
													case 9:
							rotateFunc(9, 240, '50金币');
							break;
													case 10:
							rotateFunc(10, 270, '运气真好，抽到小猪娃娃');
							break;
							
							case 11:
							rotateFunc(10, 300, '30金币');
							break;
							case 12:
							rotateFunc(10, 330, '抽');
							break;
					}
	      
	
	
	
}

$btn.click(function(){
	document.getElementById("btni").src="images/on.png"
	 var down=function (){
	 	
	 	document.getElementById("btni").src="images/off.png"
	 }
	 setTimeout(down,100);
	
})

$btn.click(function(){
  
					if(isture) return; // 如果在执行就退出
					isture = true; // 标志为 在执行
					//先判断是否登录,未登录则执行下面的函数
					
				

					if(1 == 2) {
						$('#playnum').html('0');
						alert("请先登录");
						isture = false;
					} else { //登录了就执行下面
						if(playnum <= 0) { //当抽奖次数为0的时候执行
							alert("豆豆不够了亲");
							$('#playnum').html(0);
							isture = false;
						} else { //还有次数就执行
							playnum = playnum - 100; //执行转盘了则次数减1
							if(playnum <= 0) {
								playnum = 0;
							}
							$('#playnum').html(playnum);
							clickfunc();
						}
					}
				});
var rotateFunc = function(awards, angle, text) {
					isture = true;
			        
					$zp.rotate({
						angle: 0,
						duration: 4000, //旋转时间
						animateTo: angle + 1440, //让它根据得出来的结果加上1440度旋转
						callback: function() {
							isture = false; // 标志为 执行完毕
							alert(text);
						}
					});

}

})
