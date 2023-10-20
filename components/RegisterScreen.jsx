import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from "../AppContext";
import { styles } from '../assets/styles/RegisterScreenStyles';

export default function RegisterScreen() {

  const { UsuariosContext, setUsuariosContext } = useAppContext();
  const { setUsuarioLogueado } = useAppContext();
  const navigation = useNavigation();
  const [Nombre, setNombre] = useState('');
  const [Usuario, setUsuario] = useState('');
  const [Contrasena, setContrasena] = useState('');
  const [Mensaje, setMensaje] = useState('');
  const [ColorMensaje, setColorMensaje] = useState(false);

  const handleRegistro = () => {
    const minLength = 6;
    if (Usuario.length < minLength || Nombre.length < minLength) {
      setMensaje('El nombre de usuario y el nombre deben tener al menos ' + minLength + ' caracteres.');
      setColorMensaje(false);
    }
    else if (UsuariosContext.some((user) => user.Usuario === Usuario)) {
      setMensaje('El nombre de usuario ya existe. Elige otro nombre de usuario.');
      setColorMensaje(false);
    }
    else if (Usuario === Nombre) {
      setMensaje('El nombre de usuario y el nombre no pueden ser iguales.');
      setColorMensaje(false);
    }
    else if (!/^[a-zA-Z\s]+$/.test(Nombre)) {
      setMensaje('El nombre debe contener solo letras y espacios.');
      setColorMensaje(false);
    }
    else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/.test(Contrasena)) {
      setMensaje('La contraseña debe contener al menos una letra y un número.');
      setColorMensaje(false);
    } else {
      const ConstUsuario = { Nombre, Usuario, Contrasena };
      setUsuariosContext([...UsuariosContext, ConstUsuario]);
      setUsuarioLogueado(Nombre); // Configura el usuario logueado
      setMensaje('Usuario registrado exitosamente');
      setColorMensaje(true);
      LimpiarCampos();
    }
  };

  const LimpiarCampos = () => {
    setNombre('');
    setUsuario('');
    setContrasena('');
  };
  
  const LoginScreen = () => {
    LimpiarCampos();
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container_outside}>
      <View style={styles.container_inside}>

        <View style={styles.container_title}>
          <Text style={styles.title}>REGISTRO DE USUARIO</Text>
        </View>
        <View style={styles.container_sub_title}>
          <Text style={styles.sub_title}>Registrate para conocernos</Text>
        </View>

        <View style={styles.container_input}>
          <TextInput style={styles.input} placeholder="Nombre" onChangeText={(text) => setNombre(text)} value={Nombre} />
        </View>
        <View style={styles.container_input}>
          <TextInput style={styles.input} placeholder="Usuario" onChangeText={(text) => setUsuario(text)} value={Usuario} />
        </View>
        <View style={styles.container_input}>
          <TextInput style={styles.input} placeholder="Contraseña" onChangeText={(text) => setContrasena(text)} value={Contrasena} secureTextEntry={true} />
        </View>

        <View style={styles.container_mensaje}>
          <Text style={[styles.mensaje, {color: ColorMensaje ? 'green' : 'red'}]}>{Mensaje}</Text> 
        </View>

        <View style={styles.container_button}>
          <TouchableOpacity style={styles.button} onPress={handleRegistro}>
            <Text style={styles.buttonText}>REGISTRARSE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#A78AB7' }]} onPress={LoginScreen}>
            <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}