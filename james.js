$( document ).ready(function() {
	
    var x = Math.floor((Math.random() * 10) + 1);
    
    
    if (x == 1) {
	    //yellow
	    document.getElementById('colour1').style.backgroundColor = '#FFFFE0';
	    document.getElementById('colour2').style.backgroundColor = '#DAA520';
	    document.getElementById('colour3').style.color = '#FFFFE0';
	    document.getElementById('colour4').style.color = '#F0E68C';
	    document.getElementById('colour5').style.color = '#EEE8AA';
	    document.getElementById('colour6').style.color = '#BDB76B';
	    document.getElementById('colour7').style.color = '#FFFF00';
	    document.getElementById('colour8').style.color = '#FFD700';
	    document.getElementById('colour9').style.color = '#FFFFE0';
	    document.getElementById('colour10').style.color = '#F0E68C';
/*
	    base: FFFFE0
		DAA520
		FFD700
		F0E68C
		EEE8AA
		BDB76B
		FFFF00
*/
	} else if (x == 2) {
		//cyan
	    document.getElementById('colour1').style.backgroundColor = '#E0FFFF';
	    document.getElementById('colour2').style.backgroundColor = '#008B8B';
	    document.getElementById('colour3').style.color = '#E0FFFF';
	    document.getElementById('colour4').style.color = '#008080';
	    document.getElementById('colour5').style.color = '#008B8B';
	    document.getElementById('colour6').style.color = '#00FFFF';
	    document.getElementById('colour7').style.color = '#008080';
	    document.getElementById('colour8').style.color = '#00FFFF';
	    document.getElementById('colour9').style.color = '#E0FFFF';
	    document.getElementById('colour10').style.color = '#008080';
/*
	    base: E0FFFF
		008B8B
		00FFFF
		008080
		008B8B
		00FFFF
		008080
*/

	} else if (x == 3) {
		//green
	    document.getElementById('colour1').style.backgroundColor = '#98FB98';
	    document.getElementById('colour2').style.backgroundColor = '#6B8E23';
	    document.getElementById('colour3').style.color = '#98FB98';
	    document.getElementById('colour4').style.color = '#ADFF2F';
	    document.getElementById('colour5').style.color = '#32CD32';
	    document.getElementById('colour6').style.color = '#00FF7F';
	    document.getElementById('colour7').style.color = '#00FA9A';
	    document.getElementById('colour8').style.color = '#66CDAA';
	    document.getElementById('colour9').style.color = '#66CDAA';
	    document.getElementById('colour10').style.color = '#9ACD32';
/*
	    base: 98FB98
		6B8E23
		9ACD32
		ADFF2F
		32CD32
		00FF7F
		00FA9A
		66CDAA
*/
	    
	} else if (x == 4) {
		//#
	    document.getElementById('colour1').style.backgroundColor = '#FFA07A';
	    document.getElementById('colour2').style.backgroundColor = '#8B0000';
	    document.getElementById('colour3').style.color = '#FFA07A';
	    document.getElementById('colour4').style.color = '#FF0000';
	    document.getElementById('colour5').style.color = '#F08080';
	    document.getElementById('colour6').style.color = '#E9967A';
	    document.getElementById('colour7').style.color = '#DC143C';
	    document.getElementById('colour8').style.color = '#B22222';
	    document.getElementById('colour9').style.color = '#FFA07A';
	    document.getElementById('colour10').style.color = '#FF0000';
/*
	    base: FFA07A
		8B0000
		B22222
		FF0000
		F08080
		E9967A
		DC143C
*/
	} else if (x == 5) {
		//blue
	    document.getElementById('colour1').style.backgroundColor = '#E0FFFF';
	    document.getElementById('colour2').style.backgroundColor = '#00BFFF';
	    document.getElementById('colour3').style.color = '#E0FFFF';
	    document.getElementById('colour4').style.color = '#00CED1';
	    document.getElementById('colour5').style.color = '#87CEFA';
	    document.getElementById('colour6').style.color = '#4682B4';
	    document.getElementById('colour7').style.color = '#1E90FF';
	    document.getElementById('colour8').style.color = '#6495ED';
	    document.getElementById('colour9').style.color = '#0000CD';
	    document.getElementById('colour10').style.color = '#00FFFF';
/*
	    base: E0FFFF
		00BFFF
		00FFFF
		00CED1
		87CEFA
		4682B4
		1E90FF
		6495ED
		0000CD
*/
	} else if (x == 6) {
		//purple
	    document.getElementById('colour1').style.backgroundColor = '#E6E6FA';
	    document.getElementById('colour2').style.backgroundColor = '#FF00FF';
	    document.getElementById('colour3').style.color = '#E6E6FA';
	    document.getElementById('colour4').style.color = '#BA55D3';
	    document.getElementById('colour5').style.color = '#800080';
	    document.getElementById('colour6').style.color = '#8B008B';
	    document.getElementById('colour7').style.color = '#FF00FF';
	    document.getElementById('colour8').style.color = '#EE82EE';
	    document.getElementById('colour9').style.color = '#DDA0DD';
	    document.getElementById('colour10').style.color = '#9400D3';
/*
	    base: E6E6FA
		FF00FF
		9400D3
		BA55D3
		800080
		8B008B
		FF00FF
		EE82EE
		DDA0DD
*/
	} else if (x == 7) {
		//pink
	    document.getElementById('colour1').style.backgroundColor = '#FFC0CB';
	    document.getElementById('colour2').style.backgroundColor = '#C71585';
	    document.getElementById('colour3').style.color = '#FFC0CB';
	    document.getElementById('colour4').style.color = '#FF69B4';
	    document.getElementById('colour5').style.color = '#DB7093';
	    document.getElementById('colour6').style.color = '#FFB6C1';
	    document.getElementById('colour7').style.color = '#FF1493';
	    document.getElementById('colour8').style.color = '#FFC0CB';
	    document.getElementById('colour9').style.color = '#FF69B4';
	    document.getElementById('colour10').style.color = '#DB7093';
/*
	    base: FFC0CB
		C71585
		FF1493
		FF69B4
		DB7093
		FFB6C1
*/
	} else if (x == 8) {
		//orange
	    document.getElementById('colour1').style.backgroundColor = '#FFA07A';
	    document.getElementById('colour2').style.backgroundColor = '#FF6347';
	    document.getElementById('colour3').style.color = '#FFA07A';
	    document.getElementById('colour4').style.color = '#FF7F50';
	    document.getElementById('colour5').style.color = '#FF8C00';
	    document.getElementById('colour6').style.color = '#FFA500';
	    document.getElementById('colour7').style.color = '#FF4500';
	    document.getElementById('colour8').style.color = '#FFA07A';
	    document.getElementById('colour9').style.color = '#FF7F50';
	    document.getElementById('colour10').style.color = '#FF8C00';
/*
	    base: FFA07A
		FF6347
		FF4500
		FF7F50
		FF8C00
		FFA500
*/
	} else if (x == 9) {
		//grey
	    document.getElementById('colour1').style.backgroundColor = '#DCDCDC';
	    document.getElementById('colour2').style.backgroundColor = '#708090';
	    document.getElementById('colour3').style.color = '#DCDCDC';
	    document.getElementById('colour4').style.color = '#808080';
	    document.getElementById('colour5').style.color = '#696969';
	    document.getElementById('colour6').style.color = '#2F4F4F';
	    document.getElementById('colour7').style.color = '#A9A9A9';
	    document.getElementById('colour8').style.color = '#000000';
	    document.getElementById('colour9').style.color = '#778899';
	    document.getElementById('colour10').style.color = '#DCDCDC';
/*
	    base: DCDCDC
		708090
		778899
		808080
		696969
		2F4F4F
		A9A9A9
		000000
*/
	} else {
		//brown
	    document.getElementById('colour1').style.backgroundColor = '#A52A2A';
	    document.getElementById('colour2').style.backgroundColor = '#BC8F8F';
	    document.getElementById('colour3').style.color = '#A52A2A';
	    document.getElementById('colour4').style.color = '#8B4513';
	    document.getElementById('colour5').style.color = '#D2691E';
	    document.getElementById('colour6').style.color = '#F4A460';
	    document.getElementById('colour7').style.color = '#CD853F';
	    document.getElementById('colour8').style.color = '#DEB887';
	    document.getElementById('colour9').style.color = '#D2B48C';
	    document.getElementById('colour10').style.color = '#A0522D';
	    base: FFF8DC
/*
		A52A2A
		BC8F8F
		A0522D
		8B4513
		D2691E
		F4A460
		CD853F
		DEB887
		D2B48C
*/
	}
});
