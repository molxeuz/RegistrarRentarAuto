import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from "../AppContext"; 
import { styles } from '../assets/styles/LoginScreenStyles';

export default function LoginScreen() {
  const { UsuariosContext, setUsuarioLogueado } = useAppContext();
  const navigation = useNavigation();
  const [Usuario, setUsuario] = useState('');
  const [Contrasena, setContrasena] = useState('');
  const [Mensaje, setMensaje] = useState('');
  const [ColorMensaje, setColorMensaje] = useState(false);

  const handleInicioSesion = () => {
    const ConstUsuario = UsuariosContext.find(
      (UsuariosContext) => UsuariosContext.Usuario === Usuario && UsuariosContext.Contrasena === Contrasena
    );
    if (Usuario === "" || Contrasena === "") {
      setMensaje('Debes ingresar todos los campos para iniciar sesión');
      setColorMensaje(false);
    } else if (ConstUsuario) {
      LimpiarCampos();
      setUsuarioLogueado(ConstUsuario.Nombre); // Configura el usuario logueado
      navigation.navigate('HomeScreen');
    } else {
      setMensaje("Inicio de sesión no exitoso, verifique");
      setColorMensaje(false);
    }
  };

  const LimpiarCampos = () => {
    setUsuario('');
    setContrasena('');
    setMensaje("");
  }

  const RegisterScreen = () => {
    LimpiarCampos();
    navigation.navigate('RegisterScreen');
  }

  return (
    <View style={styles.container_outside}>
      <View style={styles.container_inside}>
        <View style={styles.container_title}>
          <Text style={styles.title}>INICIO DE SESIÓN</Text>
        </View>
        <View style={styles.container_sub_title}>
          <Text style={styles.sub_title}>Bienvenidos al aplicativo</Text>
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
          <TouchableOpacity style={[styles.button, {backgroundColor: '#78b2e7'}]} onPress={handleInicioSesion}>
            <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#A78AB7' }]} onPress={RegisterScreen}>
            <Text style={styles.buttonText}>REGISTRARSE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
