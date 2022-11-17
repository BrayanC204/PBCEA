import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, Alert } from 'react-native';

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
                <Image
                style={{ width: 500, height: 200, marginBottom: 15, alignSelf:'center' }}
                source={require("../../../assets/contacto.jpg")}
                 />

                <Text style={{marginTop: 10, textAlign: 'center', marginHorizontal: 10, marginBottom: 10,}}>
					Contactanos
				</Text>

                <Text style={{marginTop: 10, textAlign: 'center', marginHorizontal: 10, marginBottom: 10,}}>
					Haznos saber tus quejas o sujerencias
				</Text>

						<TextInput
							placeholder='Nombre Completo'
							keyboardType='default'
							style={{ borderColor: '#35DB28', borderWidth:2, marginTop:20, marginHorizontal: 30}}
						/>

                        <TextInput
							placeholder='Correo electronico'
							keyboardType='default'
							style={{ borderColor: '#35DB28', borderWidth:2, marginTop:30, marginHorizontal: 30}}
						/>

                        <TextInput
							placeholder='Descripcion'
							keyboardType='default'
							style={{height:100, borderColor: '#35DB28', borderWidth:2, marginTop:40, marginHorizontal: 30}}
						/>

                     <Text style={{
	                    color:"#35DB28", 
	                    marginTop:10, 
						marginBottom: 10,
						borderColor: '#35DB28',
						borderWidth:2,
                        borderRadius:4,
                        fontSize:"#35DB28",
						marginHorizontal: 80,
	                    textAlign: 'center',
                        fontSize: 20}}
						onPress={validaCorreo}
		            > Mandar mensaje </Text>
			</View>
    )
}

export default Contacto;