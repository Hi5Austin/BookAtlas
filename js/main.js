var markers = {};
var count = 0;
function makeMarker(lat,lng){
  markers[count] = new google.maps.Marker({
  	 		position: {'lat':lat,'lng':lng},
  	 		map: map,
  	 		title: "" + count,
  		});
  count += 1;
}
