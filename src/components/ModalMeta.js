import React from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function ModalMeta({
  estilos,
  cores,
  visible,
  onClose,
  textoMeta,
  setTextoMeta,
  salvarMeta,
  erro,
}) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={estilos.fundoEscuro}>
        <View style={estilos.janela}>
          <Text style={estilos.janelaTitulo}>Editar meta diária</Text>

          <TextInput
            style={estilos.input}
            value={textoMeta}
            onChangeText={setTextoMeta}
            keyboardType="numeric"
            placeholder="Ex.: 2000"
            placeholderTextColor={cores.placeholder}
          />
          <Text style={estilos.dica}>Valor em ml (1000 ml = 1 litro)</Text>
          {erro ? <Text style={estilos.erro}>{erro}</Text> : null}

          <View style={estilos.linhaModal}>
            <TouchableOpacity
              style={[
                estilos.botaoModal,
                {
                  backgroundColor: cores.botaoSuave,
                  borderWidth: 1,
                  borderColor: cores.bordaForte,
                },
              ]}
              onPress={onClose}
            >
              {/* Texto do "Cancelar" segue o tema: branco no escuro, escuro no claro */}
              <Text style={[estilos.botaoModalTexto, { color: cores.texto }]}>
                Cancelar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[estilos.botaoModal, { backgroundColor: cores.azul }]}
              onPress={salvarMeta}
            >
              <Text style={estilos.botaoModalTexto}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}