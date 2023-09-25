import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === '123' && password === '123') {        
            navigation.navigate('MainAppScreen');

        } else {      
            Alert.alert('Login Falhou', 'Usuário ou Senha inválidos');
        }
    };

    return (
        <View style={styles.container}>
        <Text style={styles.label}>Usuario</Text>
        <TextInput
            style={styles.input}
            placeholder="Ex: 00012345678"
            onChangeText={(text) => setUsername(text)}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
            style={styles.input}
            placeholder="Senha cadastrada"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
        />

        <Button title="Entrar" onPress={handleLogin} />
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
    },
});

export default LoginScreen;