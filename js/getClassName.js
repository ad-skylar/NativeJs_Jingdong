  
function getName(para,obj){
  var paraA = typeof para;
	paraA = paraA.toLowerCase();
  if(paraA =='function'){
      window.onload =para;
  }
  else if(paraA =="string"){
  	if(para.charAt(0) =="#"){
  		para = para.substring(1);
  		return document.getElementById(para);
	  	}else if(para.charAt(0) =="."){
	  		para = para.substring(1);
  			obj = obj ||document;
	  	  if(obj.getElementByClassName){
             return obj.getElementByClassName(para);
	  	  }
	  	  else{
	  	  	var all = obj.getElementsByTagName('*');
			   	var arrClass = [];
			   	for(var i=0;i<all.length;i++){
	          var arr = all[i].className.split(" ");
	          for(var j=0;j<arr.length;j++){
              if(arr[j] == para )
               	arrClass.push(all[i]) ;
	           }
			  	}
			   	return arrClass;
	  	  }
      }
  	else{
  		obj = obj ||document;
      return obj.getElementsByTagName(para);
  	}
  }
          	
}
    