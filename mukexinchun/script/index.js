window.onload=function(){
	console.log(document.body.clientWidth)
	//获取元素
	var music=document.getElementById('music'),
		audio=document.getElementsByTagName('audio')[0];
	var page1=document.getElementById('page1'),
		page2=document.getElementById('page2'),
		page3=document.getElementById('page3');
	//音乐播放结束 转动停止
	audio.addEventListener('ended',function(event){
		music.setAttribute('class','');
	},false)
	//点击控制音乐的播放和图片的转动
	music.addEventListener('touchstart',function(event){
		if(audio.paused){
			audio.play();
			this.setAttribute('class','play');
			// this.style.animationPlayState="running";
			// this.style.webkitAnimationPlayState="running";
		}else{
			audio.pause();
			this.setAttribute('class','');
			// this.style.animationPlayState="paused";
			// this.style.webkitAnimationPlayState="paused";
		}
	},false)
	//点击屏幕，欢迎新年！
	page1.addEventListener('touchstart',function(event){
		this.style.display ="none";
		page2.style.display="block";
		page3.style.display="block";
		page3.style.top    ="100%";
		setTimeout(function(){
			page2.setAttribute('class','page fadeOut');
			page3.setAttribute('class','page fadeIn');
		},5500)
	},false)











}