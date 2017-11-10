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