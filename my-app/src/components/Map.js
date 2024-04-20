import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'

function Map() {
    const position = [51.505, -0.09]
    const limeOptions = { color: 'lime' }
    const polyline = [
        [51.505, -0.09],
        [51.51, -0.1],
        [100, -100],
      ]

    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height: '100vh', width: '100vw'}}> 
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            <Polyline pathOptions={limeOptions} positions={polyline} />
        </MapContainer>

    );
  }

export default Map;