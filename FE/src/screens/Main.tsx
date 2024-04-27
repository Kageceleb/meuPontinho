import { useEffect, useState } from 'react';
import { View } from 'react-native';
import {
  getCurrentPositionAsync,
  LocationAccuracy,
  LocationObject,
  requestForegroundPermissionsAsync,
  watchPositionAsync
} from 'expo-location';
import { styles } from './styles/styles'
import MapView, { Marker } from 'react-native-maps';


export default function Main() {

  const [location, setLocation] = useState<LocationObject | null>(null);
  async function requestLocationPermission() {
    const { granted } = await requestForegroundPermissionsAsync();
    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition)
    }

  }

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(()=>{
    watchPositionAsync({
      accuracy:LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1
    }, (response)=>{
      console.log("Nova localização", response)
      setLocation(response)
    })
  },[])

  return (
    <View style={styles.container}>
      {
        location &&
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker 
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          />
        </MapView>
      }
    </View>
  );
}


