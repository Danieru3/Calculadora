import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [display, setDisplay] = useState<string>('0');

  const digitarNumero = (num: string) => {
    if (display === '0') {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const limpar = () => {
    setDisplay('0');
  };

  return (
    <View style={styles.container}>
      <View style={styles.tela}>
        <Text style={styles.textoDisplay}>{display}</Text>
      </View>

      <View style={styles.fileira}>
        <TouchableOpacity style={styles.botao} onPress={() => digitarNumero('1')}>
          <Text style={styles.textoBotao}>1</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.botao} onPress={() => digitarNumero('2')}>
          <Text style={styles.textoBotao}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={limpar}>
          <Text style={styles.textoBotao}>C</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', backgroundColor: '#fff' },
  tela: { padding: 20, backgroundColor: '#f4f4f4', alignItems: 'flex-end', marginBottom: 20 },
  textoDisplay: { fontSize: 40 },
  fileira: { flexDirection: 'row', justifyContent: 'space-around' },
  botao: { padding: 20, backgroundColor: '#ddd', borderRadius: 10 },
  textoBotao: { fontSize: 24 }
});