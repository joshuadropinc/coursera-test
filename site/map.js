function initMap(){
  var options = {
    zoom:18,
    center:{lat:35.6870,lng:-105.9378}
  }
  var map = new google.maps.Map(document.getElementById('map'), options);
}