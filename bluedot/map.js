function initMap() {
    const myLatlng = { lat: 40.8990, lng: -73.7877 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: myLatlng,
        disableDefaultUI: true,
        zoomControl: true,
    });
    // Create the initial InfoWindow.
    let infoWindow = new google.maps.InfoWindow({
      content: "Move mouse over map to get LAT/LNG",
      position: myLatlng,
    });
  
    infoWindow.open(map);
    // Configure the click listener.
    map.addListener("mousemove", (mapsMouseEvent) => {
      // Close the current InfoWindow.
      infoWindow.close();
      // Create a new InfoWindow.
      infoWindow = new google.maps.InfoWindow({
        position: mapsMouseEvent.latLng,
      });
      infoWindow.setContent(
        JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
      );
      infoWindow.open(map);
    });

    const infowindow1 = new google.maps.InfoWindow({
        content: "Change the zoom level",
        position: myLatlng,
      });
    
      infowindow1.open(map);
      map.addListener("zoom_changed", () => {
        infowindow1.setContent("Zoom: " + map.getZoom());
      });

      map.addListener("mousemove", (mapsMouseEvent) => {
        displayCoordinates(mapsMouseEvent.latLng);
        });

      google.maps.event.addListener(map, "mousemove", function (event) {
        displayCoordinates(event.latLng);               
    });
  }

  function displayCoordinates(pnt) {
    document.getElementById("lat").innerHTML = pnt.lat();
    document.getElementById("lng").innerHTML = pnt.lng();
    console.log(pnt.lat());
    console.log(pnt.lng());
}

window.initMap = initMap;
