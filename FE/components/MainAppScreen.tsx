import { useEffect, useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Text, View } from 'react-native';
import { styles } from '../styles';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject, watchHeadingAsync, watchPositionAsync, LocationAccuracy} from 'expo-location'
import MapView, {Marker} from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const MainAppScreen = () => {

    const navigation = useNavigation();

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
            <View style={styles.header}>
                <Text style={styles.headerSubItems} onPress={() => navigation.goBack()}>Sair</Text>
                <Text style={styles.headerTitle}>Meu Pontinho</Text>
                <Text style={styles.headerSubItems}>Opções</Text>

            </View>
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

            <Text style={styles.text}>Referência: 08:00</Text>
            

            <View style={styles.btsContainer}>
                <View style={styles.btsInnerContainer}>
                    <Button color='#6a5acd' title='Entrada' onPress={() => Alert.alert('Simple Button pressed')}/>
                    <View style={styles.btsInnerSpace}></View>
                    <Button color='#6a5acd' title='Saída' onPress={() => Alert.alert('Simple Button pressed')}/>
                </View>

                <View style={styles.btsInnerSpace}></View>

                <View style={styles.btsInnerContainer}>
                    <Button color='#6a5acd' title='Saída Intervalo' onPress={() => Alert.alert('Simple Button pressed')}/>
                    <View style={styles.btsInnerSpace}></View>
                    <Button color='#6a5acd' title='Retorno Intervalo' onPress={() => Alert.alert('Simple Button pressed')}/>
                </View>
            </View>

            <Text style={styles.text}></Text>
        </View>
        
    );
    

};

export default MainAppScreen;