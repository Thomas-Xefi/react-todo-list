import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import InputButton from './components/input-button';
import List from './components/list';

let sampleGoals = [
  "Faire les courses",
  "Aller à la salle de sport 3 fois par semaine",
  "Monter à plus de 5000m d altitude",
  "Acheter mon premier appartement",
  "Perdre 5 kgs",
  "Gagner en productivité",
  "Apprendre un nouveau langage",
  "Faire une mission en freelance",
  "Organiser un meetup autour de la tech",
  "Faire un triathlon",
];

export default function App() {

  const [goals, setGoals] = useState(sampleGoals)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Todo List</Text>
      <InputButton data={goals} setData={setGoals} />
      <List data={goals} setData={setGoals} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 16
  }
});
