import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    Image,
    Button,
    StyleSheet
} from 'react-native';
import Options from '../Options/Options';
const Principal = (props) =>{
    return(
        <ScrollView>
            <Text style={{
	                    color:"#ff0000", 
	                    marginTop:10, 
						marginBottom: 10,
						borderColor: '#C20000',
						borderWidth:2,
						marginHorizontal: 80,
	                    textAlign: 'center',
                        fontSize: 15}}
						onPress={() => {props.navigation.navigate(Options);
                            }}
		            > Opciones </Text>
                    <View style={styles.container}>
                        <Image source={require('../../../assets/plantasfondo.jpg')} style={styles.imageStyl}  />
                        <Text style={styles.userStyle}>Aqui encontraras informacion sobre todas las plantas</Text>
                    </View>
                    
        </ScrollView>
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
    alignItems: 'center',
    justifyContent:'center',
  },
    userStyle:{
        position:'absolute',
        fontSize:18,
        color:'white',
        fontWeight:'bold',
        textAlign: 'center',
        alignItems:'center',
        justifyContent:'center',
    },
});

export default Principal;