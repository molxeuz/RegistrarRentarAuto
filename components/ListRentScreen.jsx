import React, { useState, useEffect } from 'react'; // Importa useState y useEffect
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../AppContext';
import { styles } from '../assets/styles/ListRentScreenStyles';

export default function ListRentScreen() {
  const navigation = useNavigation();
  const { RentasContext } = useAppContext();
  const [FechaActual, setFechaActual] = useState('');

  useEffect(() => {
    const fechaActual = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const fechaFormateada = fechaActual.toLocaleDateString('es-ES', options);
    setFechaActual(fechaFormateada);
  }, []);

  const HomeScreen = () => {
    navigation.navigate('HomeScreen');
  };

  const RentScreen = () => {
    navigation.navigate('RentScreen');
  };

  return (
    <View style={styles.container_outside}>
      <View style={styles.container_inside}>
        <View style={styles.container_title}>
          <Text style={styles.title}>LISTA DE RENTAS</Text>
        </View>
        <View style={styles.container_sub_title}>
          <Text style={styles.sub_title}>Rentas registradas</Text>
        </View>

        <View style={styles.container_Scroll}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {RentasContext.length > 0 ? (
              RentasContext.map((Renta, index) => (
                <View style={styles.RentItem} key={index}>
                  <Text style={styles.RentInfo}>Número de Renta: {Renta.NumeroRenta}</Text>
                  <Text style={styles.RentInfo}>Placa de auto: {Renta.PlacaAutomovil}</Text>
                  <Text style={styles.RentInfo}>Usuario: {Renta.NombreRenta}</Text>
                  <Text style={styles.RentInfo}>Fecha: {FechaActual}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.noRentText}>No hay rentas registradas</Text>
            )}
          </ScrollView>
        </View>

        <View style={styles.container_button}>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#BC131F' }]} onPress={HomeScreen}>
            <Text style={styles.buttonText}>INICIO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#A78AB7' }]} onPress={RentScreen}>
            <Text style={styles.buttonText}>REGISTRAR RENTA</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
