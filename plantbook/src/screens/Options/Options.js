import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
} from 'react-native';
import Contacto from '../Contactanos/Contactanos';
import Login from '../Login/Login';
import Favoritos from '../Favoritos/Favoritos';

const Options = (props) =>{
    return(
        <View>
            <View style={styles.container}>
                        <Image source={require('../../../assets/lista.jpg')} style={styles.imageStyl}  />
                        <Text style={styles.userStyle} onPress={() => {props.navigation.navigate(Favoritos);}} >
                            Lista de favoritos </Text>
                    </View>

                    <View style={styles.container}>
                        <Image source={require('../../../assets/contacto2.jpg')} style={styles.imageStyl}  />
                        <Text style={styles.userStyle} onPress={() => {props.navigation.navigate(Contacto);}} >
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
    top: 10, 
    left: 0, 
    right: 0, 
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    },
    imageStyl: {
    flexGrow:1,
    width:"100%",
    height:200,
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