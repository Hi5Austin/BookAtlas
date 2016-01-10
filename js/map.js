var map;
function initialize() {
  var styles = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#1F75E3"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": 17
            },
            {
                "color": "#be2a3f"
            },
            {
                "saturation": "0"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            },
            {
                "color": "#be2a3f"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#1f3e85"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#1F75E3"
            },
            {
                "lightness": 17
            }
        ]
    }
    ];

  var mapProp = {
    mapTypeControlOptions:{
      mapTypeIds:['Styled']
    },
    center: new google.maps.LatLng(7.317238425217869, 8),
    zoom:2,
    mapTypeId:'Styled'
  };
  var div = document.getElementById("map");
  console.log("Got the Map Data");
  map = new google.maps.Map(div, mapProp);
  var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
    map.mapTypes.set('Styled', styledMapType);
}
//google.maps.event.addDomListener(window, 'load', initialize);
//initialize();

var markers = {};
var count = 0;

function makeMarker(lat,lng,data,num){
  console.log(data);
  markers[count] = new google.maps.Marker({
  	 		position: {'lat':Number(lat),'lng':Number(lng)},
  	 		map: map,
       // label: "" + num
  		});
  //markers[count].title = data[0];
  // markers[count].addListener('click', function() {
  //   console.log(this);//change the info on a box at the side of the screen
  // });
  count += 1;
}
