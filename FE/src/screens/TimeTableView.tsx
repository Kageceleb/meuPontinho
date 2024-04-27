import {View, Text, StyleSheet} from 'react-native';
import {styles} from './styles/styles' 


export default function TimeTableView() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mostra as batidas do mes</Text>
    </View>
  );
}