//Importacion de react y los componentes para la pantalla
import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
} from 'react-native';
//Importacion de las librerias y las pantallas que necesitamos
import Login from '../Login/Login';
import email from 'react-native-email'; 

//Creacion de la funcion para redirigir al proveedor de correo
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

const Options = (props) =>{
    return(
        <View>
                    <View style={styles.container}>
                        <Image source={require('../../../assets/contacto2.jpg')} style={styles.imageStyl}  />
                        <Text style={styles.userStyle} onPress={this.handleEmail} >
                            Contacto</Text>
                    </View>

                    <View style={styles.container}>
                        <Image source={require('../../../assets/sesion.jpg')} style={styles.imageStyl}  />
                        <Text style={styles.userStyle2} onPress={() => {props.navigation.navigate(Login);}} >Cerrar Sesion</Text>
                    </View>
                
        </View>
    )
}

const styles= StyleSheet.create({

    container:{
    position:'relative',
    top: 1, 
    left: 0, 
    right: 0, 
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    },
    imageStyl: {
    flexGrow:1,
    width:"100%",
    height:320,
    opacity:0.4,
    alignItems: 'center',
    justifyContent:'center',
    borderColor:'#35DB28',
  },
    userStyle:{
        position:'absolute',
        fontSize:30,
        color:'black',
        fontWeight:'bold',
        textAlign: 'center',
        alignItems:'center',
        fontWeight:'bold',
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

export default Options;