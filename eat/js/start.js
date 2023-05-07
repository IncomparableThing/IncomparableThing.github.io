var citylist = ["黄焖鸡","兰州拉面","麻辣烫","香锅","爽爽甜品","沙县","忆味江南",
							"百味","Mr.大叔","荣记螺蛳粉","木桶饭","强记","胜记","水果沙拉","大骨汤",
							"潮汕快餐","猪脚饭","Q堡堡"];
                            
var mytime = null;
			
function show(){
	var num = Math.floor(Math.random() * citylist.length);
				 window.document.getElementById("box").innerHTML = citylist[num];
				 mytime = setTimeout("show()",50);
}
			
function doit(){
	var bt = window.document.getElementById("bt");
	if(mytime == null){
		show();
		bt.innerHTML = "停止";
	}else{
		clearTimeout(mytime);
		mytime = null;
		bt.innerHTML = "开始";
		}
	}