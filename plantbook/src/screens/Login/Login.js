import React, { useState } from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    Span,
    TouchableOpacity,
    Alert,
} from 'react-native';
import firebase from '../../database/firebase';
import getError from '../../helpers/errores_es_mx';
import LoginStyles from './Login.forms';

const Login = (props) =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btnVisible, setBtnVisible] = useState(true);

    const validaLogin = async () => {

        let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        if (email.length < 1 || password.length < 1) {
            Alert.alert('ERROR','Campos vacios', [
                {
                    text: 'Rellenar los campos por favor',
                    onPress: () => setEmail(''),
                },
            ]);
            return;
        }

        if (!emailRegex.test(email)) {
            Alert.alert('ERROR','Correo Invalido', [
                {
                    text: 'Corregir',
                    onPress: () => setEmail(''),
                },
            ]);
            return;
        }
        
        setBtnVisible(false);
        
        try {
            const userFirebase = await firebase.auth.signInWithEmailAndPassword(
                email,
                password
            );

            Alert.alert(
                'Bienvenido',
                `${userFirebase.user.email}`,
                [
                    {
                        text: 'Acceder',
                        onPress: () => {
                            setBtnVisible(true);
                            props.navigation.navigate(
                                'Principal'
                            );
                        },
                    },
                ]
            );
        } catch (e) {
            Alert.alert('ERROR', getError(e.code), [
                {
                    text: 'Volver a intentar',
                    onPress: () => {
                        setBtnVisible(true);
                    },
                },
            ]);
        }
    }
    return(
        <View>
            <View>
                <Image
                    source={require('../../../assets/logo.png')}
                    />
            </View>

            <View>
                <Text>Iniciar Sesion</Text>
            </View>

            <View>
                <Text>E-mail</Text>
                <TextInput
                    placeholder='Correo Electronico'
                    keyboardType='email-address'
                    maxLength={50}
                    autoCapitalize='none'
                    onChangeText={(val) => setEmail(val)}
                    value={email}
                    require
                    />
            </View>

            <View>
                <Text>Contraseña</Text>
                <TextInput
                    placeholder='Contraseña'
                    keyboardType='default'
                    maxLength={20}
                    secureTextEntry
                    onChangeText={(val) => setPassword(val)}
                    value={password}
                    require
                    />
            </View>

            <View
                style={{
                    display: btnVisible ? 'flex' : 'none'
                    }}
                    >
                <Text
                    onPress={validaLogin}>
                        Iniciar Sesion
                </Text>
            </View>

            <View>
                <Text>¿No tienes una cuenta? Registrate Aqui</Text>
                <TouchableOpacity 
                    onPress={() => {props.navigation.navigate('Registro')
                    }}>
                    <Text>
                        Registrate
                    </Text>
                </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity 
                    onPress={() => {props.navigation.navigate('Contacto')
                    }}>
                    <Text>
                        Contactanos
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login;