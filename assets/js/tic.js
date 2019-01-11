var m=1;
$(".box > div").on('click', function () {
	if($(this).hasClass('c1') || $(this).hasClass('c2')){alert("Invalid selection..");}
	else if (m==1) {
	$(this).addClass('c1');
	$(this).html( "<img src='assets/img/o.png' height='150px' width='150px'>");
	if(win('c1')){
	$(".win1").html("<p align='center' style='color : white'>Player One Won!!</p>");$(this).css({'color' : "white"});//alert("Player One Won!!");
	m=2;}
	else{m=2;}}
	else {$(this).addClass('c2');
	$(this).html( "<img src='assets/img/cross.png' height='150px' width='150px'>");
	if(win('c2')){
		$(".win2").html("<p align='center' style='color : white'>Player Two Won!!</p>");
	m=1;}
	else{m=1;}
//	if($(".box > div").hasClass("c1") && $(".box > div").hasClass("c2")){start();}
	}});
function win(symbol){
   	 if($(".1").hasClass(symbol) && $(".2").hasClass(symbol) && $(".3").hasClass(symbol)){
   	 	$(".1 , .2, .3").css({ 'background' : "yellow"});return true;}
	else if($(".4").hasClass(symbol) && $(".5").hasClass(symbol) && $(".6").hasClass(symbol)){
		$(".4 , .5, .6").css({ 'background' : "yellow"});return true;}
	else if($(".7").hasClass(symbol) && $(".8").hasClass(symbol) && $(".9").hasClass(symbol)){
		$(".7 , .8, .9").css({ 'background' : "yellow"});return true;}
	else if($(".1").hasClass(symbol) && $(".4").hasClass(symbol) && $(".7").hasClass(symbol)){
		$(".1 , .4, .7").css({ 'background' : "yellow"});return true;}
	else if($(".2").hasClass(symbol) && $(".5").hasClass(symbol) && $(".8").hasClass(symbol)){
		$(".2 , .5, .8").css({ 'background' : "yellow"});return true;}
	else if($(".3").hasClass(symbol) && $(".6").hasClass(symbol) && $(".9").hasClass(symbol)){
		$(".3 , .6, .9").css({ 'background' : "yellow"});return true;}
	else if($(".1").hasClass(symbol) && $(".5").hasClass(symbol) && $(".9").hasClass(symbol)){
		$(".1 , .5, .9").css({ 'background' : "yellow"});return true;}
	else if($(".3").hasClass(symbol) && $(".5").hasClass(symbol) && $(".7").hasClass(symbol)){
		$(".3 , .5, .7").css({ 'background' : "yellow"});return true;}
	else {return false;}	
}

$(".new").on("click", function(){
start();
});
function start(){
	m=1;
	$(".box > div").css({ 'background' : "#DCDCDC"});
	$(".box > div").html("");
	$(".box > div").removeClass("c1");
	$(".box > div").removeClass("c2");
};