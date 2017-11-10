window.onload=function(){
	var banner=document.getElementsByClassName('banner')[0];
	var oUl=banner.getElementsByTagName('ul')[0];
	var aLis=oUl.getElementsByTagName('li');
	var oOl=banner.getElementsByTagName('ol')[0];
	var oLis=oOl.getElementsByTagName('li');
	var left=banner.getElementsByTagName('span')[0];
	var right=banner.getElementsByTagName('span')[1];
	var num=0;
	var timer;
	clearInterval(timer);
	
	timer=setInterval(function(){
		change(1,aLis.length,0);
	},2000)
	
	banner.onmouseover=function(){
		clearInterval(timer);
		right.style.opacity='1';
		left.style.opacity='1';
	}
	
	banner.onmouseout=function(){
		timer=setInterval(function(){
			change(1,aLis.length,0);
		},2000)
		right.style.opacity='0';
		left.style.opacity='0';
	}
	
	right.onclick=function(){
		change(1,aLis.length,0);
	}
	left.onclick=function(){
		change(-1,-1,aLis.length-1);
		
	}
	for(var i=0;i<oLis.length;i++){
		oLis[i].index=i;
		oLis[i].onclick=function(){
			
			for(var j=0;j<aLis.length;j++){
				aLis[j].style.opacity=0;
				oLis[j].className='';
			}
			aLis[this.index].style.opacity=1;
			oLis[this.index].className='active';
			num=this.index;
		}
	}
	
	//封装函数
	function change(bl,iTarget,value){
		num=num+bl;
		if(num===iTarget){
			num=value;
		}
		for(var j=0;j<aLis.length;j++){
			aLis[j].style.opacity=0;
			oLis[j].className='';
		}
		aLis[num].style.opacity=1;
		oLis[num].className='active';
	}
	
	
	
	
	



	//回到頂部的出現时间
	/*$(document).scroll(function() {
		if($("body").scrollTop()>=screenTop/2){
			$(".point").animate({"bottom":"20px"})
		}else if($("body").scrollTop()<=screenTop/2){
			$(".point").animate({"bottom":"-120px"})
		}
		
		
	})*/
	
	var point=document.getElementsByClassName('point')[0];
	var body=document.getElementsByTagName('body')[0];
	var nav=document.getElementsByTagName('nav')[0];
	var screenH = document.documentElement.clientHeight || document.body.clientHeight;
	document.onscroll = function(){
			//获取滚轮高度
			var scrollH = document.documentElement.scrollTop || document.body.scrollTop;
			if(scrollH>=screenH/2){
				point.style.bottom='20px';
				nav.className='navactive';
			}else{
				point.style.bottom='-120px';
				nav.className='';
			}
			
		point.onclick=function(){
			/*scrollH=0;*/
			console.log("看看有没有"+scrollH)
			timerp=setInterval(function(){
	           var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	           var ispeed=Math.floor(-scrollTop/6);
	           console.log(ispeed)
	           if(scrollTop==0){
	               clearInterval(timerp);
	           }
	           document.documentElement.scrollTop=document.body.scrollTop=scrollTop+ispeed;
	       	},30)
			
			
			
			
		}
	}
	
	
	//客服
	var service=document.getElementsByClassName('service')[0];
	var skefu=document.getElementsByClassName('skefu')[0];
	var img=skefu.getElementsByTagName('img')[0];
	var timerkefu;
	skefu.onmouseover=function(){
		clearTimeout(timerkefu);
		move(img,{"right":-50});
		move(service,{"right":0});
	}
	skefu.onmouseout=function(){
		move(img,{"right":0});
		clearTimeout(timerkefu);
		timerkefu=setTimeout(function(){
			move(service,{"right":-180});
		},1000)
	}
	service.onmouseover=function(){
		clearTimeout(timerkefu);
		move(service,{"right":0});
		move(img,{"right":-50});
	}
	service.onmouseout=function(){
		clearTimeout(timerkefu);
		move(service,{"right":-180});
		move(img,{"right":0});
	}
	
	
	//弹出框
	var pKefu=service.getElementsByTagName('p')[0];
	var dialogue=document.getElementsByClassName('dialogue')[0];
	var dText=dialogue.getElementsByClassName('dText')[0];
	var dIpt=dialogue.getElementsByTagName('input')[0];
	var dSbtn=dialogue.getElementsByTagName('button')[0];
	var dCbtn=dialogue.getElementsByTagName('button')[1];
	pKefu.onclick=function(){
		dialogue.style.display="block";
	}
	document.onkeydown=function(ev){
		var e=ev||window.event;
		if(e.keyCode===13){
			dText.innerHTML+="<p>"+dIpt.value+"</p>"
			dIpt.value="";
		}
	}
	dSbtn.onclick=function(){
		dText.innerHTML+="<p>"+dIpt.value+"</p>"
		dIpt.value="";
	}
	dCbtn.onclick=function(){
		dialogue.style.display="none";
		dIpt.value="";
		dText.innerHTML='';
	}
	
	
	
	
	//数据
	var rPics=document.getElementsByClassName("rPics")[0];
	var cNav=document.getElementsByClassName('cNav')[0];
	var lis=cNav.getElementsByTagName('li');
	var ul=rPics.getElementsByTagName('ul')[0];
	var str='';
	var uls=rPics.getElementsByTagName('ul');
		
		if(window.XMLHttpRequest){
			var xhr=new XMLHttpRequest();
		}else{
			var xhr=new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		xhr.open("GET","../js/roomcenterdata.txt",true);
		xhr.send();
		xhr.onreadystatechange=function(){
			if(xhr.readyState===4&&xhr.status===200){
				
				var data=JSON.parse(xhr.responseText);
				console.log(data);
				ul.innerHTML='';
				for(var i=0;i<data.length;i++){
					str+="<li><div class='hvr-grow hvr-curl-bottom-right'><img src='"+data[i].src+"'></div><p>"+data[i].val+"</p></li>"
				}
					ul.innerHTML=str;
				
				
				
			}
		}
		
		
	
	
	
	
	for(var j=0;j<lis.length;j++){
		lis[j].index=j
		lis[j].onclick=function(){
			for(var j=0;j<lis.length;j++){
				lis[j].className='';
			}
		
			this.className='libg';
			
			ul.style.top=this.index*-712+"px";
			
		}
	}
	
	
}
