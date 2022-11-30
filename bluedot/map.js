function initMap() {
    const myLatlng = { lat: 40.806912, lng: -73.963060 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: myLatlng,
        disableDefaultUI: true,
        zoomControl: true,
    });
    const marker = new google.maps.Marker({
        position: myLatlng,
        map,
        title: "Click to zoom",
    });

    map.addListener("center_changed", () => {
      // 3 seconds after the center of the map has changed, pan back to the
      // marker.
        window.setTimeout(() => {
        map.panTo(marker.getPosition());
        }, 3000);
    });
    marker.addListener("click", () => {
        map.setZoom(19);
        map.setCenter(marker.getPosition());
    });

    google.maps.event.addListener(map, 'click', function (event) {
        displayCoordinates(event.latLng);               
    });

            // Create the initial InfoWindow.
        let infoWindow = new google.maps.InfoWindow({
            content: "Click the map to get Lat/Lng!",
            position: myLatlng,
        });
        infoWindow.open(map);
        // Configure the click listener.
        map.addListener("click", (mapsMouseEvent) => {
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
}

window.initMap = initMap;