import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '32rem',
  height: '32rem'
};

const center = {
  lat: 41.37959,
  lng: -4.42772
};

const castle = {
  lat: 41.36527,
  lng: -4.53725
};

const church = {
  lat: 41.39743,
  lng: -4.31429
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const goToIscarGoogleMap = () => {
    const newWindow = window.open(`https://www.google.com/maps/search/?api=1&query=${castle['lat']},${castle['lng']}`, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = nul
  }

  const goToChurchGoogleMap = () => {
    const newWindow = window.open(`https://www.google.com/maps/search/?api=1&query=${church['lat']},${church['lng']}`, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = nul
  }

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onUnmount={onUnmount}
        
      >
        <Marker
            onLoad={onLoad}
            position={castle}
            onClick={() => {goToIscarGoogleMap()}}
            />

        <Marker
            onLoad={onLoad}
            position={church}
            onClick={() => {goToChurchGoogleMap()}}
            />
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)