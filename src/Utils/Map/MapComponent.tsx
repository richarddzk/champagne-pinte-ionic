import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { v4 as uuid } from 'uuid'
import { Icon, LatLngExpression, Point } from 'leaflet'
import { MapProps } from './Interface'
import 'leaflet/dist/leaflet.css'

export const iconPinte = new Icon({
  iconUrl: '/img/logo/markerLogo.webp',
  iconRetinaUrl: '/img/logo/markerLogo.webp',
  iconSize: new Point(512 * 0.2, 512 * 0.2)
})
export const iconGoogle = new Icon({
  iconUrl: '/img/logo/markerLogo.webp',
  iconRetinaUrl: '/img/logo/markerLogo.webp',
  iconSize: new Point(519 * 0.02, 512 * 0.02)
})

const Map: React.FC<MapProps> = ({ layer }) => {
  let url = 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
  if (layer === 2) {
    url = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
  }
  const markers: {
    icon: Icon<{
      iconUrl: string
      iconRetinaUrl: string
      iconSize: Point
    }>
    position: LatLngExpression
    popup: string
  }[] = [
    {
      icon: iconPinte,
      position: [48.818, 4.643],
      popup: 'Maison Pinte /n Lisse-en-Champagne'
    }
    // {
    //   icon: iconGoogle,
    //   position: [48.814, 4.6415],
    //   popup: 'Siege social de notre maison.',
    // },
  ]
  return (
    <MapContainer
      center={[48.8183, 4.64935]}
      zoom={14}
      scrollWheelZoom
      style={{ height: '100%', width: '100%' }}
      attributionControl={false}
    >
      <TileLayer
        // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={url}
      />{' '}
      {markers &&
        markers.map((marker) => (
          <Marker key={uuid()} icon={marker.icon} position={marker.position}>
            <Popup>{marker.popup}</Popup>
          </Marker>
        ))}
    </MapContainer>
  )
}

export default Map
