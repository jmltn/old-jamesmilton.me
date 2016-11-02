$(document).ready(function() {
	
    var x = Math.floor((Math.random() * 2) + 1);
    
    
    if (x == 1) {
	    //light
	    document.getElementById('colourHeader').style.color = '#808080';
	    document.getElementById('colourBack').style.backgroundColor = '#FFFAFA';
	    
	    
	    
	    
	    var all = document.getElementsByClassName('colourPara1');
		for (var i = 0; i < all.length; i++) {
		  all[i].style.color = '#708090';
		}
		
		var all = document.getElementsByClassName('colourLink');
		for (var i = 0; i < all.length; i++) {
		  all[i].style.color = '#FFE4E1';
		}

	} else {
		//dark
	    document.getElementById('colourHeader').style.color = '#708090';
	    document.getElementById('colourBack').style.backgroundColor = '#D3D3D3';
	    
		var all = document.getElementsByClassName('colourPara1');
		for (var i = 0; i < all.length; i++) {
		  all[i].style.color = '#808080';
		}
		
		var all = document.getElementsByClassName('colourLink');
		for (var i = 0; i < all.length; i++) {
		  all[i].style.color = '#2F4F4F';
		}


	} 
});
