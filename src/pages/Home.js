import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {

    const [count, setCount] = useState(0);

    function add () {
        setCount(count + 1);
    }

    function dec () {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Contador</Text>
            <Text style={styles.counter}>{count}</Text>
            <TouchableOpacity onPress={add} style={styles.button}>
                <Text style={styles.buttonText}>Incrementar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={dec} style={styles.button}>
                <Text style={styles.buttonText}>Decrementar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Screen", { count: count })}}>
                <Text style={styles.buttonText}>Navegar</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  counter: {
    marginTop: 20,
    fontSize: 18
  },
  button: {
    width: 130,
    height: 55,
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: "center",
    marginTop: 40
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,

  }
})