console.log("Decimal Time Conversion ver.1.1");
var inputMin=0;
var inputHour=0;
var totMin;
var hoursDecimal;
var converionForm = document.getElementById("convertion_form");
var decimalOutput = document.getElementById("decimal_output");
var btnCopy = document.getElementById("bttn_copy	");

//add submit event on form
converionForm.onsubmit=function(evt){
	console.log("submiting...");
	evt.preventDefault();
	initConversion();
};

btnCopy.onclick=function(){
	console.log("copy button activated");
	console.log("clipboard data: "+decimalOutput.innerHTML);
	copyToPasteboard();
};

function copyToPasteboard() {
	if (window.widget) {
		var s = "test copy";
		widget.system("/bin/echo '"+s+"' | /usr/bin/pbcopy", null);
	}
}


function initConversion(){
	console.log("Initiating Conversion");
	getInputData();
}
function getInputData(){
	inputMin = parseInt(converionForm.minutes.value);
	inputHour = parseInt(converionForm.hours.value);
	console.log("user input: "+inputHour+":"+inputMin);
	setTotMin();
}
function setTotMin(){
	totMin = hrsToMins(inputHour) + inputMin;
	console.log("Total minutes: "+totMin);
	setHoursDecimal(totMin);
}
function setHoursDecimal(mins){
	hoursDecimal = minsToDec(mins);
	console.log("Hours Decimal: "+hoursDecimal);
	updateOutput(hoursDecimal.toFixed(2));
}
function updateOutput(outValue){
	console.log("i am in the output");
	decimalOutput.innerHTML = outValue;
}


function hrsToMins(hrs){
	//convert input hours to minutes and add to input minutes
	return hrs*60;
}
function minsToDec(mins){
	//convert total minutes to hours(decimal)
	return mins/60;
}

console.log("js loaded");