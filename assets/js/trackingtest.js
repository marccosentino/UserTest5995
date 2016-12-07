$(document).ready(function() {
var pinNumber = "#homeSearchbox";
console.log (pinNumber);


$( '#trackbuttonHome' ).on('click', track);

function track() {
	console.log("works");
	var pin = $('#homeSearchbox').val();
	console.log(pin);
	console.log(typeof pin);
	var PinLength = pin.length;
	console.log(PinLength);
	for (i = 0; i < PinLength; i++) {
		var n = i + 1;
		console.log('hi');
		console.log('i: ' + i);
		console.log('i+1: ' + n);
		var PinCompare = pin.substring(i, n);
		console.log(PinCompare);
		if (PinCompare == ",") {
			console.log("i found");
			window.location.href = "tracking%20summary.html#trackingInfoReq";
			break;
		} else if (n == PinLength) {
			window.location.href = "tracking%20details%20-%20Single.html#trackingDetailsSingle";
		}
		
	}
	console.log("no");
	
	
}
 
});