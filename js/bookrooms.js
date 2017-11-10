var phone=document.getElementsByClassName('phone')[0];
var re = /^1[3|4|5|8][0-9]\d{4,8}$/;
var testp=document.getElementsByClassName('testp')[0];
phone.onblur=function(){
	if(phone.value){
		if(re.test(phone.value)!=true){
			testp.style.display='block';
			phone.value='';
		}else{
			testp.style.display='none';
			
		}
	}
	
	
}


//显示日期

var datechoose=document.getElementsByClassName('datechoose')[0];
var datechoose2=document.getElementsByClassName('datechoose2')[0];
var time=document.getElementsByClassName('time');
var schedulebox=document.getElementById('schedule-box');
for(var i=0;i<time.length;i++){
	time[0].onclick=function(){
		datechoose.style.display='block';
		
	}
	
	time[1].onclick=function(){
		datechoose2.style.display='block';
		
	}
	
}
	datechoose.onclick=function(){
		datechoose.style.display='none';
	}
	datechoose2.onclick=function(){
		datechoose2.style.display='none';
	}
	schedulebox.onclick=function(){
		schedulebox.style.display='block';
	}
//提交

var btn=document.getElementById('submit');
var ipts=document.getElementsByTagName('input');
btn.onclick=function(){
	var a=this.value;
	for(var i=0;i<ipts.length;i++){
		//if(ipts[2].value!=''&&ipts[3].value!=''&&ipts[4].value!=''&&ipts[5].checked!=false){
			ipts[i].value='';
			ipts[i].checked=false;
		//}
		
	}
	this.value=a;
	
}
