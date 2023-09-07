import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { useContext } from 'react'
import { PlacesContext } from '../App'

export default function MapComp(props) {
  const { places } = useContext(PlacesContext)

  return (
    <div>
      <MapContainer style={{ height: "400px" }} center={[12.9457315, 77.5717632]} zoom={7} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places.position.map((ele, i) => {
          console.log(ele, "pos")
          return <Marker key={i} position={ele}>
            <Popup>
              A pretty CSS3
            </Popup>
          </Marker>
        })}
      </MapContainer>
    </div>
  )
}