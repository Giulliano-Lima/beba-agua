// Cores do app em dois temas (escuro e claro).
// IMPORTANTE: os dois objetos precisam ter EXATAMENTE as mesmas chaves.
// Se uma chave faltar em um tema, a cor fica "undefined" e o React Native usa o padrão

export const coresEscuro = {
  fundo: require('../../assets/fundo-escuro.jpg'),
  corFundo: '#0B2A55', // aparece se a imagem de fundo não carregar
  cartao: 'rgba(12, 18, 30, 0.78)',
  janela: '#18202E',
  borda: 'rgba(255,255,255,0.12)',
  bordaForte: 'rgba(255,255,255,0.3)',
  texto: '#FFFFFF',
  textoSuave: '#A9B4C6',
  azul: '#3B9EFF',
  verde: '#34C759',
  trilho: 'rgba(255,255,255,0.12)',
  botaoSuave: 'rgba(255,255,255,0.10)',
  campo: 'rgba(255,255,255,0.06)',
  placeholder: '#778899',
  erro: '#FF6B6B',
  sombraTitulo: 'rgba(0,0,0,0.4)',
};

export const coresClaro = {
  fundo: require('../../assets/fundo-claro.jpg'),
  corFundo: '#BFE0F0', // aparece se a imagem de fundo não carregar
  cartao: 'rgba(255, 255, 255, 0.88)',
  janela: '#FFFFFF',
  borda: 'rgba(15,27,45,0.15)',
  bordaForte: 'rgba(15,27,45,0.35)',
  texto: '#0F1B2D',
  textoSuave: '#4A5A70',
  azul: '#0A6FD6', // mais escuro que no tema escuro, para ter contraste no cartão claro
  verde: '#1E8E3E',
  trilho: 'rgba(15,27,45,0.12)',
  botaoSuave: 'rgba(15,27,45,0.08)',
  campo: 'rgba(15,27,45,0.05)',
  placeholder: '#7A889C',
  erro: '#C62828',
  sombraTitulo: 'rgba(255,255,255,0.6)',
};