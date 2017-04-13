 function tab(obj1,para,obj2,para2){
	  	for (var i = 0; i<obj1.length;i++){
	  		  obj1[i].index =i;
	  		  obj1[i].onmouseover =function(){
	  		for (var i = 0; i<obj1.length;i++) {
	  			obj1[i].className = "";
	  			obj2[i].className = "";
	  		}

             this.className = para;
             obj2[this.index].className =para2;
	    }
	   }
	 }
