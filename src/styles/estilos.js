import { StyleSheet } from 'react-native';

// Recebe as cores do tema atual (claro ou escuro) e devolve os estilos.
export const criarEstilos = (cores) =>
  StyleSheet.create({
    background: { flex: 1 },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      gap: 16,
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      color: cores.texto,
      textShadowColor: cores.sombraTitulo,
      textShadowOffset: { width: 0, height: 2 },
      textShadowRadius: 4,
    },

    // Cartão
    cartao: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: cores.cartao,
      borderRadius: 28,
      borderWidth: 1,
      borderColor: cores.borda,
      padding: 25,
      gap: 12,
    },
    topo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    rotulo: {
      fontSize: 11,
      letterSpacing: 1,
      color: cores.textoSuave,
    },
    metaValor: {
      fontSize: 20,
      fontWeight: 'bold',
      color: cores.texto,
    },
    iconeEditar: {
      backgroundColor: cores.botaoSuave,
      width: 38,
      height: 39,
      borderRadius: 19,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconeTexto: {
      fontSize: 16,
    },

    numero: {
      fontSize: 46,
      fontWeight: 'bold',
      color: cores.azul,
      textAlign: 'center',
    },
    unidade: {
      fontSize: 20,
      fontWeight: 'normal',
      color: cores.textoSuave,
    },

    // Barra
    blocoBarra: { gap: 6 },
    barraFundo: {
      height: 12,
      backgroundColor: cores.trilho,
      borderRadius: 6,
      overflow: 'hidden',
    },
    barraPreenchida: { height: '100%', borderRadius: 6 },
    infoBarra: { flexDirection: 'row', justifyContent: 'space-between' },
    infoTexto: { fontSize: 13, color: cores.textoSuave },
    frase: { fontSize: 14, color: cores.texto, textAlign: 'center' },

    // Botões de água
    linhaBotoes: { flexDirection: 'row', gap: 10 },
    botaoAgua: {
      flex: 1,
      backgroundColor: cores.azul,
      borderRadius: 18,
      paddingVertical: 10,
      alignItems: 'center',
      gap: 2,
    },
    botaoEmoji: { fontSize: 20 },
    botaoMl: { fontSize: 15, fontWeight: 'bold', color: '#FFFFFF' },

    linhaAcoes: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 12,
    },
    acao: { fontSize: 14, color: cores.textoSuave },
    acaoDesativada: { opacity: 0.35 },

    // Janelinha (modal)
    fundoEscuro: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.6)',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24,
    },
    janela: {
      width: '100%',
      maxWidth: 340,
      backgroundColor: cores.janela,
      borderRadius: 22,
      borderWidth: 1,
      borderColor: cores.borda,
      padding: 22,
      gap: 12,
    },
    janelaTitulo: {
      fontSize: 18,
      fontWeight: 'bold',
      color: cores.texto,
      textAlign: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: cores.borda,
      borderRadius: 12,
      padding: 12,
      fontSize: 20,
      textAlign: 'center',
      color: cores.texto,
      backgroundColor: cores.campo,
    },
    dica: { fontSize: 12, color: cores.textoSuave, textAlign: 'center' },
    erro: { fontSize: 13, color: cores.erro, textAlign: 'center' },
    linhaModal: { flexDirection: 'row', gap: 10, marginTop: 4 },
    botaoModal: {
      flex: 1,
      paddingVertical: 12,
      borderRadius: 14,
      alignItems: 'center',
    },
    botaoModalTexto: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  });