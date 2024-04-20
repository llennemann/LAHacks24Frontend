import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
function Map() {
    const limeOptions = { color: 'black', width : 2 };
    const coordinates = {
        "Los Angeles": [34.0522, -118.2437],
        "Kolkata": [22.5726, 88.3639],
        "New York": [40.7128, -74.0060],
        "San Francisco": [37.7749, -122.4194],
        "Nairobi": [-1.286389, 36.817223]
    };

    const routes = [
        [coordinates["Los Angeles"], coordinates["Kolkata"]],
        [coordinates["Los Angeles"], coordinates["New York"]],
        [coordinates["San Francisco"], coordinates["Nairobi"]]
    ];

    return (
        <div id='map'>
            <MapContainer center={[34.0522, -118.2437]} zoom={2} scrollWheelZoom={false} style={{height: '90vh', width: '80vw'}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    \
                
                {Object.entries(coordinates).map(([city, pos]) => (
                    <Marker key={city} position={pos}>
                        <Popup>{city}</Popup>
                    </Marker>
                ))}
               
                {routes.map((route, index) => (
                    <Polyline key={index} pathOptions={limeOptions} positions={route} />
                ))}
            </MapContainer>
        </div>
    );
}

export default Map;
