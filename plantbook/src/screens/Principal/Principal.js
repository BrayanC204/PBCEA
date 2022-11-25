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
<<<<<<< HEAD
import Detalle from '../Detalle_planta/Detalle_planta';
=======
>>>>>>> 4d3b29489105d8b3de16d1f7e1153aec900fa820

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
<<<<<<< HEAD
                            <View style={styles.container2}>
                            <Image source={{uri: val.imagen_url}} style={styles.imageStyl2}/>
                            <Text style={styles.userStyle2}>{val.nombre}</Text>
                            <Text>{val.nombre_cientifico}</Text>
                            <Text style={{
	                    backgroundColor:'#19E301',
	                    marginTop:10, 
						marginBottom: 10,
						borderColor: '#13AD01',
						borderWidth:1,
                        borderRadius:20,
						marginHorizontal: 80,
	                    textAlign: 'center',
                        fontSize: 15}}
						onPress={() => {props.navigation.navigate(Detalle);
                            }}
		            > Ver + </Text>
                            </View>
=======
                            <Image source={{uri: val.imagen_url}} style={styles.imageStyl}/>
>>>>>>> 4d3b29489105d8b3de16d1f7e1153aec900fa820
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
    container2:{
        marginTop: 25, 
        marginHorizontal: 60,
        backgroundColor:'#CBCBCB',
        borderWidth:1,
        borderRadius:20,
        marginbottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,
        },
    imageStyl: {
    flexGrow:1,
    width:"100%",
    opacity:0.8,
    height:200,
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 4,
<<<<<<< HEAD
  },
  imageStyl2: {
    flexGrow:1,
    width:"60%",
    height:100,
    alignItems: 'center',
    justifyContent:'center',
    marginTop:10,
    marginBottom: 4,
=======
>>>>>>> 4d3b29489105d8b3de16d1f7e1153aec900fa820
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
    userStyle2:{
        fontSize:18,
        color:'black',
        fontWeight:'bold',
        textAlign: 'center',
        alignItems:'center',
        justifyContent:'center',
    },
});

export default Principal;