import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

const Detalle = (props) =>{
    return(
        <ScrollView>

                <Image
                style={{ width: 500, height: 200, marginBottom: 15, alignSelf:'center'}}
                source={require("../../../assets/plantasfondo.jpg")}
                 />


                <Image
                style={{ width: 150, height: 150, marginBottom: 15, alignSelf:'center', marginTop:30 }}
                source={require("../../../assets/flor2.jpeg")}
                 />

                <Text style={{marginTop: 10, textAlign: 'center', marginHorizontal: 10, marginBottom: 10}}>
					Hortalizas
				</Text>

                <Text style={{marginTop: 10, textAlign: 'center', marginHorizontal: 10, marginBottom: 10, fontStyle:"#123456"}}>
					Detalle planta
				</Text>

                <Text style={{marginTop: 10, textAlign: 'center', marginHorizontal: 10, marginBottom: 10, fontStyle:"#123456"}}>
					Cuidados
				</Text>

                <Text style={{
	                    color:"#35DB28", 
	                    marginTop:10, 
						marginBottom: 10,
						borderColor: '#35DB28',
						borderWidth:2,
						marginHorizontal: 80,
	                    textAlign: 'center',
                        fontSize: 20}}
						//</View>onPress={() => {props.navigation.navigate('Config');
                            //}}
		            > Añadir a lista </Text>
                
			</ScrollView>
    )
}

export default Detalle;