import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const ScoreListScreen = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/scores') // Change this IP for mobile later
      .then(response => {
        setScores(response.data);
      })
      .catch(error => {
        console.error('Error fetching scores:', error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.scoreItem}>
      <Text style={styles.text}>Score: {item.score}</Text>
      <Text style={styles.text}>Date: {item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Golf Scores</Text>
      <FlatList
        data={scores}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 40 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  scoreItem: { marginBottom: 10, backgroundColor: '#eee', padding: 10, borderRadius: 8 },
  text: { fontSize: 16 },
});

export default ScoreListScreen;
