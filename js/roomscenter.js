var data = [{
		"src": "../images/pic1.jpg",
		"val":"海景客房"
	},
	{
		"src": "../images/pic2.jpg",
		"val":"尊贵露台海景客房"
	},
	{
		"src": "../images/pic3.jpg",
		"val":"尊贵海景客房"
	},
	{
		"src": "../images/pic4.jpg",
		"val":"瑰丽豪华海景客房"
	},
	{
		"src": "../images/pic5.jpg",
		"val":"尊贵海景客房"
	},
	{
		"src": "../images/pic6.jpg",
		"val":"高级海景客房"
	},
	{
		"src": "../images/pic7.jpg",
		"val":"尊贵海景客房"
	},
	{
		"src": "../images/pic8.jpg",
		"val":"瑰丽豪华海景客房"
	},
	{
		"src": "../images/pic9.jpg",
		"val":"尊贵海景客房"
	},
	{
		"src": "../images/pic10.jpg",
		"val":"尊贵海景客房"
	},
	{
		"src": "../images/pic11.jpg",
		"val":"瑰丽豪华海景客房"
	},
	{
		"src": "../images/pic12.jpg",
		"val":"尊贵海景客房"
	},
	{
		"src": "../images/pic13.jpg",
		"val":"尊贵海景客房"
	},
	{
		"src": "../images/pic14.jpg",
		"val":"瑰丽豪华海景客房"
	},
	{
		"src": "../images/pic15.jpg",
		"val":"尊贵海景客房"
	},{
		"src": "../images/pic16.jpg",
		"val":"尊贵海景客房"
	},
	{
		"src": "../images/pic17.jpg",
		"val":"瑰丽豪华海景客房"
	},
	{
		"src": "../images/pic18.jpg",
		"val":"尊贵海景客房"
	},{
		"src": "../images/pic19.jpg",
		"val":"尊贵海景客房"
	},
	{
		"src": "../images/pic20.jpg",
		"val":"瑰丽豪华海景客房"
	},
	{
		"src": "../images/pic21.jpg",
		"val":"尊贵海景客房"
	},{
		"src": "../images/pic22.jpg",
		"val":"尊贵海景客房"
	},
	{
		"src": "../images/pic23.jpg",
		"val":"瑰丽豪华海景客房"
	},
	{
		"src": "../images/pic24.jpg",
		"val":"尊贵海景客房"
	},{
		"src": "../images/pic25.jpg",
		"val":"尊贵海景客房"
	},
	{
		"src": "../images/pic26.jpg",
		"val":"瑰丽豪华海景客房"
	},
	{
		"src": "../images/pic27.jpg",
		"val":"尊贵海景客房"
	},{
		"src": "../images/pic28.jpg",
		"val":"尊贵海景客房"
	},
	{
		"src": "../images/pic29.jpg",
		"val":"瑰丽豪华海景客房"
	},
	{
		"src": "../images/pic30.jpg",
		"val":"尊贵海景客房"
	},
];
window.onload=function(){
	var rPics=document.getElementsByClassName("rPics")[0];
	var cNav=document.getElementsByClassName('cNav')[0];
	var lis=cNav.getElementsByTagName('li');
	var ul=rPics.getElementsByTagName('ul')[0];
	var str='';
	var uls=rPics.getElementsByTagName('ul');
		
	for(var i=0;i<data.length;i++){
			str+="<li><img src='"+data[i].src+"'><p>"+data[i].val+"</p></li>"
	}
		ul.innerHTML=str;
	for(var j=0;j<lis.length;j++){
		lis[j].index=j
		lis[j].onclick=function(){
			for(var j=0;j<lis.length;j++){
				lis[j].className='';
			}
		
			this.className='libg';
			/*move(ul,{"top":this.index*-713})*/
			ul.style.top=this.index*-712+"px";
			
		}
	}
	
}
