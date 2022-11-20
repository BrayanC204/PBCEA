import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, Alert, StyleSheet } from 'react-native';

const validaCorreo = () =>
    Alert.alert(
      "Exito",
      "Se ha enviado tu mensaje",
      [
        { text: "Aceptar", onPress: () => console.log("OK") }
      ]
    );

const Contacto = (props) =>{
    return(     
            <View>
                <View style={styles.container}>
                        <Image source={require('../../../assets/contacto.jpg')} style={styles.imageStyl}  />
                        <Text style={styles.userStyle} onPress={() => {props.navigation.navigate(Contacto);}} >
                            Contactanos</Text>
                    </View>

                <Text style={{marginTop: 50, textAlign: 'center', marginHorizontal: 10, marginBottom: 10,}}>
					Mandanos tus comentarios, quejas o sujerencias
				</Text>

						<TextInput
							placeholder='Nombre Completo'
							keyboardType='default'
							style={{textAlign:'center', borderColor: '#35DB28', borderWidth:2, marginTop:20, marginHorizontal: 30, borderRadius:20}}
						/>

                        <TextInput
							placeholder='Correo electronico'
							keyboardType='default'
							style={{textAlign:'center', borderColor: '#35DB28', borderWidth:2, marginTop:30, marginHorizontal: 30, borderRadius:20}}
						/>

                        <TextInput
							placeholder='Descripcion'
							keyboardType='default'
							style={{textAlign:'center', height:100, borderColor: '#35DB28', borderWidth:2, marginTop:40, marginHorizontal: 30, borderRadius:20}}
						/>

                     <Text style={{
						backgroundColor:'#35DB28',
	                    marginTop:30, 
						marginBottom: 10,
						borderColor: '#35DB28',
						borderWidth:2,
                        borderRadius:4,
                        fontSize:"#35DB28",
						marginHorizontal: 80,
	                    textAlign: 'center',
                        fontSize: 20,
						borderRadius:20}}
						onPress={validaCorreo}
		            > Mandar mensaje </Text>
			</View>
    )
}

const styles= StyleSheet.create({

    container:{
    position:'relative',
    top: 5, 
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
    opacity:0.6,
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

export default Contacto;