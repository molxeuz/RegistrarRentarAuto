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
    fontSize: 30,
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
  container_button: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#78b2e7',
    borderWidth: 3,
    marginRight: 10,
    marginLeft: 10,
    width: 160,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15, 
  },
});
  
export { styles }