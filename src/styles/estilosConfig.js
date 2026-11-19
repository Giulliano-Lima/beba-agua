import { StyleSheet } from 'react-native';

// Estilos do botão de engrenagem e da janela de configurações.
export const criarEstilosConfig = (cores) =>
  StyleSheet.create({
    // Botão de engrenagem (fica no canto da tela principal)
    botaoEngrenagem: {
      position: 'absolute',
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: cores.cartao,
      borderWidth: 1,
      borderColor: cores.borda,
      justifyContent: 'center',
      alignItems: 'center',
    },
    engrenagemTexto: { fontSize: 22 },

    // Janela de configurações
    secao: {
      fontSize: 11,
      letterSpacing: 1,
      color: cores.textoSuave,
      marginTop: 4,
    },
    linha: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: 48,
      paddingVertical: 10,
      paddingHorizontal: 14,
      borderRadius: 14,
      backgroundColor: cores.botaoSuave,
      gap: 12,
    },
    linhaDesativada: { opacity: 0.6 },
    linhaTextos: { flex: 1 },
    linhaTitulo: { fontSize: 15, fontWeight: '600', color: cores.texto },
    linhaSub: { fontSize: 12, color: cores.textoSuave },
    selo: {
      fontSize: 11,
      fontWeight: 'bold',
      color: cores.textoSuave,
      borderWidth: 1,
      borderColor: cores.bordaForte,
      borderRadius: 8,
      paddingHorizontal: 8,
      paddingVertical: 2,
    },
    seta: { fontSize: 18, color: cores.textoSuave },

    // Escolha do tema
    linhaTemas: { flexDirection: 'row', gap: 8 },
    chip: {
      flex: 1,
      minHeight: 44,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
      borderWidth: 1,
      borderColor: cores.bordaForte,
    },
    chipAtivo: { backgroundColor: cores.azul, borderColor: cores.azul },
    chipTexto: { fontSize: 14, color: cores.texto },
    chipTextoAtivo: { color: '#FFFFFF', fontWeight: 'bold' },
  });