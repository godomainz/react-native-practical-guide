import { View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View style={{flexDirection: "row", justifyContent: "space-between", alignContent: "center"}}>
        <TextInput placeholder="Course Goal" style={{ width: "80%", borderBottomColor: 'black', borderWidth: 1, padding: 10}}/>
        <Button title="Add" onPress={()=>console.log("Add Pressed")}/>
      </View>
      <View>
      </View>
    </View>
  );
}
