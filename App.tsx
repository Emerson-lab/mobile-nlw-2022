import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  interface ButtonProps {
    title: string
  }
  
  function Button(props: ButtonProps) {
    return (
      <TouchableOpacity>
        <Text>
          {props.title}
        </Text>
      </TouchableOpacity>
    )
  }
 
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <Button title='send 1'/>
      <Button title='send 1'/>
      <Button title='send 1'/>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
