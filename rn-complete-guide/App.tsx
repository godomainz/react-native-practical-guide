import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState<string>("");
  const [courseGoals, setCourseGoals] = useState<string[]>([]);
  const goalInputHandler = (enteredText:string) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  };


  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
        <Button title="Add" onPress={addGoalHandler}/>
      </View>
      <View>
        {
          courseGoals.map((goal:string, index: number) => <View style={styles.listItem} key={index}><Text>{goal}</Text></View>)
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen : {
    padding: 50
  },
  inputContainer : {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignContent: "center"
  },
  input: { 
    width: "80%", 
    borderBottomColor: 'black', 
    borderWidth: 1, 
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});