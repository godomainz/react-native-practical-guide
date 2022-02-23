import { View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View>
        <TextInput placeholder="Course Goal" style={{borderBottomColor: 'black', borderWidth: 1, padding: 10}}/>
        <Button title="Add" onPress={()=>console.log("Add Pressed")}/>
      </View>
      <View>
      </View>
    </View>
  );
}
