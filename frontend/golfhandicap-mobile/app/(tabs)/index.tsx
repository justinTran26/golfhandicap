import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://192.168.1.30:8080/hello') // Replace with your backend IP and endpoint
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Golf Handicap Calculator!</Text>
      <Text style={styles.subtitle}>Let's get started.</Text>

      <View style={{ marginTop: 40 }}>
        <Text style={styles.subtitle}>Message from Spring Boot:</Text>
        <Text>{message || 'Loading...'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
});
