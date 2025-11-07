// Search functionality
document.querySelector('.search-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    const searchTerm = document.getElementById('search-box').value.toLowerCase();
    searchLocation(searchTerm);
});
function searchLocation(searchTerm) {
    document.querySelector('.search-form').classList.remove('active');
    let found = false;
    locations.forEach((location)=>{
        const locationKey = location.key.toLowerCase();
        const locationName = translations[currentLanguage][`${location.key}_title`].toLowerCase();
        if (locationKey.includes(searchTerm) || locationName.includes(searchTerm)) {
            found = true;
            map.setView([
                location.lat,
                location.lng
            ], 18);
            const marker = markers.find((m)=>m.locationKey === location.key);
            if (marker) {
                marker.fire('click');
                // Highlight the marker
                const originalColor = marker.options.icon.options.markerColor;
                marker.setIcon(createCustomIcon({
                    markerColor: 'red',
                    icon: marker.options.icon.options.icon
                }));
                setTimeout(()=>{
                    marker.setIcon(createCustomIcon({
                        markerColor: originalColor,
                        icon: marker.options.icon.options.icon
                    }));
                }, 3000);
            }
        }
    });
    if (!found) alert(translations[currentLanguage]['search_not_found'] || 'Location not found');
}
// Update createMarkers function
function createMarkers() {
    markers = [];
    locations.forEach((location)=>{
        const marker = L.marker([
            location.lat,
            location.lng
        ], {
            icon: createCustomIcon({
                markerColor: getColorForLocationType(location.key),
                icon: location.icon || 'info-sign'
            })
        }).addTo(map);
        marker.locationKey = location.key;
        marker.on('click', function() {
            showLocationInfo(location);
        });
        markers.push(marker);
    });
}
function getColorForLocationType(locationKey) {
    const typeColors = {
        'parku': 'green',
        'piramida': 'orange',
        'dajti': 'darkgreen',
        'zoo': 'purple',
        'kalaja': 'red',
        'teatri': 'darkred',
        'xhamia': 'cadetblue',
        'stadiumi': 'darkpurple',
        'ambasada': 'beige',
        'farka': 'blue',
        'petrela': 'darkred',
        'pazari': 'orange',
        'sheshi': 'red',
        'muzeu': 'lightgreen',
        'kisha': 'white',
        'ura': 'lightgray',
        'materniteti': 'pink',
        'ushtarak': 'lightblue',
        'kulla': 'black',
        'lana': 'blue',
        'banka': 'green',
        'playground': 'lightgreen',
        'radio': 'purple',
        'bashkia': 'darkblue',
        'hoteli': 'lightred',
        'bektashi': 'white',
        'varri': 'darkgreen',
        'shkenca': 'green',
        'biri': 'blue',
        'zoguip': 'purple',
        'zogizi': 'darkpurple',
        'ubt': 'darkgreen',
        'kino': 'red',
        'pali': 'white',
        'erzen': 'blue',
        'brig': 'darkred',
        'kongres': 'orange',
        'farie': 'lightblue',
        'partizani': 'red',
        'ministrat': 'darkblue',
        'parlament': 'red',
        'politeknik': 'blue',
        'student': 'green',
        'nentori': 'darkred',
        'barrikada': 'red',
        'dibra': 'purple',
        'durres': 'blue',
        'kavaja': 'orange',
        'luigj': 'darkblue',
        'qemal': 'red',
        'hoxha': 'darkpurple',
        'kukull': 'pink',
        'vila': 'lightgray'
    };
    return typeColors[locationKey] || 'blue';
}
function createCustomIcon(options = {}) {
    return L.divIcon({
        className: 'custom-marker',
        html: `<div style="background-color: ${options.markerColor || 'blue'}; 
               color: white; 
               border-radius: 50%; 
               width: 30px; 
               height: 30px; 
               display: flex; 
               align-items: center; 
               justify-content: center;">
               <i class="glyphicon glyphicon-${options.icon || 'info-sign'}" style="font-size: 14px;"></i>
             </div>`,
        iconSize: [
            30,
            30
        ],
        iconAnchor: [
            15,
            15
        ],
        markerColor: options.markerColor,
        icon: options.icon
    });
}

//# sourceMappingURL=frontend.42a3a564.js.map
