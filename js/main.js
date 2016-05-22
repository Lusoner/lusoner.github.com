'use strict'
document.addEventListener('DOMContentLoaded',function(){
	var oNav=document.querySelector('.nav_button');
	var oCover=document.querySelector('.cover');
	var oCoverTxt=document.querySelector('.cover_content');

	oNav.addEventListener('click',function(){
		if(getStyle(oCover,'display')=='none'&&getStyle(oCover,'opacity')==0){
			addClass(document.documentElement.children[1],'menu_open')
			setPre(oNav,'transform','translate('+(document.documentElement.clientWidth-oNav.offsetWidth)+'px,0)  rotate(180deg)');
			oCover.style.display='block';
			setTimeout(function(){
				oCover.style.opacity=0.9;
				oCover.style.left=0;
			},1);
		}else{
			if(getStyle(oCover,'display')=='block'&&getStyle(oCover,'opacity')==0.9){
				removeClass(document.documentElement.children[1],'menu_open');
				setPre(oNav,'transform','translate(0px,0) rotate(0deg)');
				oCover.style.opacity=0;
				oCover.style.left='-100%';
				setTimeout(function(){
					oCover.style.display='none';
					},1000);
			}
		}
	},false);
},false);
function addClass(obj,sClass){
		if(obj.className){
			var re = new RegExp('\\b'+sClass+'\\b','g');
			if(obj.className.search(re)==-1){
				obj.className+=' '+sClass;
			}
		}else{
			obj.className=sClass;
		}
		obj.className =obj.className.replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
};
function removeClass(obj,sClass){
		if(obj.className){
			var re = new RegExp('\\b'+sClass+'\\b','g');
			obj.className = obj.className.replace(re,'');
			obj.className = obj.className.replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
			if(obj.className==''){
				obj.removeAttribute('class');
			}
		}
}
function getStyle(obj,sName){
	return (obj.currentStyle||getComputedStyle(obj,false))[sName];
}
function setPre(obj,option,value){
	if(option=='transform'){
		obj.style.WebkitTransform=value;
		obj.style.transform=value;
		obj.style.MozTransform=value;
		obj.style.OTransform=value;
		obj.style.msTransform=value;		
	}else{
		if(option=='transition'){
			obj.style.WebkitTransition=value;
			obj.style.transition=value;
			obj.style.MozTransition=value;
			obj.style.OTransition=value;
			obj.style.msTransition=value;	
		}
	}

}
