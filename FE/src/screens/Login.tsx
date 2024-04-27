import {View, Text, Button, Keyboard, KeyboardAvoidingView} from 'react-native';
import {styles} from './styles/styles' 
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Form } from '../components/Form';


export default function Login() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior='position' enabled>
          <>
          <Form />
          </>
        </KeyboardAvoidingView>

      </TouchableWithoutFeedback>
      
    </View>
  );
}