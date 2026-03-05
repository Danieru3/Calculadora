import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [display, setDisplay] = useState<string>('0');

  const [valorAnterior, setValorAnterior] = useState<number | null>(null);

  const [operacao, setOperacao] = useState<string | null>(null);

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

  const escolherOperacao = (op: string) => {
    setValorAnterior(parseFloat(display)); //Salva o atual
    setOperacao(op); // Salva a operação
    setDisplay('0'); // Reseta o visor para o próximo
  };

  return (
    <View style={styles.container}>
      <View style={styles.tela}>
        <Text style={styles.textoDisplay}>{display}</Text>
      </View>

      <View style={styles.fileira}>
        <TouchableOpacity style={styles.botao} onPress={() => digitarNumero('7')}><Text style={styles.textoBotao}>7</Text></TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digitarNumero('8')}><Text style={styles.textoBotao}>8</Text></TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digitarNumero('9')}><Text style={styles.textoBotao}>9</Text></TouchableOpacity>
      </View>

      <View style={styles.fileira}>
        <TouchableOpacity style={styles.botao} onPress={() => digitarNumero('4')}><Text style={styles.textoBotao}>4</Text></TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digitarNumero('5')}><Text style={styles.textoBotao}>5</Text></TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digitarNumero('6')}><Text style={styles.textoBotao}>6</Text></TouchableOpacity>
      </View>

      <View style={styles.fileira}>
        <TouchableOpacity style={styles.botao} onPress={() => digitarNumero('1')}><Text style={styles.textoBotao}>1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digitarNumero('2')}><Text style={styles.textoBotao}>2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digitarNumero('3')}><Text style={styles.textoBotao}>3</Text></TouchableOpacity>

        <TouchableOpacity 
    style={[styles.botao, { backgroundColor: '#ff9f0a' }]}
    onPress={() => escolherOperacao('+')}
  >
    <Text style={[styles.textoBotao, { color: '#fff' }]}>+</Text>
  </TouchableOpacity>
      </View>

      <View style={styles.fileira}>
        <TouchableOpacity style={styles.botao} onPress={limpar}><Text style={styles.textoBotao}>C</Text></TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => digitarNumero('0')}><Text style={styles.textoBotao}>0</Text></TouchableOpacity>
        {/* botão de '=' */}
        <View style={{ width: 60 }} /> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    backgroundColor: '#fff',
    paddingHorizontal: 20 // Adiciona um respiro nas laterais
  },
  tela: { 
    padding: 20, 
    backgroundColor: '#f4f4f4', 
    alignItems: 'flex-end', 
    marginBottom: 20,
    borderRadius: 10 
  },
  textoDisplay: { fontSize: 40 },
  fileira: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', // Espalha os botões igualmente
    marginBottom: 15 // Dá espaço entre uma linha e outra
  },
  botao: { 
    width: 70, // Largura fixa para ficarem todos iguais
    height: 70, // Altura fixa
    backgroundColor: '#ddd', 
    borderRadius: 35, // Deixa o botão redondo
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  textoBotao: { fontSize: 24 }
});