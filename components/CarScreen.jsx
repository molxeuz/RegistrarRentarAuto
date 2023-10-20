import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../AppContext';
import { styles } from '../assets/styles/CarScreenStyles'

export default function CarScreen() {

  const { AutomovilesContext, setAutomovilesContext } = useAppContext();
  const navigation = useNavigation();
  const [PlacaAutomovil, setPlacaAutomovil] = useState('');
  const [MarcaAutomovil, setMarcaAutomovil] = useState('');
  const [Mensaje, setMensaje] = useState('');
  const [ColorMensaje, setColorMensaje] = useState('');
  const [Disponibilidad, setDisponibilidad] = useState(false);

  const RegistrarAutomovil = () => {
    const placaPattern = /^[A-Z]{3}\d{3}$/;
    if (PlacaAutomovil === '' || MarcaAutomovil === '') {
      setMensaje('Debes ingresar todos los campos');
      setColorMensaje('red');
    } else if (!placaPattern.test(PlacaAutomovil) || PlacaAutomovil.length !== 6) {
      setMensaje('Placa debe tener 3 letras mayúsculas y 3 números');
      setColorMensaje('red');
    } else if (AutomovilesContext.some((Automovil) => Automovil.PlacaAutomovil === PlacaAutomovil)) {
      setMensaje('La placa del automóvil ya existe');
      setColorMensaje('red');
    } else {
      const ConstAutomovil = { PlacaAutomovil, MarcaAutomovil, EstadoAutomovil: Disponibilidad,  };
      setAutomovilesContext([...AutomovilesContext, ConstAutomovil]);
      LimpiarCampos();
      setMensaje('Automóvil registrado con éxito');
      setColorMensaje('green');
    }
  };

  const LimpiarCampos = () => {
    setPlacaAutomovil('');
    setMarcaAutomovil('');
    setColorMensaje('');
    setMensaje('');
    setDisponibilidad(false);
  };

  const HomeScreen = () => {
    LimpiarCampos();
    navigation.navigate('HomeScreen');
  };

  const ListCarScreen = () => {
    LimpiarCampos();
    navigation.navigate('ListCarScreen');
  };

  return (
    <View style={styles.container_outside}>
      <View style={styles.container_inside}>

        <View style={styles.container_title}>
          <Text style={styles.title}>REGISTRO DE AUTO</Text>
        </View>
        <View style={styles.container_sub_title}>
          <Text style={styles.sub_title}>Que auto vas a ingresar?</Text>
        </View>

        <View style={styles.container_input}>
          <TextInput style={styles.input} placeholder="Placa del auto" onChangeText={(text) => setPlacaAutomovil(text)} value={PlacaAutomovil} />
        </View>
        <View style={styles.container_input}>
          <TextInput style={styles.input} placeholder="Marca del auto" onChangeText={(text) => setMarcaAutomovil(text)} value={MarcaAutomovil} />
        </View>
        <View style={styles.switch_container_input}>
          <Text style={styles.switch}>Disponibilidad del auto: </Text>
          <View style={styles.switch_input}>
            <Switch value={Disponibilidad} onValueChange={(value) => setDisponibilidad(value)} trackColor={{ true: '#00939d', false: '#d91919', }} thumbColor="#bc131f" />
          </View>
        </View>

        <View style={styles.container_mensaje}>
          <Text style={{ ...styles.mensaje, color: ColorMensaje }}>{Mensaje}</Text>
        </View>

        <View style={styles.container_button}>
          <TouchableOpacity style={styles.button} onPress={RegistrarAutomovil}>
            <Text style={styles.buttonText}>REGISTRAR AUTO</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_button}>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#BC131F' }]} onPress={HomeScreen}>
            <Text style={styles.buttonText}>VOLVER</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#A78AB7' }]} onPress={ListCarScreen}>
            <Text style={styles.buttonText}>VER LISTA AUTO</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
}