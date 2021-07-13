let scene = document.querySelector(".scene");
let parallax = new Parallax(scene);
window.sr = ScrollReveal(
    {
        delay: 200,
        origin: "right",
        duration: 2000,
        distance: "-25%"
    }
);
sr.reveal("#about-title");
sr.reveal(".about", { delay: 400 });
sr.reveal(".about-img", { delay: 400, origin: "left" });
sr.reveal("#stripe", { delay: 600 });
sr.reveal("#card-1", { origin: "top" });
sr.reveal("#card-2", { origin: "top", delay: 400 });
sr.reveal("#card-3", { origin: "top", delay: 600 });
sr.reveal("#card-4", { origin: "top", delay: 800 });
sr.reveal("#value-1");
sr.reveal("#value-2", { delay: 400 });
sr.reveal("#value-3", { delay: 600 });
sr.reveal("#partner-1", { delay: 400 });
sr.reveal("#partner-2");
sr.reveal("#partner-3", { delay: 600 });
sr.reveal("#partner-4", { delay: 400 });
sr.reveal("#partner-img", { origin: "left" });
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
