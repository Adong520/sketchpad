$(document).ready(function() {
	drawGrid(16,16);

});


function drawGrid(row, column){

	for(i=1;i<=row;i++){
		for(j=1;j<=column;j++){
			var divId = "" +i +j;
			$("<div/>",{
				id:divId,
				class:"grid",
				text: divId
			}).appendTo("#container");	

			if (j===1&&i!==1) {
			// grid goes to newline
			console.log(divId+ 'and'+j);
			$('#'+divId).css("background-color","red");
			$('#'+divId).css("clear","left");
			} else {
				$('#'+divId).css("float","left");
			}//if
			}; // for j

		    }; // for i

	$('.grid').css("width","30px");
	$('.grid').css("height","30px");
	$('.grid').css("border","1px solid black");
	//$('.grid').css("float","left");
	//$('#21').css("clear","left");   
	}; // function
	
	
	
