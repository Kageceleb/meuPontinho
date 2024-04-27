import { View, Text, Button, Keyboard, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles/styles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import DrawerRoutes from '../routes/drawer.routes';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <Text>nome</Text>
      <Text>senha</Text>
      <Text>recuperar</Text>
      <Button
        title="Logar"

        onPress={()=> navigation.navigate('main')}
      />
    </View>
  );
}