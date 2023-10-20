import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../assets/styles/HomeScreenStyles'
import { useAppContext } from "../AppContext"; 

export default function HomeScreen() {
  
  const navigation = useNavigation();
  const { usuarioLogueado } = useAppContext();

  const CarScreen = () => {
    navigation.navigate('CarScreen');
  };

  const ListCarScreen = () => {
    navigation.navigate('ListCarScreen');
  };

  const RentScreen = () => {
    navigation.navigate('RentScreen');
  };

  const ListRentScreen = () => {
    navigation.navigate('ListRentScreen');
  };

  const LoginScreen = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container_outside}>
      <View style={styles.container_inside}>

        <View style={styles.container_title}>
          <Text style={styles.title}>BIENVENIDOS A INICIO</Text>
        </View>
        <View style={styles.container_saludo}>
          <Text style={styles.sub_title}>¡Hola {usuarioLogueado}, mira nuestros servicios!</Text>
        </View>

        <View style={styles.container_button}>
          <TouchableOpacity style={styles.button} onPress={CarScreen}>
            <Text style={styles.buttonText}>REGISTRAR AUTOS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#A78AB7' }]} onPress={ListCarScreen}>
            <Text style={styles.buttonText}>VER LISTA AUTOS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_button}>
          <TouchableOpacity style={styles.button} onPress={RentScreen}>
            <Text style={styles.buttonText}>REGISTRAR RENTA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#A78AB7' }]} onPress={ListRentScreen}>
            <Text style={styles.buttonText}>VER LISTA RENTA</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_button}>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#BC131F' }]} onPress={LoginScreen}>
            <Text style={styles.buttonText}>CERRAR SESIÓN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}