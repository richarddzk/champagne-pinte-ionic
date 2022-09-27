import L, { LatLngExpression } from 'leaflet'
import { Marker } from 'react-leaflet'
import React from 'react'

export interface MarkerIconProps {
  iconUrl: string
  position: LatLngExpression
}

const MarkerIcon: React.FC<MarkerIconProps> = ({ iconUrl, position }) => {
  const icon = new L.Icon({
    // iconUrl: require('../img/marker-pin-person.svg'),
    // iconRetinaUrl: require('../img/marker-pin-person.svg'),
    iconUrl,
    iconRetinaUrl: iconUrl,
    // iconAnchor: null,
    // popupAnchor: null,
    // shadowUrl: null,
    // shadowSize: null,
    // shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
  })

  return <Marker position={position} icon={icon} />
}

export default MarkerIcon
