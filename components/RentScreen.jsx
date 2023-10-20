import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../AppContext';
import { styles } from '../assets/styles/RentScreenStyles';

export default function RentScreen() {
  const { UsuariosContext, AutomovilesContext, setAutomovilesContext, RentasContext, setRentasContext } = useAppContext();
  const navigation = useNavigation();

  const [NumeroRenta, setNumeroRenta] = useState(Math.floor(100000 + Math.random() * 900000));
  const [PlacaAutomovil, setPlacaAutomovil] = useState('');
  const [Usuario, setUsuario] = useState('');
  const [Mensaje, setMensaje] = useState('');
  const [ColorMensaje, setColorMensaje] = useState(false);
  const [FechaRenta, setFechaRenta] = useState();

  useEffect(() => {
    const fechaActual = new Date();
    const options = { day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    const fechaFormateada = fechaActual.toLocaleDateString('es-CO', options);
    setFechaRenta(fechaFormateada);
  }, []);

  const RegistrarRenta = () => {
    
    if (RentasContext.some((ConstRenta) => ConstRenta.NumeroRenta === NumeroRenta)) {
      setMensaje('El número de renta ya existe');
      setColorMensaje(false);
      return;
    }
    
    const ConstAutomovil = AutomovilesContext.find((ConstAutomovil) => ConstAutomovil.PlacaAutomovil === PlacaAutomovil);
    const ConstUsuario = UsuariosContext.find((ConstUsuario) => ConstUsuario.Usuario === Usuario);
    
    if (PlacaAutomovil === '' || Usuario === '') {
      setMensaje('Ingresar todos los campos para continuar');
      setColorMensaje(false);
    } else if (!ConstAutomovil) {
      setMensaje('El número de placa no existe');
      setColorMensaje(false);
    } else if (!ConstUsuario) {
      setMensaje('El usuario no existe');
      setColorMensaje(false);
    } else if (RentasContext.some((ConstRenta) => ConstRenta.PlacaAutomovil === ConstAutomovil.PlacaAutomovil)) {
      setMensaje('El vehículo ya fue rentado');
      setColorMensaje(false);
    } else if (!ConstAutomovil.EstadoAutomovil) {
      setMensaje('El vehículo no está disponible para renta');
      setColorMensaje(false);
    } else {
      const AutomovilesActualizados = AutomovilesContext.map((ConstAutomovil) => {
        if (ConstAutomovil.PlacaAutomovil === PlacaAutomovil) {
          return { ...ConstAutomovil, EstadoAutomovil: false };
        }
        return ConstAutomovil;
      });
      setNumeroRenta(Math.floor(1000 + Math.random() * 9000));
      const ConstRenta = { NumeroRenta: NumeroRenta, PlacaAutomovil: ConstAutomovil.PlacaAutomovil, NombreRenta: Usuario };
      setAutomovilesContext(AutomovilesActualizados);
      setRentasContext([...RentasContext, ConstRenta]);
      LimpiarCampos();
      setMensaje('Renta guardada exitosamente');
      setColorMensaje(true);
    }
  };
  
  const LimpiarCampos = () => {
    setPlacaAutomovil('');
    setUsuario('');
    setColorMensaje('');
    setMensaje('');
  }
  
  const HomeScreen = () => {
    LimpiarCampos();
    navigation.navigate('HomeScreen');
  }
  
  const ListRentScreen = () => {
    LimpiarCampos();
    navigation.navigate('ListRentScreen');
  }
  
  return (
    <View style={styles.container_outside}>
      <View style={styles.container_inside}>
        <View style={styles.container_title}>
          <Text style={styles.title}>REGISTRO DE RENTA</Text>
        </View>
        <View style={styles.container_sub_title}>
          <Text style={styles.sub_title}>Que auto vas a rentar?</Text>
        </View>

        <View style={styles.container_input}>
          <TextInput style={styles.input} editable={false} value={NumeroRenta} />
        </View>
        <View style={styles.container_input}>
          <TextInput style={styles.input} placeholder="Placa del auto" onChangeText={(text) => setPlacaAutomovil(text)} value={PlacaAutomovil} />
        </View>
        <View style={styles.container_input}>
          <TextInput style={styles.input} placeholder="Usuario" onChangeText={(text) => setUsuario(text)} value={Usuario} />
        </View>
        <View style={styles.container_input}>
          <TextInput style={styles.input} editable={false} value={FechaRenta} />
        </View>

        <View style={styles.container_mensaje}>
          <Text style={{ ...styles.mensaje, color: ColorMensaje ? 'green' : 'red' }}>{Mensaje}</Text>
        </View>

        <View style={styles.container_button}>
          <TouchableOpacity style={styles.button} onPress={RegistrarRenta}>
            <Text style={styles.buttonText}>REGISTRAR RENTA</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_button}>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#BC131F' }]} onPress={HomeScreen}>
            <Text style={styles.buttonText}>VOLVER</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#A78AB7' }]} onPress={ListRentScreen}>
            <Text style={styles.buttonText}>VER LISTA RENTA</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}