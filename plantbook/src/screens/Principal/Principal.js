import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    Image,
    Button,
    StyleSheet,
    TextInput,
    Modal,
    Alert,
    Pressable,
} from 'react-native';
import firebase from '../../database/firebase';
import Options from '../Options/Options';

const Principal = (props) =>{
    const [plantas, setPlantas] = useState([]);
    const url = 'http://dtai.uteq.edu.mx/~critre192/Apis/Plantas';
    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState("");
    const [imagen_url, setImagen_url] = useState("");
    const [nombre, setNombre] = useState("");
    const [nombre_cientifico, setNombre_cientifico] = useState("");
    const [clima, setClima] = useState("");
    const [descripcion, setDescripcion] = useState("");

    function verModal(){
        if(modalVisible){
            return(
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                    <ScrollView>
                                        <Image source={{uri: imagen_url}} style={styles.imageStyl2}/>
                                        <Text>Nombre: {nombre}</Text>
                                        <Text>Nombre Cientifico: {nombre_cientifico}</Text>
                                        <Text>Descripcion: {descripcion}</Text>
                                        <Text>Clima: {clima}</Text>
                                        </ScrollView>
                                            <Pressable
                                                style={[styles.button, styles.buttonClose]}
                                                onPress={() => {
                                                    setModalVisible(!modalVisible)
                                                }}>
                                                    <Text>Cerrar</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                            </Modal>
            );
        }
    }
    
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
						onPress={() => {[setModalVisible(true),
                            setId(val.id),
                            setImagen_url(val.imagen_url),
                            setNombre(val.nombre),
                            setNombre_cientifico(val.nombre_cientifico),
                            setClima(val.clima),
                            setDescripcion(val.descripcion)]}}
		            > Ver + </Text>
                            </View>
                            )
                        }
                    </View>
                    {verModal(modalVisible)}
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
  },
  imageStyl2: {
    flexGrow:1,
    width:"60%",
    height:100,
    alignItems: 'center',
    justifyContent:'center',
    marginTop:10,
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
    userStyle2:{
        fontSize:18,
        color:'black',
        fontWeight:'bold',
        textAlign: 'center',
        alignItems:'center',
        justifyContent:'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 30,
        padding: 40,
        alignItems: 'baseline',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        paddingHorizontal: 100,
        elevation: 2,
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
});

export default Principal;