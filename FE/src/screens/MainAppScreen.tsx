import { useEffect, useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, FlatList, Modal, SafeAreaView, SectionList, Text, View } from 'react-native';
import { styles } from '../../styles';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject, watchHeadingAsync, watchPositionAsync, LocationAccuracy } from 'expo-location'
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { LogType } from '../components/Modal';
import Routes from '../routes';
import TabRoutes from '../routes/tab.routes';


const MainAppScreen = () => {
    // const navigation = useNavigation();
    const [visibleModal, setVisibleModal] = useState(false)

    //-----MAP----//
    const [location, setLocation] = useState<LocationObject | null>(null);
    const mapRef = useRef<MapView>(null)

    async function requestLocationPermition() {
        const { granted } = await requestForegroundPermissionsAsync()
        if (granted) {
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);
        }
    }
    useEffect(() => {
        requestLocationPermition();
    }, [])
    useEffect(() => {
        watchPositionAsync({
            accuracy: LocationAccuracy.Highest,
            timeInterval: 5000,
            distanceInterval: 1
        }, (response) => {
            console.log("new loc", response)
            setLocation(response)
            mapRef.current?.animateCamera({
                pitch: 50,
                center: response.coords
            })
        })
    }, [])
    return (

        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Text style={styles.headerSubItems} onPress={() => {}/*navigation.goBack()*/}>Sair</Text>
                <Text style={styles.headerTitle}>Meu Pontinho</Text>
                <Text style={styles.headerSubItems}>Opções</Text>

            </View>
            <Text style={styles.text}>Nome da Disciplina</Text>
            <Text style={styles.text}>Nome do Aluno da Silva Soares</Text>
            {location &&
                <MapView
                    style={styles.map}
                    ref={mapRef}
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
                </MapView>
            }
            <Text style={styles.text}>Referência: 08:00</Text>
            <View>
                <View style={styles.btsInnerContainer}>
                    <Button color='#6a5acd' title='Entrada' onPress={() => setVisibleModal(true)} />
                    <View style={styles.btsInnerSpace}></View>
                    <Button color='#6a5acd' title='=valor selecionado' onPress={() => Alert.alert('Marcação realizada')} />
                </View>
                <Modal
                    visible={visibleModal}
                    transparent={true}
                    onRequestClose={() => setVisibleModal(false)}
                    animationType="slide"
                >{<LogType handleClose={() => setVisibleModal(false)} />}</Modal>
            </View>

        </SafeAreaView>
    );
};
export default MainAppScreen;