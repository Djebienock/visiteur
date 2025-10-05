function initMap() {
  const fes = { lat: 34.0331, lng: -5.0003 }; // Coordonnées de Fès
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: fes,
  });
  new google.maps.Marker({
    position: fes,
    map,
    title: "Bienvenue à Fès 🇲🇦",
  });
}

console.log("Bienvenue sur la plateforme touristique de Fès !");
