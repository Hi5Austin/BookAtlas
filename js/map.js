var map;
function initialize() {
  var mapProp = {
    center: new google.maps.LatLng(7.317238425217869, 8),
    zoom:2,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map"), mapProp);
}
//google.maps.event.addDomListener(window, 'load', initialize);
//initialize();

var markers = {};
var count = 0;

function makeMarker(lat,lng){
  console.log('MARKED')
  markers[count] = new google.maps.Marker({
  	 		position: {'lat':Number(lat),'lng':Number(lng)},
  	 		map: map,
  	 		title: "" + count,
  		});
  count += 1;
}
