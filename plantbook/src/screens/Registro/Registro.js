import React, { Component } from 'react';
import {
    View,
    Text,
    Alert,
    ScrollView,
    Image,
    TextInput,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import firebase from '../../database/firebase';

export default class Registro extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            surname: '',
            surname2: '',
            email: '',
            password: '',
            confirmPass: '',
            aiVisible: false,
            btnVisible: true,
        }
    }

    validaRegistro(state) {
        Alert.alert('Hola ${name}');
    }

    render() {
        const validaRegistro = async () => {
            let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

            this.setState({
				aiVisible: true,
				btnVisible: false,
			});
            
            if((this.state.name.length < 1) ||
            (this.state.surname.length < 1) ||
            (this.state.surname2.length < 1) ||
            (this.state.email.length < 1) ||
            (this.state.password.length < 1) ||
            (this.state.confirmPass.length < 1)) {
                Alert.alert('ERROR', 'Rellene todos los campos',
                [
                    {
                        text: 'Corregir',
                        onPress: () => {
                            this.setState({
                                aiVisible: false,
                                btnVisible: true,
                            });
                            return;
                        }
                    }
                ])
            }

            if (!emailRegex.test(this.state.email)) {
                Alert.alert('ERROR','Correo Invalido', [
                    {
                        text: 'Corregir',
                        onPress: () => {
                            this.setState({
                                email: '',
                                aiVisible: false,
                                btnVisible: true,
                            });
                            return;
                        }
                    },
                ]);
            }

            if (!(this.state.password === this.state.confirmPass)){
                Alert.alert('ERROR','Contraseñas diferentes', [
                    {
                        text: 'Corregir',
                        onPress: () => {
                            this.setState({
                                password: '',
                                confirmPass: '',
                                aiVisible: false,
                                btnVisible: true,
                            });
                            return;
                        }
                    },
                ]);
            }

            try {
                const usuarioFirebase = await firebase.auth.createUserWithEmailAndPassword(
                    this.state.email,
                    this.state.password,
                );
                if (usuarioFirebase) {
                    const addusu = await firebase.db.collection('USUARIOS').add({
                        id : usuarioFirebase.user.uid,
                        name : this.state.name,
                        surname : this.state.surname,
                        surname2 : this.state.surname2,
                        email : this.state.email,
                        user_type : "usuario",
                    });
                    Alert.alert(
                        'Registro Exitoso',
                        `Gracias por Registrarte ${this.state.name}\n Tu ID:\n${addusu.id}`,
                        [
                            {
                                text: 'Continuar',
                                onPress: () => {
                                    this.setState({
                                        aiVisible: false,
                                        btnVisible: true,
                                        name: '',
                                        surname: '',
                                        surname2: '',
                                        email: '',
                                        password: '',
                                        confirmPass: '',
                                    });
                                },
                            },
                        ],
                    );
                }
            }catch (e) {
                Alert.alert('ERROR', e.toString(), [
                    {
                        text: 'Aceptar',
                        onPress: () => {
                            this.setState({
                                aiVisible: false,
                                btnVisible: true,
                            });
                        },
                    },
                ],
                { cancelable: false });
            }
        }

    return(
        <View>
            <View style={styles.container}>
                        <Image source={require('../../../assets/plantasfondo.jpg')} style={styles.imageStyl}  />
                        <Text style={styles.userStyle} onPress={() => {props.navigation.navigate(Favoritos);}} >
                            Registrate aqui </Text>
                    </View>
            <View style={{marginTop:40, alignSelf:'center', fontSize:30}}>
                <Text>Llena este formulario para registrarte</Text>
            </View>
            <View>
                <TextInput
                    style={{marginTop:30, alignSelf:'center', borderColor: '#000000', borderWidth:1, borderRadius:10, width:300, textAlign:'center'}}
                    placeholder='Nombre'
                    keyboardType='default'
                    onChangeText={(val) => {
                        this.setState({
                            name: val,
                        });
                    }}
                    value={this.state.name}
                    />
            </View>
            <View>
                <TextInput
                    style={{marginTop:15, alignSelf:'center', borderColor: '#000000', borderWidth:1, borderRadius:10, width:300, textAlign:'center'}}
                    placeholder='Apellido Paterno'
                    keyboardType='default'
                    onChangeText={(val) => {
                        this.setState({
                            surname: val,
                        });
                    }}
                    value={this.state.surname}
                    />
            </View>
            <View>
                <TextInput
                    style={{marginTop:15, alignSelf:'center', borderColor: '#000000', borderWidth:1, borderRadius:10, width:300, textAlign:'center'}}
                    placeholder='Apellido Materno'
                    keyboardType='default'
                    onChangeText={(val) => {
                        this.setState({
                            surname2: val,
                        });
                    }}
                    value={this.state.surname2}
                    />
            </View>
            <View>
                <TextInput
                 style={{marginTop:15, alignSelf:'center', borderColor: '#000000', borderWidth:1, borderRadius:10, width:300, textAlign:'center'}}
                 placeholder='Email'
                 keyboardType='email-address'
                 autoCapitalize='none'
                 onChangeText={(val) => {
                    this.setState({
                        email: val,
                    });
                }}
                 value={this.state.email}
                 />
            </View>
            <View>
                <TextInput
                    style={{marginTop:15, alignSelf:'center', borderColor: '#000000', borderWidth:1, borderRadius:10, width:300, textAlign:'center'}}
                    placeholder='Contraseña (8 digitos)'
                    keyboardType='default'
                    secureTextEntry
                    onChangeText={(val) => {
                        this.setState({
                            password: val,
                        });
                    }}
                    value={this.state.password}
                    maxLength={10}
                />
            </View>
            <View>
                <TextInput
                    style={{marginTop:15, alignSelf:'center', borderColor: '#000000', borderWidth:1, borderRadius:10, width:300, textAlign:'center'}}
                    placeholder='Confirma tu contraseña'
                    keyboardType='default'
                    secureTextEntry
                    onChangeText={(val) => {
                        this.setState({
                            confirmPass: val,
                        });
                    }}
                    value={this.state.confirmPass}
                    maxLength={10}
                />
            </View>
            <ActivityIndicator
                size='large'
                color='#000'
                style={{
                    marginVertical: 15,
                    display: this.state.aiVisible
                        ? 'flex'
                        : 'none',
                }}
            />
            <View
                style={{
                    display: this.state.btnVisible
                        ? 'flex'
                        : 'none'
                }}
            >
                <Text
                    style={{marginTop:30, alignSelf:'center', textAlign:'center', borderRadius:20, borderColor:'green', borderWidth:1, width:90, height:20 ,backgroundColor:'#35DB28'}}
                    onPress={validaRegistro}
                >
                    Registrarme
                </Text>
            </View>
        </View>
    )
    }
}

const styles= StyleSheet.create({

    container:{
    position:'relative',
    left: 0, 
    right: 0, 
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    },
    container2:{
        alignItems: 'center',
        justifyContent: 'center',
        },
    imageStyl: {
    flexGrow:1,
    width:"100%",
    height:200,
    opacity:0.6,
    alignItems: 'center',
    justifyContent:'center',
    borderColor:'#35DB28',
  },
    userStyle:{
        position:'absolute',
        fontSize:40,
        color:'white',
        fontWeight:'bold',
        textAlign: 'center',
        alignItems:'center',
        justifyContent:'center',
    },
    userStyle2:{
        position:'absolute',
        fontSize:30,
        color:'red',
        fontWeight:'bold',
        textAlign: 'center',
        alignItems:'center',
        fontWeight:'bold',
        justifyContent:'center',
    },
});