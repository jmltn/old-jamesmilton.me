$(document).ready(function(){
	$("#smile").click(function(){
        $(".toggle").toggle("slow");
    });
    
    
    
    var x = Math.floor(Math.random()*(5)+1); 
    //maroon
    if (x == 1) {
	    document.getElementById('mainSquare1').style.backgroundColor = '#d37a6f';
	    document.getElementById('smile').style.color = '#d37a6f';
	}
	//blue
	else if (x == 2) {
	    document.getElementById('mainSquare1').style.backgroundColor = '#89b5ea';
	    document.getElementById('smile').style.color = '#89b5ea';
	}
	//purple
	else if (x == 3) {
	    document.getElementById('mainSquare1').style.backgroundColor = '#7f6fe9';
	    document.getElementById('smile').style.color = '#7f6fe9';
	}
	//pink
	else if (x == 4) {
	    document.getElementById('mainSquare1').style.backgroundColor = '#e2b7c9';
	    document.getElementById('smile').style.color = '#e2b7c9';
	}
	//green
	else {
	    document.getElementById('mainSquare1').style.backgroundColor = '#9ac29a';
	    document.getElementById('smile').style.color = '#9ac29a';
	}
    
    
    
});
function getPos(e) {
	x = e.clientX;
	y = e.clientY;
	midX = window.innerWidth/2
	midY = window.innerHeight/2
	deg = 2;
	degX = ((x/midX)*deg)-deg;
	degY = (((y/midY)*deg)-deg)*-1;
	var table1 = document.querySelector("#mainSquare1");	    
	table1.style.transform = "rotateY("+degX+"deg) rotateX("+degY+"deg)";
	
	var table2 = document.querySelector("#mainSquare2");	    
	table2.style.transform = "rotateY("+degX+"deg) rotateX("+degY+"deg)";
}

