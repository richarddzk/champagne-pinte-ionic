import React from 'react'
import dynamic from 'next/dynamic'

const Map: React.FC = () => {
  const MapCompo = React.useMemo(
    () =>
      dynamic(
        () => import('./MapComponent'), // replace '@components/map' with your component's location
        {
          loading: () => <p>A map is loading</p>,
          ssr: false // This line is important. It's what prevents server-side render
        }
      ),
    []
  )
  return <MapCompo />
}

export default Map
