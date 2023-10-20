import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../AppContext';
import { styles } from '../assets/styles/ListCarScreenStyles'

export default function ListCarScreen() {

  const navigation = useNavigation();
  const { AutomovilesContext } = useAppContext();

  const HomeScreen = () => {
    navigation.navigate('HomeScreen');
  };

  const CarScreen = () => {
    navigation.navigate('CarScreen');
  };

  return (
    <View style={styles.container_outside}>
      <View style={styles.container_inside}>

        <View style={styles.container_title}>
          <Text style={styles.title}>LISTA DE AUTO</Text>
        </View>
        <View style={styles.container_sub_title}>
          <Text style={styles.sub_title}>Autos registrados</Text>
        </View>

        <View style={styles.container_Scroll}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {AutomovilesContext.length > 0 ? (
              AutomovilesContext.map((Automovil, index) => (
                <View style={styles.CarItem} key={index}>
                  <Text style={styles.CarInfo}>Placa: {Automovil.PlacaAutomovil}</Text>
                  <Text style={styles.CarInfo}>Marca: {Automovil.MarcaAutomovil}</Text>
                  <Text style={[ styles.CarInfo, { color: Automovil.EstadoAutomovil ? 'green' : 'red', }, ]}> Estado: {Automovil.EstadoAutomovil ? 'Disponible' : 'No Disponible'} </Text>
                </View>
              ))
            ) : (
              <Text style={styles.noCarsText}>No hay automóviles registrados</Text>
            )}
          </ScrollView>
        </View>

        <View style={styles.container_button}>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#BC131F' }]} onPress={HomeScreen}>
            <Text style={styles.buttonText}>INICIO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#A78AB7' }]}  onPress={CarScreen}>
            <Text style={styles.buttonText}>REGISTRAR AUTO</Text>
          </TouchableOpacity>
        </View>

      </View> 

    </View>
  );
}