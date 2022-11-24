import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    Image,
    Button,
    StyleSheet,
    TextInput
} from 'react-native';
import firebase from '../../database/firebase';
import Options from '../Options/Options';

const Principal = (props) =>{
    const [plantas, setPlantas] = useState([]);
    const url = 'http://dtai.uteq.edu.mx/~critre192/Apis/Plantas';
    
        useEffect(() => {
            fetch(url)
            .then(response => response.json())
            .then(data => setPlantas(data))
        }, [url]);

    return(
        <ScrollView>
            <Text style={{
	                    backgroundColor:'#FF3434',
	                    marginTop:10, 
						marginBottom: 10,
						borderColor: '#FF3434',
						borderWidth:2,
                        borderRadius:20,
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
                    <View>
                        {
                            Object.values(plantas).map((val) =>
                            <Image source={{uri: val.imagen_url}} style={styles.imageStyl}/>
                            )
                        }
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
    opacity:0.8,
    height:200,
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 4,
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