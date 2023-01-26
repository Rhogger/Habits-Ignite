import { StatusBar } from 'expo-status-bar';
// Importando algumas APIs que o React Native irá usar na aplicação
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // A View possui a prop "style" que recebe Objetos
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// Devido a API StyleSheet, podemos estilizar os elementos React Native com uma sintaxe muito próxima ao CSS. O que muda é que não utilizamos o hífen (-) e sim o CamelCase e os valores em String.
const styles = StyleSheet.create({
  container: {
    // No react Native o FlexBox é ativo por padrão
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'red'
  }
});
