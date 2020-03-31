var lat = parseFloat('116.39126329999999');
var lng = parseFloat('39.9130967');

function initialize() {

  var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('view'), {
        position: {lat: lat, lng: lng},
        pov: {
          heading: 0,
          pitch: 0
        },
        addressControl: false,
        showRoadLabels: false,
        linksControl: false,
        zoomControl: false,
        fullscreenControl: false,
        disableDefaultUI: true,
        clickToGo: false,
      });
}
