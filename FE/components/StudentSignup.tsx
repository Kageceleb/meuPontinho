import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StudentSignup = () => {

    const navigation : any = useNavigation();
    const [username, setUsername] = useState('');
    const [userRA, setUserRA] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text>Nome do Estudante</Text>
            <TextInput 
                placeholder="   Digite seu nome" 
            />

            <Text>RA do Estudante</Text>
            <TextInput 
                placeholder="   Digite o número do seu RA"
            />

            <Text>Senha</Text>
            <TextInput 
                placeholder="   Digite sua senha" 
                secureTextEntry={true} 
            />

            <Text>Confirmação de Senha</Text>
            <TextInput 
                placeholder="   Repita sua senha" 
                secureTextEntry={true} 
            />
        </View>
    );
};

export default StudentSignup;