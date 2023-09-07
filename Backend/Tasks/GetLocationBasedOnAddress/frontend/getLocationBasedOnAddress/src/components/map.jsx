import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { useContext } from 'react'
import { PlacesContext } from '../App'

export default function MapComp(props) {
  const { places } = useContext(PlacesContext)

  return (
    <div>
      <MapContainer style={{ height: "400px" }} center={places.selectedCity.length ? places.selectedCity : [12.9457315, 77.5717632]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places.foundPlaces.length == 0 ?
          places.place.map((ele, i) => {
            return <Marker key={i} position={[Number(ele.lat), Number(ele.lon)]}>
              <Popup>
                {ele.formattedAdd}
              </Popup>
            </Marker>
          }) :
          places.foundPlaces.map((ele, i) => {
            return <Marker key={i} position={[Number(ele.lat), Number(ele.lon)]}>
              <Popup>
                {ele.formattedAdd}
              </Popup>
            </Marker>
          })}
      </MapContainer>
    </div>
  )
}