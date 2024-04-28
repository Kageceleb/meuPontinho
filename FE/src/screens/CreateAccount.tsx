import { View, Text, Button, Keyboard, KeyboardAvoidingView, TextInput } from 'react-native';
import { styles } from './styles/styles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import DrawerRoutes from '../routes/drawer.routes';
import { useNavigation } from '@react-navigation/native';


export default function CreateAccount() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Text>Login Meu Pontinho</Text>
      <View style={styles.form}>
        <TextInput style={styles.field}>nome</TextInput>
        <TextInput style={styles.field}>email</TextInput>
        <TextInput style={styles.field}>sobrenome</TextInput>
        <TextInput style={styles.field}>tipo de conta</TextInput>
        <TextInput style={styles.field}>curso</TextInput>
        <TextInput style={styles.field}>senha</TextInput>
        <TextInput style={styles.field}>repita a senha</TextInput>
        <Text>recuperar</Text>
      </View>

      <Button
        title="Crie sua conta"
        onPress={() => navigation.navigate('createAccount')}
      />
      <Button
        title="Logar"
        onPress={() => navigation.navigate('main')}
      />
    </View>
  );
}