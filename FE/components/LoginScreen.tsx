import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
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

    const handleSignin = () => {
        Alert.alert('Teste', 'Função para Cadastrar-se');
    };

    const handleForgotPassword = () => {
        Alert.alert('Teste', 'Esqueci minha senha');
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                source={require('../assets/anima.png')}
                style={styles.image}
                />
                <Image
                source={require('../assets/meu_pontinho.png')}
                style={styles.image}
                />
            </View>

            <Text style={styles.label}>Usuario</Text>
            <TextInput
                style={styles.input}
                placeholder="   Ex: 00012345678"
                onChangeText={(text) => setUsername(text)}
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput
                style={styles.input}
                placeholder="   Senha cadastrada"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />

            <Text style={styles.forgotPasswordLink} onPress={handleForgotPassword}>
            Esqueci minha senha
            </Text>

            <View style={styles.btContainer}>
                <Button title="Entrar" onPress={handleLogin} />
                <View style={styles.spaceBts}></View>
                <Button title="Cadastrar-se" onPress={handleSignin} />
            </View>

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
        forgotPasswordLink: {
            color: 'blue',
            textDecorationLine: 'underline',
            marginTop: 5,
        },
        btContainer: {
            marginTop:60,
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'space-between',
        },
        imageContainer: {
            marginTop: -120,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        image: {       
            width: 180,
            height: 180,
            resizeMode: 'contain',
        },
        spaceBts: {
            height:40,
        },
});

export default LoginScreen;