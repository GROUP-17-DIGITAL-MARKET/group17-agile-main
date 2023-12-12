import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function TrackOrder() {
    const accraRegion = {
        latitude: 5.6037,
        longitude: -0.1870,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={accraRegion}
      >
        <Marker coordinate={accraRegion} title="Accra, Ghana" />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
