  //不用同步下标的函数封装
	  function public1(obj1,para){
	  	for (var i = 0; i<obj1.length;i++) {
	  	obj1[i].onmouseover =function(){
	  		for (var i = 0; i<obj1.length;i++) {
	  			obj1[i].className = "";
	  		}

             this.className = para;
	    }
	   }
	 }





	  function public3(obj1,para){
	  	for (var i = 0; i<obj1.length;i++) {
	  	obj1[i].onclick =function(){
	  		for (var i = 0; i<obj1.length;i++) {
	  			obj1[i].className = "";
	  		}

             this.className = para;
	    }
	   }
	 }

function public4(object1,para,object2,para2){
				for(var i=0;i<object1.length;i++){
					object1[i].index = i;
				object1[i].onmouseover = function(){
					for(var i=0;i<object1.length;i++){
					 object1[i].className ="";
					 object2[i].className ="";
					}
					this.className =para;
					object2[this.index].className =para2;
				}
					
			}  
			}

