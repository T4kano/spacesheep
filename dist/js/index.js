function initMap() {
    var location = { lat: -23.085076844458957, lng: -47.225054519829676 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
