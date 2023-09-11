import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { useContext, useEffect, useState } from 'react'
import { PlacesContext } from '../App'

export default function MapComp(props) {
  const { places } = useContext(PlacesContext)
  const [positions, setPositions] = useState([12.9457315, 77.5717632])

  console.log(positions)

  //custom function to change map view based on change in positions
  function ChangeMapView({ coords }) {
    const map = useMap();
    map.flyTo(coords, map.getZoom())
    // map.setView(coords, map.getZoom());
    return null;
  }

  //to trigger when selected coords updated so that the map center changes
  useEffect(() => {
    if (places.selectedCity.length) {
      setPositions(places.selectedCity)
    }
  }, [places.selectedCity])

  useEffect(() => {
    if (places.addedPlace.length) {
      setPositions(places.addedPlace)
    }
  }, [places.addedPlace])

  return (
    <div>
      <MapContainer style={{ height: "400px", width: '100%' }} center={positions} zoom={11} scrollWheelZoom={false}>
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
          //To change center map position
        <ChangeMapView coords={positions} />
      </MapContainer>
    </div>
  )
}