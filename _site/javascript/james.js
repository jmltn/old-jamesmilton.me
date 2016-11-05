$(document).ready(function() {
	
    var x = Math.floor((Math.random() * 2) + 1);
    
    
    if (x == 1) {
	    //light
	    
	    
	    
	    document.getElementById('colourBack').style.backgroundColor = '#FFFAFA';
	    
	    var all = document.getElementsByTagName('h1') && document.getElementsByTagName('h3');
		for (var i = 0; i < all.length; i++) {
		  all[i].style.color = '#696969';
		}
	    
	    var all = document.getElementsByTagName('p');
		for (var i = 0; i < all.length; i++) {
		  all[i].style.color = '#696969';
		}
		
		var all = document.getElementsByTagName('a');
		for (var i = 0; i < all.length; i++) {
		  all[i].style.color = '#808080';
		}

	} else {
		//dark
	    
	    
	    document.getElementById('colourBack').style.backgroundColor = '#D3D3D3';
	    
	    var all = document.getElementsByTagName('h1') && document.getElementsByTagName('h3');
		for (var i = 0; i < all.length; i++) {
		  all[i].style.color = '#696969';
		}
	    
		var all = document.getElementsByTagName('p');
		for (var i = 0; i < all.length; i++) {
		  all[i].style.color = '#FFFAFA';
		}
		
		var all = document.getElementsByTagName('a');
		for (var i = 0; i < all.length; i++) {
		  all[i].style.color = '#696969';
		}


	} 
	
	
//     $(".slidingDiv").hide();
	
	$('.show_hide').click(function( e ){
        var SH = this.SH^=1; // "Simple toggler"
        $(this).css({backgroundPosition:'0 '+ (SH?-18:0) +'px'})
               .next(".slidingDiv").slideToggle();
	});

	

});
