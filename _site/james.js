$(document).ready(function() {
    
    
    if (x == 1) {
	    //light
	    document.getElementById('colourHeader').style.color = '#696969';
	    document.getElementById('colourBack').style.backgroundColor = '#FFFAFA';
	    
	    
	    
	    
	    var all = document.getElementsByClassName('colourPara1');
		for (var i = 0; i < all.length; i++) {
		  all[i].style.color = '#696969';
		}
		
		var all = document.getElementsByClassName('colourLink');
		for (var i = 0; i < all.length; i++) {
		  all[i].style.color = '#808080';
		}

	} else {
		//dark
	    document.getElementById('colourHeader').style.color = '#696969';
	    document.getElementById('colourBack').style.backgroundColor = '#D3D3D3';
	    
		var all = document.getElementsByClassName('colourPara1');
		for (var i = 0; i < all.length; i++) {
		  all[i].style.color = '#FFFAFA';
		}
		
		var all = document.getElementsByClassName('colourLink');
		for (var i = 0; i < all.length; i++) {
		  all[i].style.color = '#696969';
		}


	} 
	
	

	

});


