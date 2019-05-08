// Create a new map, style it, and display it on the web
// Initialize and add the map

function initMap() {
  // The location of University Center, The New School
  var aus = {lat: -18.2871, lng: 147.6992};
  var ita = {lat: 45.444958, lng: 12.3155};
  var mt = {lat: 48.7596, lng: -113.7870};
  var ds = {lat: 31.5590, lng: 35.4732};
  var amz = {lat: -2.163106, lng: -55.126648};
  var yaml = {lat: 70.0000, lng: 70.0000};
  var mal = {lat: 3.2028, lng: 73.2207};
  var fld = {lat: 24.555059, lng: -81.779984};
  var rv = {lat: 48.864716, lng: 2.349014};
  var mub = {lat: 19.0760, lng: 72.8777};
  var alp = {lat: 46.8876, lng: 9.6570};
  var napa = {lat: 38.5025, lng: -122.2654};
  var rdj = {lat: -22.752754, lng: -42.864876};
  var cntr = {lat: 40.735973, lng: -73.994818};

  // The map, centered to show all the pins
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 2.5, center: cntr});

  // The marker, positioned at different buildings of The New School
  var markerAUS = new google.maps.Marker({position: aus, map: map, animation: google.maps.Animation.DROP, title: 'The Great Barrier Reef, Australia'});
  var markerITA = new google.maps.Marker({position: ita, map: map, animation: google.maps.Animation.DROP, title: 'Venice, Italy'});
  var markerMT = new google.maps.Marker({position: mt, map: map, animation: google.maps.Animation.DROP, title: 'Glacier National Park, Montana'});
  var markerDS = new google.maps.Marker({position: ds, map: map, animation: google.maps.Animation.DROP, title: 'The Dead Sea'});
  var markerAMZ = new google.maps.Marker({position: amz, map: map, animation: google.maps.Animation.DROP, title: 'The Amazon, Brazil'});
  var markerYML = new google.maps.Marker({position: yaml, map: map, animation: google.maps.Animation.DROP, title: 'The Yamal Peninsula, Russia'});
  var markerMAL = new google.maps.Marker({position: mal, map: map, animation: google.maps.Animation.DROP, title: 'The Maldives, Indian Ocean'});
  var markerFLD = new google.maps.Marker({position: fld, map: map, animation: google.maps.Animation.DROP, title: 'Key West, Florida'});
  var markerRV = new google.maps.Marker({position: rv, map: map, animation: google.maps.Animation.DROP, title: 'The Rhône Valley, France'});
  var markerMUB = new google.maps.Marker({position: mub, map: map, animation: google.maps.Animation.DROP, title: 'Mumbai, India'});
  var markerALP = new google.maps.Marker({position: alp, map: map, animation: google.maps.Animation.DROP, title: 'The Alps'});
  var markerNAPA = new google.maps.Marker({position: napa, map: map, animation: google.maps.Animation.DROP, title: 'Napa Valley, California'});
  var markerRDJ = new google.maps.Marker({position: rdj, map: map, animation: google.maps.Animation.DROP, title: 'Rio de Janeiro, Brazil'});}
  
// Note: To change the icon, add this to the Marker : , icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'