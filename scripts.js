
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

function reDrawGrid() {
	var gridNum = document.getElementById('number').value;
	if (isInt(gridNum) !== 0){
		count = gridNum;

	$('.grid').remove();
	drawGrid(count);}

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

function isInt(x){
	if (isNaN(x) === false){
		if (x%1===0){

			return x;
		}else {
			alert("please input an integer!");
			return 0;
		}


	} else {
		alert("Please input a number!");
		return 0;
	}


}
