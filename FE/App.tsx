import { useEffect, useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Text, View } from 'react-native';
import { styles } from './styles';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject, watchHeadingAsync, watchPositionAsync, LocationAccuracy} from 'expo-location'
import MapView, {Marker} from 'react-native-maps';

export default function App() {
  const [location, setLocation] = useState<LocationObject | null>(null);

  const mapRef = useRef<MapView>(null)
  
  async function requestLocationPermition() {
    const { granted } = await requestForegroundPermissionsAsync()

    if (granted){
      const currentPosition =  await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  }

  useEffect (()=>{
    requestLocationPermition();
  },[])

  useEffect(()=>{
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 5000,
      distanceInterval: 1
    }, (response)=>{
      console.log("new loc", response)
      setLocation(response)
      mapRef.current?.animateCamera({
        pitch: 50,
        center: response.coords
      })
    })
  },[])

  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.info}>Meu Pontinho</Text>
      <Text style={styles.text}>Nome da Disciplina</Text>
      <Text style={styles.text}>Nome do Aluno da Silva Soares</Text>
     {location &&
      <MapView
      ref={mapRef}
      style={styles.map}
      initialRegion={{
       latitude: location.coords.latitude,
       longitude: location.coords.longitude,
       latitudeDelta: 0.005,
       longitudeDelta: 0.005
      }}
      > 
      <Marker 
      coordinate={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude

      }}
           />
      </MapView>}
      <Text style={styles.text}>Entrada</Text>
      <Text style={styles.text}>Referência: 08:00</Text>
      <Text style={styles.text}>Contador (cronometro)</Text>
      <Button color='#6a5acd' title='Entrada'  onPress={() => Alert.alert('Simple Button pressed')}/>
      <Text style={styles.text}></Text>

    </View>
    
  );
}
