import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container_outside: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#78b2e7',
    },
    container_inside: {
      flex: 1,
      justifyContent: 'center',
      margin: 15,
      borderWidth: 5,
      borderRadius: 20,
      width: 380,
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    container_title: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      marginBottom: 10,
      fontSize: 35,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    container_sub_title: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    sub_title: {
      marginBottom: 50,
      fontSize: 25,
      textAlign: 'center',
    },
    container_input: {
      width: 220,
      height: 60,
      backgroundColor: '#78b2e7',
      borderRadius: 5,
      borderColor: 'black',
      borderWidth: 3,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: 200,
      height: 40,
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: 'white',
      borderWidth: 3,
      borderRadius: 5,
      padding: 10,
      marginVertical: 10,
      fontSize: 15,
      fontWeight: 'bold',
    },
    container_mensaje: {
      width: 300,
      height: 50,
      marginBottom: 10,
      marginTop: 10,
    },
    mensaje: {
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontWeight: 600,
    },
    container_button: {
      flexDirection: 'row'
    },
    button: {
      backgroundColor: '#78b2e7',
      borderWidth: 3,
      marginRight: 10,
      marginLeft: 10,
      width: 120,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    buttonText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 13, 
    },
  });  
  
export { styles }