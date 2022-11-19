import React, { Component } from 'react';
import {
    View,
    Text,
    Alert,
    ScrollView,
    Image,
    TextInput,
    ActivityIndicator,
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
        <ScrollView>
            <View>
                <Image
                    source={require('../../../assets/logo.png')}
                    />
            </View>
            <View>
                <Text>Registrate</Text>
                <Text>Llena este formulario para registrarte</Text>
            </View>
            <View>
                <TextInput
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
                 placeholder='Correo Electronico'
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
                    onPress={validaRegistro}
                >
                    Registrarme
                </Text>
            </View>
        </ScrollView>
    )
    }
}