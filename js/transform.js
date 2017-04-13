function transLate(obj1,obj2){
	for(var i=0;i<obj1.length;i++){
 			obj1[i].index=i;
 			obj2[i].me=i;
 			obj1[i].onmouseover=function(){
 				this.style.cssText="transition: .5s;transform:translate(0,-6px) ;"
 				obj2[this.index].style.cssText="color: red;"
 			}
 			obj1[i].onmouseout=function(){
				this.style.cssText="";
			obj2[this.index].style.cssText="color: #666;";
			}		
 			obj2[i].onmouseover=function(){
 				this.style.cssText="color: red;";
 				obj1[this.me].style.cssText="transition: .5s;transform:translate(0,-6px) ;";
 			}			
			obj2[i].onmouseout=function(){
				this.style.cssText="color: #666;";
			obj1[this.me].style.cssText="";
			
		}
	}
}

function transLate2(obj1,obj2){
	for(var i=0;i<obj1.length;i++){
 			obj1[i].index=i;
 			obj2[i].me=i;
 			obj1[i].onmouseover=function(){
 				this.style.cssText="transition: .5s;transform:translate(-10px,0) ;";
 			}
 			obj1[i].onmouseout=function(){
				this.style.cssText="";
			}		
 			obj2[i].onmouseover=function(){
 				obj1[this.me].style.cssText="transition: .5s;transform:translate(-6px,0) ;";
 			}			
			obj2[i].onmouseout=function(){
			obj1[this.me].style.cssText="";
			
		}
	}
}
