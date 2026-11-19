import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function BotaoAgua({ estilos, emoji, ml, onPress }) {
  return (
    <TouchableOpacity style={estilos.botaoAgua} onPress={onPress}>
      <Text style={estilos.botaoEmoji}>{emoji}</Text>
      <Text style={estilos.botaoMl}>+{ml}</Text>
    </TouchableOpacity>
  );
}