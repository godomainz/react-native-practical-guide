import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, FlatList } from 'react-native';
import { v4 } from 'uuid';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState<string>("");
  const [courseGoals, setCourseGoals] = useState<{key: string, value: string}[]>([]);
  const goalInputHandler = (enteredText:string) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, {key: v4(), value: enteredGoal}]);
  };


  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
        <Button title="Add" onPress={addGoalHandler}/>
      </View>
      <FlatList data={courseGoals} renderItem={itemData => <View style={styles.listItem}><Text>{itemData.item}</Text></View>}/>
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