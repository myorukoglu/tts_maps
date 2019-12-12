// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
// $(document).ready(function() {
//   function initialize() {
//     var myCoords = new google.maps.LatLng(33.784624, -84.42203);

//     var mapOptions = {
//       center: myCoords,
//       zoom: 15
//     };

//     var map = new google.maps.Map(
//       document.getElementById("map-canvas"),
//       mapOptions
//     );
//     var marker = new google.maps.Marker({
//       position: myCoords,
//       map: map,
//       title: "Stronbox West"
//     });
//     var image = "assets/icon.png";
//     var marker = new google.maps.Marker({
//       position: myCoords,
//       map: map,
//       icon: image
//     });
//     var contentString =
//       "<h2>Strongbox West</h2>" + "<p>Where all your dreams come true.</p>";

//     var infowindow = new google.maps.InfoWindow({
//       content: contentString
//     });

//     google.maps.event.addListener(marker, "click", function() {
//       infowindow.open(map, marker);
//     });
//   }

//   google.maps.event.addDomListener(window, "load", initialize);
// });
$(document).ready(function (){

  function initialize() {
      if(destinations.length === 0){
        return
      }
      var myCoords = new google.maps.LatLng(destinations[0].latitude,destinations[0].longitude);
      // var myCoords = new google.maps.LatLng(latitude,longitude);
      
      var address = "test"

      var mapOptions = {
         zoom: 12,
         scrollwheel: false,   
         center: myCoords
      }
  
      var map = new google.maps.Map(document.getElementById('destination-map'), mapOptions);
      destinations.forEach(destination => {
        var cords = new google.maps.LatLng(destination.latitude,destination.longitude);
        var contentString = '<h2>'+ address + " " + destination.latitude + " " + destination.longitude + '</h2>' + "<img src='" + destination.image + "'/>"
  
        var infowindow = new google.maps.InfoWindow({
        content: contentString
        });
        var marker = new google.maps.Marker({
            position: cords,
            map: map,
            title: address,
            draggable:true
        });
        google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
        });
      });
  
      // var marker = new google.maps.Marker({
      //   position: myCoords,
      //   map: map,
      //   title: address
      // });
   
      // var contentString = '<h2>'+ address + '</h2>';
  
      // var infowindow = new google.maps.InfoWindow({
      //   content: contentString
      // });
  
      // google.maps.event.addListener(marker, 'click', function() {
      //   infowindow.open(map,marker);
      // });
  }
  
  google.maps.event.addDomListener(window, 'load', initialize);
  });