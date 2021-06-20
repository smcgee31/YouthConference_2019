import React, { useState } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import { Paper, Typography } from '@material-ui/core';

const MapContainer = (props) => {
  const [showingInfoMarker, setShowingInfoMarker] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});

  const onMarkerClick = (props, marker, e) => {
    setActiveMarker(marker);
    setShowingInfoMarker(true);
  };

  const onMapClick = (props) => {
    if (showingInfoMarker) {
      setShowingInfoMarker(false);
      setActiveMarker(null);
    }
  };

  return (
    <div
      style={{
        height: 600,
        width: '100%',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        padding: 0,
      }}
    >
      <Map
        item
        xs={12}
        google={props.google}
        onClick={onMapClick}
        zoom={13}
        initialCenter={{
          lat: 40.156213,
          lng: -111.539122,
        }}
      >
        <Marker
          onClick={onMarkerClick}
          title={'Cherry Campground'}
          position={{
            lat: 40.168715,
            lng: -111.477647,
          }}
          name={'Cherry Campground'}
        />
        <InfoWindow marker={activeMarker} visible={showingInfoMarker}>
          <Paper>
            <Typography variant="headline" component="h4">
              Cherry Campground
            </Typography>
          </Paper>
        </InfoWindow>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_API_KEY,
})(MapContainer);
