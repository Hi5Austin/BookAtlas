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

function makeMarker(lat,lng,data){
  console.log(data);
  markers[count] = new google.maps.Marker({
  	 		position: {'lat':Number(lat),'lng':Number(lng)},
  	 		map: map
  		});
  //markers[count].title = data[0];
  markers[count].addListener('click', function() {
    console.log(this);//change the info on a box at the side of the screen
  });
  count += 1;
}
