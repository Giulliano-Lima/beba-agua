import React from 'react';
import {
  Modal,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { criarEstilosConfig } from '../styles/estilosConfig';

// Opções de tema que a pessoa pode escolher
const TEMAS = [
  { chave: 'auto', rotulo: 'Automático' },
  { chave: 'claro', rotulo: 'Claro' },
  { chave: 'escuro', rotulo: 'Escuro' },
];

// Para adicionar uma configuração nova: copie uma <Linha> abaixo.
// Itens com `emBreve` aparecem desativados, só para mostrar o que vem por aí.
function Linha({ cfg, titulo, sub, emBreve, onPress }) {
  return (
    <TouchableOpacity
      style={[cfg.linha, emBreve && cfg.linhaDesativada]}
      onPress={onPress}
      disabled={emBreve}
      accessibilityRole="button"
      accessibilityLabel={emBreve ? `${titulo}, em breve` : titulo}
      accessibilityState={{ disabled: !!emBreve }}
    >
      <View style={cfg.linhaTextos}>
        <Text style={cfg.linhaTitulo}>{titulo}</Text>
        {sub ? <Text style={cfg.linhaSub}>{sub}</Text> : null}
      </View>
      {emBreve ? <Text style={cfg.selo}>Em breve</Text> : <Text style={cfg.seta}>›</Text>}
    </TouchableOpacity>
  );
}

export default function ModalConfiguracoes({
  estilos,
  cores,
  visible,
  onClose,
  meta,
  abrirMeta,
  preferenciaTema,
  setPreferenciaTema,
}) {
  const cfg = criarEstilosConfig(cores);

  // Fecha esta janela e abre a de meta (com uma pausa curta para não encavalar)
  const editarMeta = () => {
    onClose();
    setTimeout(abrirMeta, 300);
  };

  const mostrarSobre = () =>
    Alert.alert(
      'Beba Água',
      'Versão 1.0.0\n\nA meta de água é uma referência geral e não substitui a orientação de um profissional de saúde.'
    );

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={estilos.fundoEscuro}>
        <View style={[estilos.janela, { maxHeight: '88%' }]}>
          <Text style={estilos.janelaTitulo}>Configurações</Text>

          <ScrollView contentContainerStyle={{ gap: 10 }}>
            <Text style={cfg.secao}>GERAL</Text>
            <Linha
              cfg={cfg}
              titulo="Meta diária"
              sub={`${meta} ml`}
              onPress={editarMeta}
            />

            <Text style={cfg.secao}>APARÊNCIA</Text>
            <View style={cfg.linhaTemas}>
              {TEMAS.map((t) => {
                const ativo = preferenciaTema === t.chave;
                return (
                  <TouchableOpacity
                    key={t.chave}
                    style={[cfg.chip, ativo && cfg.chipAtivo]}
                    onPress={() => setPreferenciaTema(t.chave)}
                    accessibilityRole="button"
                    accessibilityLabel={`Tema ${t.rotulo}`}
                    accessibilityState={{ selected: ativo }}
                  >
                    <Text style={[cfg.chipTexto, ativo && cfg.chipTextoAtivo]}>
                      {t.rotulo}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <Text style={cfg.secao}>EM DESENVOLVIMENTO</Text>
            <Linha
              cfg={cfg}
              titulo="Lembretes de água"
              sub="Notificações ao longo do dia"
              emBreve
            />
            <Linha
              cfg={cfg}
              titulo="Histórico"
              sub="Veja os dias anteriores"
              emBreve
            />
            <Linha
              cfg={cfg}
              titulo="Quantidades rápidas"
              sub="Personalize os botões +200, +300, +500"
              emBreve
            />

            <Text style={cfg.secao}>SOBRE</Text>
            <Linha cfg={cfg} titulo="Sobre o app" onPress={mostrarSobre} />
          </ScrollView>

          <TouchableOpacity
            style={[
              estilos.botaoModal,
              {
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: 'auto',
                minHeight: 48,
                justifyContent: 'center',
                backgroundColor: cores.azul,
              },
            ]}
            onPress={onClose}
            accessibilityRole="button"
            accessibilityLabel="Fechar configurações"
          >
            <Text style={estilos.botaoModalTexto}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}