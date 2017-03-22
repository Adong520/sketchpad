
var count =16;
$(document).ready(function() {
	
	
	drawGrid(count);
	


});//ready


function drawGrid(gridNumber){

	for(i=1;i<=gridNumber;i++){
		for(j=1;j<=gridNumber;j++){
			var divId = "" +i +j;
			var displayId = '('+i +','+j+')';

			$("<div/>",{
				id:divId,
				class:"grid"
				//text: displayId
				//font-size:"2px"
			}).appendTo("#container");	

			//$('.grid').css("width","30px");
			//$('.grid').css("height","30px");
			//$('.grid').css("border","1px solid black");
			//$('.grid').css("float","left");
			//$('.grid').css("dispaly","inline");
			//$('.grid').css("font-size","10px");

			//$('#'+divId).css("width","30px");
			//$('#'+divId).css("height","30px");
			//$('#'+divId).css("border","1px solid black");


			//$('#'+divId).css("display","inline-block");
			//$('#'+divId).css("float","left");
			//$('#'+divId).css("font-size","10px");


			/*if (j===1) {
			// grid goes to newline
			console.log(divId+ 'and'+j);

			$('#'+divId).css("background-color","red");
			$('#'+divId).css("clear","left");
			} else {
				$('#'+divId).css("float","left");
			}//if
			*/


			}; // for j

		    }; // for i
	var gridWidth = 520/gridNumber;
	console.log(gridWidth);	   
	$('.grid').css("width",gridWidth+"px");
	$('.grid').css("height",gridWidth+"px");
	//$('.grid').css("margin-left","1px");
	//$('.grid').css("border","1px solid black");
	$('.grid').css("float","left");
	$('.grid').css("dispaly","inline");
	$('.grid').css("font-size","10px");

	//$('#21').css("clear","left"); 

	//var gridColor ;
	var r = 255;
	var g = 255;
	var b = 255;
	

	$('.grid').hover(
		function(){
			
			r = getRandomColor();
			g = getRandomColor();
			b = getRandomColor();

			console.log("r="+r+" g="+g+" b="+b);

			console.log("hover event");
			$(this).css("background-color","rgb("+r+","+g+","+b+")");
			//this.addClass("color");
		},
		function(){
			$(this).css("background-color","rgb("+r+","+g+","+b+")");
			//this.removeClass("color");
		})//hover;


}; // function drawGrid()
	
function clearSketchPad()
{
	$('.grid').css("background-color","#e4e4e4");
}; // clearSketchPad()

function getGridNum() {
	var gridNum = document.getElementById('number').value;
	console.log(gridNum);
	count = gridNum;
	$('.grid').remove();
	drawGrid(count);

}// redraw grid


function getRandomColor() {
    return Math.ceil(Math.random()*255);
        
    
}// getRandowmColor

/*function getRandomColor2 (oldColor) {

	var color =255;
	if (oldColor === 0){
		return oldColor; // already black
	}
	else if(oldColor === 255){
	color -= Math.ceil(Math.random()*255);// initial get the random color
		} 
	else {
		//old color is not initial color, need to add 10%black that is to decrease 10%color	
		color = oldColor - Math.ceil(oldColor*0.1);

	} 

	if (color <=0) {color=0;};
	return color;

}	*/
