// Crear un mapa centrado en una ubicación específica
let map = L.map("map").setView([-25.325574, -57.585395], 13);

// Agregar capa de azulejos de OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

let properties
function copiar() {
	navigator.clipboard.writeText(JSON.stringify(properties,null,2))
	console.log(properties)
}

// Cargar shapefile
var shpfile = new L.Shapefile('./ZONA_POSTAL_PARAGUAY.zip', {
			onEachFeature: function(feature, layer) {
				if (feature.properties) {
					properties = feature.properties
					layer.bindPopup('<div class="popup"><div class="button-container"><button onclick="copiar()">Copiar JSON</button></div><div class="properties-container">'.concat(Object.keys(feature.properties).reduce(function(acumulador, k) {
						return acumulador + `<div class="propertie-container"><div class="key">${k}</div><div class="value">${feature.properties[k]}</div></div>`;
					}, "")).concat("</div></div>"));
				}
			}
		});
		shpfile.addTo(map);

map.on("click", function (e) {
  L.popup()
  .setLatLng(e.latlng)
  .setContent("Latitud: " + e.latlng.lat + "<br>Longitud: " + e.latlng.lng)
  .openOn(map);
});