function myMap() {
	var time = [];
	var drop = [];
	var location = [{lat:43.589449, 
					 lon:-79.641554,
					 name:"City Centre Drive",
					 address:"201 City Centre Dr, Mississauga, ON",
					 hours: ["Closed today",
							"Closed today",
							"0:00 AM - 11:59 PM",
							"0:00 AM - 11:59 PM",
							"0:00 AM - 11:59 PM",
							"0:00 AM - 11:59 PM",
							"0:00 AM - 11:59 PM"],
					 additional:"Duke of York Blvd & City Centre Drive",
					 dropoff: drop[""],
					 postal:"L5B2T4",
					 phone:"1-888-744-7123",
					 type:"dropBox"}, 
					 
					{lat:43.592270, 
					 lon:-79.638166,
					 name:"Side Entrance-Beside Royal Lepage",
					 address:"77 City Centre Dr, Mississauga, ON",
					 hours: ["Closed today",
							"Closed today",
							"0:00 AM - 11:59 PM",
							"0:00 AM - 11:59 PM",
							"0:00 AM - 11:59 PM",
							"0:00 AM - 11:59 PM",
							"0:00 AM - 11:59 PM"],
					 additional:"City Centre Drive & Hurontario",
					 dropoff: drop[""],
					 postal:"L5B1M8",
					 phone:"1-888-744-7123",
					 type:"dropBox"},
					 
					 {lat:43.591630,
					 lon:-79.636276,
					 name:"PostNet Mississauga ON131",
					 address:"50 Bumhamthorpe RD W, Suite 86, Mississauga, ON",
					 hours: ["10:00 AM - 3:00 PM",
							"Closed today",
							"8:30 AM - 6:30 PM",
							"8:30 AM - 6:30 PM",
							"8:30 AM - 6:30 PM",
							"8:30 AM - 6:30 PM",
							"8:30 AM - 6:30 PM"],
					 additional:"Hurontario and Bumhamthorpe Road W, Sussex Centre",
					 dropoff: drop[""],
					 postal:"L5B3C2",
					 phone:"905-232-9322",
					 type:"shipAgent"},
					 
					 {lat:43.596007,
					 lon:-79.639504,
					 name:"City Centre Plaza",
					 address:"1 City Centre Dr, Mississauga, ON",
					 hours: ["Closed today",
							"Closed today",
							"0:00 AM - 11:59 PM",
							"0:00 AM - 11:59 PM",
							"0:00 AM - 11:59 PM",
							"0:00 AM - 11:59 PM",
							"0:00 AM - 11:59 PM"],
					 additional:"Corner of Highway 10 & City Centre Drive",
					 dropoff: drop[""],
					 postal:"L5B1M2",
					 phone:"1-888-744-7123",
					 type:"dropBox"},
					 
					 {lat:43.579886,
					 lon:-79.648455,
					 name:"Grand Park",
					 address:"3950 Grand Park DR, Mississauga, ON",
					 hours: ["9:00 AM - 6:00 PM",
							"11:00 AM - 5:00 PM",
							"9:00 AM - 9:00 PM",
							"9:00 AM - 9:00 PM",
							"9:00 AM - 9:00 PM",
							"9:00 AM - 9:00 PM",
							"9:00 AM - 9:00 PM"],
					 additional:"Hold for pick up service not available",
					 dropoff: drop[""],
					 postal:"L5B4M6",
					 phone:"905-306-7888",
					 type:"staples"},
					 
					 {lat:43.623495,
					 lon:-79.681576,
					 name:"Avebury",
					 address:"5995 Avebury RD, Mississauga, ON",
					 hours: ["Closed today",
							"Closed today",
							"8:00 AM - 8:00 PM",
							"8:00 AM - 8:00 PM",
							"8:00 AM - 8:00 PM",
							"8:00 AM - 8:00 PM",
							"8:00 AM - 8:00 PM"],
					 additional:"In Purolator Corporate Head Office building at corner of Britannia Road and Avebury Road. One block west of Highway 10 and Britannia, just south of the 401.",
					 dropoff: drop[""],
					 postal:"L5B3T8",
					 phone:"905-712-8101",
					 type:"shipCentre"}];
					 
	var len = location.length;
	var pos = [];
	var marker = []; 
	var myCenter = new google.maps.LatLng(43.596007, -79.639504);
   	var mapCanvas = document.getElementById("map");
	var mapOptions = {center: myCenter, zoom: 14, mapTypeControl:false, streetViewControl:true, streetViewControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER}, 
	zoomControl:true,
	zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER}
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);
	new String("a").valueOf() == new String("a").valueOf()
	
	for (i = 0; i < len; i++) {
		pos[i] = new google.maps.LatLng(location[i].lat,location[i].lon);
		var typo = location[i].type;
		if (typo == "dropBox") {
				var pic = '/assets/img/locator/locatordropboxicon.png';
			} else if(typo == "shipCentre") {
				var pic = '/assets/img/locator/locatorpuroicon.png';
			} else if(typo == "staples"){
				var pic = '/assets/img/locator/locatorstaplesicon.png';
			} else {
				var pic = '/assets/img/locator/locatoragenticon.png';
			}		
		marker[i] = new google.maps.Marker({
			position:pos[i],
			icon : pic
		});
		marker[i].setMap(map);
	}


//function checkTime() 
//	var d = new Date();
//	var Day = d.getDay();
	
//
	
		
//	document.getElementById("bar").innerHTML = Day;
/*	google.maps.event.addListener(marker,'click',function() {
		var d = new Date();
		var Day = d.getDay();
		var infowindow = new goole.maps.InfoWindow({
			content:"Hello"
	});
	infowindow.open(map,marker[i]);
	}); */
}