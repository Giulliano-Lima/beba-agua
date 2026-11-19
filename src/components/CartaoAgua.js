import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BotaoAgua from './BotaoAgua';
import { opcoes } from '../constants/opcoes';
import { obterFraseDiaria } from '../utils/frases';

export default function CartaoAgua({
  estilos,
  cores,
  meta,
  abrirModal,
  bebido,
  porcentagem,
  faltam,
  adicionarAgua,
  desfazer,
  zerarDia,
  registrosLength,
}) {
  const corBarra = porcentagem >= 100 ? cores.verde : cores.azul;
  const frase = obterFraseDiaria(bebido, porcentagem);

  return (
    <View style={estilos.cartao}>
      {/* Topo: meta + editar */}
      <View style={estilos.topo}>
        <View>
          <Text style={estilos.rotulo}>META DE HOJE</Text>
          <Text style={estilos.metaValor}>{meta} ml</Text>
        </View>
        <TouchableOpacity style={estilos.iconeEditar} onPress={abrirModal}>
          <Text style={estilos.iconeTexto}>✏️</Text>
        </TouchableOpacity>
      </View>

      {/* Número principal */}
      <Text style={estilos.numero}>
        {bebido}
        <Text style={estilos.unidade}> ml</Text>
      </Text>

      {/* Barra + informações */}
      <View style={estilos.blocoBarra}>
        <View style={estilos.barraFundo}>
          <View
            style={[
              estilos.barraPreenchida,
              { width: `${porcentagem}%`, backgroundColor: corBarra },
            ]}
          />
        </View>
        <View style={estilos.infoBarra}>
          <Text style={estilos.infoTexto}>{Math.round(porcentagem)}%</Text>
          <Text style={estilos.infoTexto}>
            {faltam > 0 ? `Faltam ${faltam} ml` : 'Meta concluída'}
          </Text>
        </View>
      </View>

      <Text style={estilos.frase}>{frase}</Text>

      {/* Botões rápidos */}
      <View style={estilos.linhaBotoes}>
        {opcoes.map((op) => (
          <BotaoAgua
          key={op.ml}
          estilos={estilos}
          emoji={op.emoji}
          ml={op.ml}
          onPress={() => adicionarAgua(op.ml)}
          />
        ))}
      </View>

      {/* Ações secundárias */}
      <View style={estilos.linhaAcoes}>
        <TouchableOpacity onPress={desfazer} disabled={registrosLength === 0}>
          <Text
            style={[
              estilos.acao,
              registrosLength === 0 && estilos.acaoDesativada,
            ]}
          >
            ↩ Desfazer
          </Text>
        </TouchableOpacity>
        <Text style={estilos.acao}>•</Text>
        <TouchableOpacity onPress={zerarDia}>
          <Text style={estilos.acao}>Zerar o dia</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}