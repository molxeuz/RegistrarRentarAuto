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
  container_Scroll: {
    borderWidth: 3,
    borderRadius: 5,
    width: 300,
    height: 300,
    marginBottom: 20,
    backgroundColor: 'white'
  },
  scrollContainer: {
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RentItem: {
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    width: 250,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    elevation: 3,
  },
  RentInfo: {
    fontSize: 17,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  noRentText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15,
  },
  container_button: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#78b2e7',
    borderWidth: 3,
    marginRight: 10,
    marginLeft: 10,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14, 
  },
});

export { styles }