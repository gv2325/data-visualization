
let map;

function initMap() {
    const originalMapCenter = new google.maps.LatLng(40.77, -73.77);
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 0,
        center: originalMapCenter,
    });

    const infowindow = new google.maps.InfoWindow({
        content: "Change the zoom level",
        position: originalMapCenter,
    });

    infowindow.open(map);
    map.addListener("zoom_changed", () => {
        infowindow.setContent("Zoom: " + map.getZoom());
    });
}

window.initMap = initMap;