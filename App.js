import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Alert,
  TouchableOpacity,
  StatusBar,
  useColorScheme,
} from 'react-native';

import { criarEstilos } from './src/styles/estilos';
import { criarEstilosConfig } from './src/styles/estilosConfig';
import { coresClaro, coresEscuro } from './src/constants/cores';
import CartaoAgua from './src/components/CartaoAgua';
import ModalMeta from './src/components/ModalMeta';
import ModalConfiguracoes from './src/components/ModalConfiguracoes';

export default function App() {
  // ----- TEMA -----
  // preferenciaTema: 'auto' (segue o celular), 'claro' ou 'escuro'
  const modoSistema = useColorScheme();
  const [preferenciaTema, setPreferenciaTema] = useState('auto');
  const modo =
    preferenciaTema === 'auto'
      ? modoSistema
      : preferenciaTema === 'claro'
      ? 'light'
      : 'dark';
  const cores = modo === 'light' ? coresClaro : coresEscuro;
  const estilos = criarEstilos(cores);
  const estilosConfig = criarEstilosConfig(cores);

  // ----- META -----
  const [meta, setMeta] = useState(2000);
  const [textoMeta, setTextoMeta] = useState('');
  const [erro, setErro] = useState('');
  const [modalVisivel, setModalVisivel] = useState(false);

  // ----- CONFIGURAÇÕES -----
  const [configVisivel, setConfigVisivel] = useState(false);

  // ----- ÁGUA -----
  const [registros, setRegistros] = useState([]);
  const bebido = registros.reduce((soma, valor) => soma + valor, 0);

  const abrirModal = () => {
    setTextoMeta(String(meta));
    setErro('');
    setModalVisivel(true);
  };

  const salvarMeta = () => {
    const valor = Number(textoMeta.replace(',', '.'));
    if (!valor || valor <= 0) {
      setErro('Digite um número válido, em ml. Ex.: 2000');
      return;
    }
    setMeta(valor);
    setModalVisivel(false);
  };

  const adicionarAgua = (quantidade) => {
    setRegistros([...registros, quantidade]);
    if (bebido < meta && bebido + quantidade >= meta) {
      Alert.alert('Parabéns! 🎉', 'Você bateu sua meta de hoje!');
    }
  };

  const desfazer = () => setRegistros(registros.slice(0, -1));
  const zerarDia = () => setRegistros([]);

  // ----- VALORES CALCULADOS -----
  const porcentagem = Math.min((bebido / meta) * 100, 100);
  const faltam = Math.max(meta - bebido, 0);

  return (
    <ImageBackground
      source={cores.fundo}
      style={[estilos.background, { backgroundColor: cores.corFundo }]}
      resizeMode="cover"
    >
      {/* ---------- JANELINHA DA META ---------- */}
      <ModalMeta
        estilos={estilos}
        cores={cores}
        visible={modalVisivel}
        onClose={() => setModalVisivel(false)}
        textoMeta={textoMeta}
        setTextoMeta={setTextoMeta}
        salvarMeta={salvarMeta}
        erro={erro}
      />

      {/* ---------- CONFIGURAÇÕES ---------- */}
      <ModalConfiguracoes
        estilos={estilos}
        cores={cores}
        visible={configVisivel}
        onClose={() => setConfigVisivel(false)}
        meta={meta}
        abrirMeta={abrirModal}
        preferenciaTema={preferenciaTema}
        setPreferenciaTema={setPreferenciaTema}
      />

      {/* ---------- TELA PRINCIPAL ---------- */}
      <View style={estilos.container}>
        <Text style={estilos.title}>Beba Água</Text>

        <CartaoAgua
          estilos={estilos}
          cores={cores}
          meta={meta}
          abrirModal={abrirModal}
          bebido={bebido}
          porcentagem={porcentagem}
          faltam={faltam}
          adicionarAgua={adicionarAgua}
          desfazer={desfazer}
          zerarDia={zerarDia}
          registrosLength={registros.length}
        />
      </View>

      {/* Engrenagem no canto superior esquerdo (porque do Expo Go fica à direita) */}
      <TouchableOpacity
        style={[
          estilosConfig.botaoEngrenagem,
          { top: (StatusBar.currentHeight || 44) + 12, left: 20 },
        ]}
        onPress={() => setConfigVisivel(true)}
        accessibilityRole="button"
        accessibilityLabel="Abrir configurações"
      >
        <Text style={estilosConfig.engrenagemTexto}>⚙️</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}