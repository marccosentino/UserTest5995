var puro = {};
var ele_results                                  = ".info1";                         
var filter_by                                                     = false;                 
var filter_link                                                   = ".clickable";
var ele_header                                                = ".infotop";                     
var icon_path                                                  = "assets/img/locator/";                                            
var locale                                                                        = 'en';
var moreinfobutton;
var moreinfocontent;
var filterID;
var ele_querybox; 
var ele_result_container;              
var ele_query;                                                 
var backup_marker;
var desktop;
var lat1;
var lnt1;
//var enterpress = false;
var data = [{LocationType:"ShippingAgent",
			 LocationName:"PostNet Mississauga ON131",
			 Latitude:43.5917060000,
			 Longitude:-79.6358590000,
			 StreetNumber:50,
			 StreetName:"Burnhamthorpe",
			 StreetType:"RD",
			 CityName:"Mississauga",
			 ProvinceStateCode:"ON",
			 PostalCode:"L5B3C2",
			 LocationId:"RA4437",
			 PhoneNumber:905-232-9322
			},
			{LocationType:"DropBox",
			 LocationName:"PostNet ON119 Brampton",
			 Latitude:43.6589310000,
			 Longitude:-79.7269030000,
			 StreetNumber:7700,
			 StreetName:"Hurontario",
			 StreetType:"ST",
			 CityName:"Brampton",
			 ProvinceStateCode:"ON",
			 PostalCode:"L6Y4M3",
			 LocationId:"RA4347",
			 PhoneNumber:905-459-0008
			},
			{LocationType:"ShippingAgent",
			 LocationName:"NetPrint & Ship Inc (ESO)",
			 Latitude:43.6305768000,
			 Longitude:-79.4822731000,
			 StreetNumber:125,
			 StreetName:"The Queensway",
			 StreetType:"ST",
			 CityName:"Etobicoke",
			 ProvinceStateCode:"ON",
			 PostalCode:"M8Y1H6",
			 LocationId:"RA4451",
			 PhoneNumber:416-259-0092
			}];
			
window.onload = function(event) {
               if (window.innerWidth >= 651) {
                              console.log("Desktop");
                              moreinfobutton = '.more'; 
                              moreinfocontent = '.moreinfo';
                              ele_result_container       = ".resultbox";
                              ele_query                                                         = "#userLocation";
                              ele_querybox                                   = "#button1";
                              desktop = true;
                              console.log(ele_result_container)
               } 
			   
			   if (window.innerWidth < 651){
                              console.log("Mobile");
                              moreinfobutton = '.mobomore';
                              ele_querybox                                   = "#button2";
                              moreinfocontent = '.mobomoreinfo';
                              ele_result_container       = "#moboinfobox";
                              ele_query                                                         = "#losearch";
                              desktop = false;
                              console.log(ele_result_container)

               }
               console.log('gets here')
               puro.locator.init();
              
}


//
$('.appclose').on('click', function() {
               $('.mobosearch').css('top', '100px');
});


var labels             = {
               en : {
                              'dropoff_domestic' : 'Last Domestic drop off:',
                              'dropoff_usa' : 'Last U.S &amp; International drop off:',
                              'dropoff_time' : 'Drop Off times',
                              'directions' : 'Directions',
                              'more' : '&gt; More info',
                              'hours' : 'Hours',
                              '' : '',
                              '' : '',
                              '' : '',
                              '' : '',
                              '' : '',
                              '' : '',
               
                              }

};


puro.locator = {
               
               init : function(){
                                             console.log( ">> init()" );
                                             // Register the event

      console.log(ele_query)
                                             $( ele_querybox ).on( 'click', puro.locator.query );
                                             console.log(ele_query)
                                             $( ele_query ).keydown(function( e) {
                                                                           console.log("We're here" + e.keyCode);
                                                                           if( e.which == 13 ) {    
                                                                           e.preventDefault(); 
                                                                           // enterpress = true;
                                                                           // var passval = $( ele_query ).val();
                                                                           // console.log(passval)
                                                                           // console.log('this is enter key')                                                                   
                                                                                          puro.locator.query();

                                                                           }
                                                            });
                                                         
                                                       $( filter_link ).on( 'click', function() {
                                                            console.log("click");
                                                            $('.desfilter').removeClass('menuClick');
                                                            $(this).toggleClass('menuClick');
                                                            filterID = $(this).attr("id");
                                                            filter_by = true;
                                                            puro.locator.query(filterID) });

                                                            $('.mobofil').on('click', function() {
                                                                           console.log('mobo click works')
                              if ($('.moboinfo').css('display') == 'none') {
                                             console.log('none display')
                              $('.moboinfo').css('display', 'block');
                              $('button.accordion1::after').css(               'content', '-');
                              } else {
                                                            console.log('block display')
                              $('.moboinfo').css('display', 'none');
                              $('button.accordion1::after').css('content', '+');
                              }
                                                            });

                                                            $('.moicons').on('click', function() {
                              $('.moicons').removeClass('menuClick');
                              $(this).toggleClass('menuClick');
                                                            });
                                             console.log('before hide')
                                             console.log(ele_result_container)
                                             $( ele_result_container ).hide();
                                             console.log('the end of init')
                              },
               
               query : function(filter_id){
                                             
                                             console.log( ">> query()" );
                                        
                                     

                                                            console.log( "Received response" );
                                                       

                                                            if (filter_by == false) {
                                                                           console.log("no filter");
                                                                           $('#AllLocations').addClass('menuClick');
                                                                           puro.locator.updateUi( data );
                                                            } else {
                                                                           if (filter_id == "AllLocations")
                                                                           {
                                                                                          puro.locator.updateUi(data);
                                                                           }else {
                                                                                          console.log("filter");
                                                                                          var newData = [];
                                                                                          var n = 0;
                                                                                          for( var i = 0; i < data.length; i++ ){
                                                                                                         //n = i;
                                                                                                         console.log("n: " +n);
                                                                                                         console.log("filter_id: " + filter_id);
                                                                                                         console.log("Location Type: " + data[i].LocationType);
                                                                                                         if ( data[i].LocationType == filter_id) {
                                                                                                                                       console.log("runs" + n);
                                                                                                                                       newData[n] = data[i];
                                                                                                                                       n++;
                                                                                                                        }
                                                                                          }
                                                                                          puro.locator.updateUi( newData );
                                                                                          console.log("newData" + newData.length);
                                                                           }
                                                            }
                                             
                                             
                              },
               

               updateUi : function( data ){
                              var markers = [];
                              console.log("before markers" +markers);
                              
                              console.log("after markers" +markers);
                              // function getInfoBox(n) {
                                                                           
                                             //                           alert("WindowInfo");
                                             //                           windowInfo[n].open(map, markers[n]);
                                                              // }
                              // getInfoBox(2);
                              
                              try {        
                                             console.log( ">>updateUI()" );
                                             // Replace the heading content
                                             var _header        = data.length + ' Result';
                                             if( data.length > 1 ){
                                                            _header               = _header + 's';
                                             }
                                             _header                                             = _header + ' for "' + 'Mississauga' + '"'; 
                                             $( ele_header ).text( _header );
                                             console.log(ele_header);
                                             // Clear the results body
                                             $( ele_results ).empty();
                                             
                                             // Build the results html and google maps markers
                                             
                                             
                                             if (data.length == 0)
                                             {
                                                            console.log("No location :" + data.length);
                                                            console.log("# of Markers :" + markers.length); 
                                                            for( var i = 0; i < markers.length; i++ ){
                                                                           markers[i].setMap(null);
                                                                           //markers[i].infowindow.close();
                                                            }
                                                            markers = [];
                                             }              
                                                            
                                             for( var i = 0; i < data.length; i++ ){
                                                            var record           = data[ i ];
               
                                                            console.log(infowindow);
                                                            console.log(i);
                                                            // https://maps.google.com?saddr=Current+Location&daddr=760+West+Genesee+Street+Syracuse+NY+13204
                                                            var url_directions             = 'https://maps.google.com?saddr=Current+Location&daddr=' + record.StreetNumber + ' ' + record.StreetName + ' ' + record.StreetType + ' ' + record.CityName + ' ' + record.ProvinceStateCode + ' ' + record.PostalCode;
                                                            url_directions                    = url_directions.replace( / /g, '+' );
															console.log(desktop);
                                                            if (desktop == true) {
                                                            var location = '<div class="one">' + 
                                                                                          '<div class="medium-offset-1 medium-1 columns infoicons" id="infoicon">' +
                                                                                                         '<img src="' + icon_path +'locator-pin-' + data[ i ].LocationType.toLowerCase() + '.png" id="loinfo" />' +
                                                                                          '</div>' + 
                                                                                          '<div class="medium-offset-1 medium-7 columns end block">' +
                                                                                                         '<button id="title" class="fontl"><strong>' + record.LocationName + '</strong></button>' +
                                                                                                         '<div id="address" class="fonts">' + record.StreetNumber + ' ' + record.StreetName + ', ' + record.StreetType  + '</div>' +
                                                                                                         '<div id="postal" class="fonts">' + record.CityName + ' ' + record.ProvinceStateCode + ', ' + record.PostalCode + '</div>' +
                                                                                                         '<div id="type" class="fonts">' + record.LocationType + '</div>' +
                                                                                                         '<div id="phone" class="fonts">' + record.PhoneNumber + '</div>' +
                                                                                                         '<div class="fontl"><strong>' + labels[ locale ][ 'dropoff_domestic' ] + '</strong></div>' +
                                                                                                         '<div id="dropoff" class="fonts">2 pm this evening</div>' +
                                                                                                         '<div class="fontl"><strong>' + labels[ locale ][ 'dropoff_usa' ] + '</strong></div>' +
                                                                                                         '<div id="interdropoff" class="fonts">Unavailable</div>' +
                                                                                                         '<div class="row">' +
                                                                                                                        '<div class="medium-6 columns noleft">' +
                                                                                                                                       '<h4><a id="dir" href="' + url_directions + '" target="_blank" >' + labels[ locale ][ 'directions' ] + '</a></h4>' +
                                                                                                                        '</div>' +
                                                                                                                        '<div class="medium-6 columns noleft">' +
                                                                                                                                       '<h4><button class="more">' + labels[ locale ][ 'more' ] + '</button></h4>' +
                                                                                                                        '</div>' +
                                                                                                         '</div>' +
                                                                                          '</div>' +
                                                                                                         '<div class="moreinfo">' +
                                                                                                                        '<ul class="tabs" data-tabs id="example-tabs">' +
                                                                                                                                       '<li class="tabs-title is-active tab1" id="tab1">' +
                                                                                                                                                      '<a>' + labels[ locale ][ 'hours' ] + '</a>' +
                                                                                                                                       '</li>' +
                                                                                                                                       '<li class="tabs-title tab2" id="tab2">' +
                                                                                                                                                      '<a>' + labels[ locale ][ 'dropoff_time' ] + '</a>' +
                                                                                                                                       '</li>' +
                                                                                                                        '</ul>' +
                                                                                                                        '<div class="tabs-content" data-tabs-content="example-tabs">' +
                                                                                                                                       '<div class="tabs-panel is-active panel1">' +
                                                                                                                                                      '<p>M - F: 9:00 am - 6:00 pm<br />' +
                                                                                                                                                      'Sat: 9:00 am - 4:00 pm<br />' +
                                                                                                                                                      'Sun: Closed</p>' +
                                                                                                                                       '</div>' +
                                                                                                                                       '<div class="tabs-panel panel2">' +
                                                                                                                                                      '<p>5:00 PM:               WeekDay, Domestic Air<br />' +
                                                                                                                                                      '5:00 PM: WeekDay, US Air<br />' +
                                                                                                                                                      '5:00 PM: WeekDay, International<br />' +
                                                                                                                                                      '5:00 PM: WeekDay, Domestic Ground<br />' +
                                                                                                                                                      '5:00 PM: WeekDay, US Ground</p>' +
                                                                                                                                       '</div>' +
                                                                                                                        '</div>' +
                                                                                                         '</div>' +
                                                                                          '</div>';
                                                            } else {
                                                                         console.log("mobile running" +desktop); 
																		   var location = '<div class="one">' + 
                                                                                          '<div class="small-offset-1 small-1 columns infoicons" id="infoicon">' +
                                                                                                         '<img src="' + icon_path +'locator-pin-' + data[ i ].LocationType.toLowerCase() + '.png" id="loinfo" />' +
                                                                                          '</div>' + 
                                                                                          '<div class="small-8 columns end block">' +
                                                                                                         '<button id="title" class="fontl"><strong>' + record.LocationName + '</strong></button>' +
                                                                                                         '<div id="address" class="fonts">' + record.StreetNumber + ' ' + record.StreetName + ', ' + record.StreetType  + '</div>' +
                                                                                                         '<div id="postal" class="fonts">' + record.CityName + ' ' + record.ProvinceStateCode + ', ' + record.PostalCode + '</div>' +
                                                                                                         '<div id="type" class="fonts">' + record.LocationType + '</div>' +
                                                                                                         '<div id="phone" class="fonts">' + record.PhoneNumber + '</div>' +
                                                                                                         '<div class="fontl"><strong>' + labels[ locale ][ 'dropoff_domestic' ] + '</strong></div>' +
                                                                                                         '<div id="dropoff" class="fonts">2 pm this evening</div>' +
                                                                                                         '<div class="fontl"><strong>' + labels[ locale ][ 'dropoff_usa' ] + '</strong></div>' +
                                                                                                         '<div id="interdropoff" class="fonts">Unavailable</div>' +
                                                                                                         '<div class="row">' +
                                                                                                                        '<div class="small-6 columns noleft">' +
                                                                                                                                       '<h4><a id="mobodir" href="' + url_directions + '" target="_blank" >' + labels[ locale ][ 'directions' ] + '</a></h4>' +
                                                                                                                        '</div>' +
                                                                                                                        '<div class="small-6 columns noleft">' +
                                                                                                                                       '<h4><button class="mobomore">' + labels[ locale ][ 'more' ] + '</button></h4>' +
                                                                                                                        '</div>' +
                                                                                                         '</div>' +
                                                                                          '</div>' +
                                                                                                         '<div class="mobomoreinfo">' +
                                                                                                                        '<ul class="tabs" data-tabs id="example-tabs">' +
                                                                                                                                       '<li class="tabs-title is-active tab1" id="tab1">' +
                                                                                                                                                      '<a>' + labels[ locale ][ 'hours' ] + '</a>' +
                                                                                                                                       '</li>' +
                                                                                                                                       '<li class="tabs-title tab2" id="tab2">' +
                                                                                                                                                      '<a>' + labels[ locale ][ 'dropoff_time' ] + '</a>' +
                                                                                                                                       '</li>' +
                                                                                                                        '</ul>' +
                                                                                                                        '<div class="tabs-content" data-tabs-content="example-tabs">' +
                                                                                                                                       '<div class="tabs-panel is-active panel1">' +
                                                                                                                                                      '<p>M - F: 9:00 am - 6:00 pm<br />' +
                                                                                                                                                      'Sat: 9:00 am - 4:00 pm<br />' +
                                                                                                                                                      'Sun: Closed</p>' +
                                                                                                                                       '</div>' +
                                                                                                                                       '<div class="tabs-panel mobopanel2">' +
                                                                                                                                                      '<p>5:00 PM:               WeekDay, Domestic Air<br />' +
                                                                                                                                                      '5:00 PM: WeekDay, US Air<br />' +
                                                                                                                                                      '5:00 PM: WeekDay, International<br />' +
                                                                                                                                                      '5:00 PM: WeekDay, Domestic Ground<br />' +
                                                                                                                                                      '5:00 PM: WeekDay, US Ground</p>' +
                                                                                                                                       '</div>' +
                                                                                                                        '</div>' +
                                                                                                         '</div>' +
                                                                                          '</div>';
																						  
																						    console.log("mobile running location info: " +location); 
                                                            }
                                                            markers.push(    new google.maps.Marker({
                                                                                                                                                     position : new google.maps.LatLng( data[ i ].Latitude, data[ i ].Longitude ),
                                                                                                                                                      icon : icon_path + 'locator-pin-' + data[ i ].LocationType.toLowerCase() + '.png'
                                                                                                                                       }) );

                                                            $( ele_results ).append( location );
															console.log("mobile running location results: " +ele_results);
                                             }
                                                                           
                                             $( ele_result_container ).show();
                                             
                                             
                                                              
                                                              /*$().click(function() {
                                                                           
                                                              }*/
                                                              
                                             if(data.length == 0) 
                                             {
                                                            var myCenter = backup_marker;
                                             } else {   
                                                            var myCenter      = new google.maps.LatLng( data[ 0 ].Latitude, data[ 0 ].Longitude );
                                                            console.log("map center here: " + myCenter);
                                                            backup_marker = myCenter;
                                             }
                                             var mapCanvas = document.getElementById( "map" ); // Replace this with jquery
                                             var mapOptions                = {
                                                                           center: myCenter, 
                                                                           zoom: 12, 
                                                                           mapTypeControl:false, 
                                                                           streetViewControl:true, 
                                                                           streetViewControlOptions: {
                                                                                          position: google.maps.ControlPosition.RIGHT_CENTER
                                                                           }, 
                                                                           zoomControl:true,
                                                                           zoomControlOptions: {
                                                                                          position: google.maps.ControlPosition.RIGHT_CENTER 
                                                                           }
                                                                           
                                                            };
                                             
                              
                                             var map                              = new google.maps.Map( mapCanvas, mapOptions );
                                             console.log("before function" + mapOptions.center);
                              //            var infowindow  = new google.maps.InfoWindow();
                              //            info[ i ] = infowindow;
                                             
                                             
                                             
                                             var infowindow  = new google.maps.InfoWindow();
                                             for( var i = 0; i < markers.length; i++ ){
                              
                                             var         info_window_content = '<div style="float: left"><p class="fonts"><strong>' + data[ i ].LocationName +
                                                                                                                                       '</strong></p><p class="fonts">' + data[ i ].StreetNumber + ' ' + data[ i ].StreetName + ', ' + data[ i ].StreetType  + '<br />' 
                                                                                                                                                                                                                       + data[ i ].CityName + ' ' + data[ i ].ProvinceStateCode + ', ' + data[ i ].PostalCode + '</p>' +
                                                                                                                                         '<p class="fonts">Shipping centre<br />' + data[ i ].PhoneNumber + '</p></div><div id="pano" style="width: 250px; height: 200px; float: right;"></div>';
                              

                              
                                             //                           console.log(myPano);
               //                                                         console.log(info_window_content);


                                                            markers[i].infowindow = new google.maps.InfoWindow({
                                                            content: info_window_content
                                             });
                                                            markers[ i ].setMap( map );

                              //            console.log(document.getElementById('pano'));
                              //            lat1 = Number(data.locations[ i ].Latitude)
                              
                              //            lnt1 = Number(data.locations[ i ].Longitude)
                                             

                              /*           var myPano = new google.maps.StreetViewPanorama(
                                                            document.getElementById('pano'),
                                                            {
                                                            position: {lat: lat1, lng: lnt1},
                                                              pov: {heading: 165, pitch: 0},
                                                              zoom: 1
                                                            });
                                                            myPano.setVisible(true);
                                                            map.setStreetView(myPano);
                                                            console.log('mypano: ' + myPano.position)
                                             console.log('after streetview: ' + document.getElementById('pano'));

                                             //info[i] = info_window_content;
                                             console.log("i is" + i);
                                             //myCenter = new google.maps.LatLng( data.locations[ i ].Latitude, data.locations[ i ].Longitude );
                                             //infowindow.setContent( info_window_content ); */
                                             google.maps.event.addListener(markers[i], 'click', function() {
                                             for (var n = 0; n < markers.length; n++) {
                                                                           markers[n].infowindow.close();
                                                                           }
                                                            var reCenter = this.position;
                                             //            console.log("markers array here: " + point[0].infowindow);
                                                            // for (var n = 0; n < point.length; n++) {
                                                                           // point[n].infowindow.close();
                                                                           // }
                                                                           //myCenter = this.position;
                                                                           //console.log("position" + this.position);
                                                            
                                                                           
                                                            //console.log("in function" + mapOptions.center);
                                                            //markers[i].infowindow.close();
                                                            //myCenter = new google.maps.LatLng( data.locations[ i ].Latitude, data.locations[ i ].Longitude );
                                                                           
                                                                           //console.log("datalocation " + data.locations[i])
                                                                           
                                                                           console.log("mycenter " + reCenter)
                                                                           console.log("first location" +  data[ 0 ].Latitude + " " + data[ 0 ].Longitude)
                                                                           
                                                                           console.log("works" + i)
                                                                           console.log("works markers[]" + markers.length)
                                                                           this.infowindow.open(map, this);
                                                                           
                                                                           map.setCenter(reCenter);
                                                                           console.log("Map position: " +map.center)
                                                                           if (desktop == true) {
                                                                           map.panBy(-370,-300);
                                                                           } else {
																				map.panBy(0,-400);
																			}
                                                            }); 
                                             }
                                             
                                             function showInfo(point, k) {
                                                            var reCenter = point[k].position;
                                                            console.log("markers array here: " + point[0].infowindow);
                                                            for (var n = 0; n < point.length; n++) {
                                                                           point[n].infowindow.close();
                                                                           }
                                                                           //myCenter = this.position;
                                                                           //console.log("position" + this.position);
                                                            
                                                                           
                                                            //console.log("in function" + mapOptions.center);
                                                            //markers[i].infowindow.close();
                                                            //myCenter = new google.maps.LatLng( data.locations[ i ].Latitude, data.locations[ i ].Longitude );
                                                                           
                                                                           //console.log("datalocation " + data.locations[i])
                                                                           
                                                                           console.log("mycenter " + reCenter)
                                                                           console.log("first location" +  data[ 0 ].Latitude + " " + data[ 0 ].Longitude)
                                                                           
                                                                           console.log("works" + i)
                                                                           console.log("works markers[]" + markers.length)
                                                                           point[k].infowindow.open(map, point[k]);
                                                                           
                                                                           map.setCenter(reCenter);
                                                                           console.log("Map position: " +map.center)
                                                                           if (desktop == true) {
                                                                           map.panBy(-370,-300);
                                                                           } else {
																				map.panBy(0,-400);
																			}                                                                         
                                                            };
                                             
                                             
                                             $(".one").on( 'click', function() {                                                
                                                            
                                                            $(this).addClass("active-location").siblings().removeClass("active-location");
                                                            for(var a = 0; a < data.length; a++) {
                                                                           if ($(this).find("button#title").text() == data[ a ].LocationName) {
                                                                                          showInfo(markers, a);
                                                                           }
                                                            }
                                             });
                                             
                                             // for locator
             // remove accordion class from 'one' class
             // change moreinfo/ more class from id
                                             $( moreinfobutton ).on('click', function (){
               console.log("click works")
               if ($(this).closest('.one').find( moreinfocontent ).css('display') == 'none') {
                              console.log("has open now")
                              $(this).closest('.one').find( moreinfocontent ).css('display','block');
                              $(this).text('< Less info');
                                                            console.log("gets here");
               } else {
                              console.log("has closed now")
                              $(this).closest('.one').find( moreinfocontent ).css('display','none');
                              $(this).text('> More info');
                                                            console.log("gets here");
               }
});

                                                            
                                             
                                             $(".one").hover(function() {
                                                                           // if(!($(this).hasClass("active-location"))){
                                                                           $(this).addClass("active-location");
                                                                           // }
                                                            }, function() {
                                                                           // if(!($(this).hasClass("active-location"))){
                                                                                          $(this).removeClass("active-location");
                                                                                          
                                                                           // }
                                                               });

                                             $('.one').on('click', function() {
                $('.one').removeClass('clickred');
                $(this).addClass('clickred');
                });

                                             $('.tab1').on('click', function() {
                                                            console.log("tab1 click works")
               $(this).addClass('is-active');
               $(this).closest(moreinfocontent).find('.tab2').removeClass('is-active');
               $(this).closest(moreinfocontent).find('.panel2').removeClass('is-active');
               $(this).closest(moreinfocontent).find('.panel1').addClass('is-active');
                                                            })

                                             $('.tab2').on('click', function() {
                                                            console.log("tab2 click works")
               $(this).addClass('is-active');
               $(this).closest(moreinfocontent).find('.tab1').removeClass('is-active');
               $(this).closest(moreinfocontent).find('.panel1').removeClass('is-active');
               $(this).closest(moreinfocontent).find('.panel2').addClass('is-active');
                                                            })

                              

                                                            
                                                                           
                                             console.log("markers length here: " + markers.length);
                                             if(markers.length != 0) {
                                                            setTimeout(function(){
                                                            markers [ 0 ].infowindow.open(map, markers [ 0 ]);}, 500);
                                             }
                                             
                                             if (desktop == true) {
                                             map.panBy(-370,-300);
                                             } else {
																				map.panBy(0,-400);
																			}
                                             console.log("end marker" + markers);       
                                             
                                             $('.one').first().addClass('clickred');                           
               
                                             
                              
                                             
                                             
                                                            
               //                           windowInfo[0].open(map,markers[ 0 ]);
                              
                              
               
                              }catch(err) {
                                                            console.log(err.message);
                                             }              
                              
               }              
               
               

};