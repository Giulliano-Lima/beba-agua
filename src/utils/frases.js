export const obterFraseDiaria = (bebido, porcentagem) => {
  if (bebido === 0) return 'Hora de começar!';
  if (porcentagem < 50) return 'Bom começo, continue assim!';
  if (porcentagem < 100) return 'Mais da metade, falta pouco! 💪';
  return 'Meta batida! Você arrasou 🎉';
};