import React, { useState } from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    Span,
    TouchableOpacity,
    Alert,
    StyleSheet
} from 'react-native';
import firebase from '../../database/firebase';
import getError from '../../helpers/errores_es_mx';
import LoginStyles from './Login.forms';
import email from 'react-native-email'; 

handleEmail = () => {
    const to = ['plantbook@gmail.com', 'plantbook@gmail.com'] 
    email(to, {
        cc: ['plantbook@gmail.com', 'plantbook@gmail.com'], 
        bcc: 'eliash5239@gmail.com', 
        subject: 'Queja o sugerencia',
        body: 'Escribe aqui lo que deseas comentarnos',
        checkCanOpen: false 
    }).catch(console.error)
}

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
        <View style={styles.container}>
            <View>
                <Image
                    source={require('../../../assets/logo.png')}
                    />
            </View>

            <View style={{marginTop:20, fontSize:30, fontWeight:'bold', fontSize:50,}}>
                <Text>Iniciar Sesion</Text>
            </View>

            <View style={styles.view2}>
                <Text>E-mail</Text>
                <TextInput
                    style={styles.view}
                    placeholder='Correo Electronico'
                    keyboardType='email-address'
                    maxLength={50}
                    autoCapitalize='none'
                    onChangeText={(val) => setEmail(val)}
                    value={email}
                    require
                    />
            </View>

            <View style={styles.view2}>
                <Text>Contraseña</Text>
                <TextInput
                    style={styles.view}
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
                    display: btnVisible ? 'flex' : 'none', marginTop:40
                    }}
                    >
                <Text
                    style={{ alignSelf:'center', textAlign:'center', borderRadius:20, borderColor:'green', borderWidth:1, width:90, height:20 ,backgroundColor:'#35DB28'}}
                    onPress={validaLogin}>
                        Ingresar
                </Text>
            </View>

            <View style={{marginTop:40, alignItems:'center'}}>
                <Text>¿No tienes una cuenta?</Text>
                <TouchableOpacity 
                    onPress={() => {props.navigation.navigate('Registro')
                    }}>
                    <Text style={{color:'#0024D5'}}>
                        Registrate Aqui
                    </Text>
                </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity style={{marginTop:40}}
                    onPress={this.handleEmail}>
                    <Text style={{color:'35DB28'}}>
                        Contactanos
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({

    container:{
    top:40,
    alignItems: 'center',
    justifyContent: 'center',
    },
    view:{
        borderColor: '#000000', 
        borderWidth:1, 
        borderRadius:10, 
        textAlign:'center',
        width:250,
    },
    view2:{
        marginTop:20,
    }
});

export default Login;