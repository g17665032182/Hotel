var middle=document.getElementById('middle');
var ul=middle.getElementsByTagName('ul')[0];
var str='';
var left='';
var right='';
if(window.XMLHttpRequest){
	var xhr=new XMLHttpRequest();
	
}else{
	var xhr=new ActiveXObject("Microsoft.XMLHTTP");
	
}
//xhr.open("GET","../js/newsdata.txt",true);
xhr.open("GET","../js/newsdatajson.json",true);
xhr.send();
//等待页面加载完成，就是打开页面
xhr.onreadystatechange=function(){
	if(xhr.readyState===4&&xhr.status===200){
		var data=JSON.parse(xhr.responseText);
		//var data=xhr.responseText;
		console.log(data.one)
		ul.innerHTML='';
		
			for(var a=0;a<data.one.src.length;a++){
				left+="<img src='"+data.one.src[a]+"' alt='' />"
			}
			
			for(var b=0;b<data.one.href.length;b++){
				right+="<li> <a href='"+data.one.href[b]+"'><h4>"+data.one.title[b]+"</h4></a> <time>"+data.one.time[0]+"</time> <p>"+data.one.val[b]+"</p> </li>  "
			}
			var str1="<li class='clearfix'><div class='left'>"+left+"</div> <div class='right'><ol>"+right+"</ol></div> <li>"
		//*************************************
			 var left1='';
			 var  right1='';
			for(var a=0;a<data.two.src.length;a++){
				left1+="<img src='"+data.two.src[a]+"' alt='' />"
			}
			
			for(var b=0;b<data.two.href.length;b++){
				right1+="<li> <a href='"+data.two.href[b]+"'><h4>"+data.two.title[b]+"</h4></a> <time>"+data.two.time[0]+"</time> <p>"+data.two.val[b]+"</p> </li>  "
			}
			var str2="<li class='clearfix'><div class='left'>"+left1+"</div> <div class='right'><ol>"+right1+"</ol></div> <li>"
		//**********************************************
		
			var left2='';
			var right2='';
			for(var a=0;a<data.three.src.length;a++){
				left2+="<img src='"+data.three.src[a]+"' alt='' />"
			}
			
			for(var b=0;b<data.three.href.length;b++){
				right2+="<li> <a href='"+data.three.href[b]+"'><h4>"+data.three.title[b]+"</h4></a> <time>"+data.three.time[0]+"</time> <p>"+data.three.val[b]+"</p> </li>  "
			}
			var str3="<li class='clearfix'><div class='left'>"+left2+"</div> <div class='right'><ol>"+right2+"</ol></div> <li>"
		
		ul.innerHTML=str1+str2+str3;
	}
}


//点击换bg
var content=document.getElementsByClassName('content')[0];
var oUl=content.getElementsByTagName('ul')[0];
var lis=oUl.getElementsByTagName('li');
for(var i=0;i<lis.length;i++){
	lis[i].index=i;
	lis[i].onclick=function(){
		for(var i=0;i<lis.length;i++){
			lis[i].className='';
		}
		this.className='bg';
		ul.style.top=(this.index*-580)+"px";
	}
	
	
}
