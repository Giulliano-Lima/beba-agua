# Roadmap do Beba Água

Este arquivo mostra o que já existe no app, o que vai mudar e onde mexer em cada tarefa. Quem for continuar o projeto pode começar por aqui.

> Marque com `[x]` o que for sendo concluído e atualize a data no final do arquivo.

## Como rodar o projeto

```bash
npm install
npx expo start
```

- Versão do Expo SDK: **58** (confira em `package.json`).
- Use o app **Expo Go** no celular, na mesma rede Wi-Fi do computador.
- Se o Expo Go e o projeto estiverem em SDKs diferentes, o app não abre. Atualize o projeto com `npm install expo@latest` e `npx expo install --fix`.
- Mantenha a pasta do projeto **fora do OneDrive** (ex.: `C:\projetos\beba-agua`), porque a sincronização pode corromper o `node_modules`.
- O Expo Go mostra um botão de engrenagem no canto superior direito. **Ele não faz parte do app**, é o menu de desenvolvedor do Expo Go e some no app instalado. A engrenagem do app fica no canto superior esquerdo.

## Estrutura de pastas

```
beba-agua/
├── App.js                      ← estado geral (meta, água, tema) e montagem das telas
├── app.json                    ← nome, ícones, versão
├── assets/                     ← imagens (fundos e ícones)
└── src/
    ├── components/
    │   ├── CartaoAgua.js       ← cartão principal (número, barra, botões)
    │   ├── BotaoAgua.js        ← botão +200, +300, +500
    │   ├── ModalMeta.js        ← janela de editar a meta
    │   └── ModalConfiguracoes.js ← janela da engrenagem
    ├── constants/
    │   ├── cores.js            ← coresEscuro e coresClaro
    │   └── opcoes.js           ← quantidades rápidas (ml)
    ├── styles/
    │   ├── estilos.js          ← estilos da tela principal e do modal da meta
    │   └── estilosConfig.js    ← estilos da engrenagem e das configurações
    └── utils/
        └── frases.js           ← frases motivacionais
```

Regra simples: cada arquivo cuida de **uma coisa só**. Se um arquivo passar de ~150 linhas, vale dividir.

## Como o tema (claro e escuro) funciona

1. O `App.js` lê o modo do celular com `useColorScheme()` e a escolha da pessoa em `preferenciaTema` (`'auto'`, `'claro'` ou `'escuro'`).
2. Com isso escolhe `coresClaro` ou `coresEscuro` (em `src/constants/cores.js`).
3. As cores vão para `criarEstilos(cores)`, que devolve os estilos já no tema certo.
4. Os componentes recebem `estilos` e `cores` por props.

**Regras para não quebrar:**

- Os dois temas precisam ter **exatamente as mesmas chaves**. Se faltar uma, a cor vira `undefined` e o React Native usa o padrão (texto preto, botão transparente).
- Nunca escreva uma cor fixa (`'#fff'`, `'#18202E'`) dentro de um componente. Crie uma chave nova em `cores.js`, nos **dois** temas.
- Hooks (`useState`, `useColorScheme`...) só podem ser chamados **dentro** do componente, nunca no topo do arquivo.
- Ao criar um componente novo que usa o tema, lembre de passar `estilos` e `cores` por props.
- O fundo escolhido vem de `cores.fundo`, e `cores.corFundo` é a cor reserva caso a imagem não carregue.

## Já pronto

- [x] Meta diária editável
- [x] Botões rápidos (+200, +300, +500 ml)
- [x] Barra de progresso (fica verde ao bater a meta)
- [x] Desfazer o último registro e zerar o dia
- [x] Frases motivacionais por faixa de progresso
- [x] Aviso ao bater a meta
- [x] Código dividido em componentes, constantes, estilos e utilitários
- [x] Modo claro e escuro, com fundos próprios
- [x] Botão de engrenagem com tela de configurações (meta, tema, sobre)
- [x] Escolha de tema Automático / Claro / Escuro
- [x] Aviso de que a meta é uma referência e não orientação médica (em "Sobre o app")
- [x] Projeto rodando no Expo Go (SDK 58)

## O que vai mudar e onde mexer

| Tarefa | Arquivos afetados | Observações |
|---|---|---|
| Salvar dados no aparelho | `App.js`, novo `src/storage/armazenamento.js` | Instalar `@react-native-async-storage/async-storage`. Salvar meta, registros, data e `preferenciaTema`. Ao abrir em outro dia, guardar o dia anterior no histórico e zerar |
| Salvar a escolha de tema | `App.js`, `armazenamento.js` | Hoje o tema volta para "Automático" ao fechar o app |
| Histórico | novo `src/components/TelaHistorico.js`, `ModalConfiguracoes.js` | Ativar o item "Histórico": tirar `emBreve` da `<Linha>` e passar `onPress` |
| Lembretes | novo `src/utils/notificacoes.js`, `ModalConfiguracoes.js` | Instalar `expo-notifications`. Pedir permissão e criar canal no Android. Testar em build real |
| Quantidades rápidas | `src/constants/opcoes.js`, `CartaoAgua.js`, `ModalConfiguracoes.js` | Hoje as opções são fixas. Precisam virar estado salvo |
| Trocar props de tema por um hook | `App.js` e todos os componentes | Criar `useTema()` (ou Context) para os componentes não precisarem receber `estilos` e `cores` por props. Evita erros de prop esquecida |
| Confirmar "Zerar o dia" | `CartaoAgua.js` ou `App.js` | `Alert.alert` com Cancelar e Zerar |
| Acessibilidade nos botões antigos | `CartaoAgua.js`, `BotaoAgua.js`, `ModalMeta.js` | Os itens de configuração já têm rótulos. Falta nos demais |

## Fases

### Fase 1: Organização do código
- [x] Separar cores, opções e estilos em arquivos próprios
- [x] Dividir o `App.js` em componentes
- [x] Mover a lógica das frases para `src/utils/frases.js`
- [ ] Trocar as props `estilos` e `cores` por um hook `useTema()`
- [ ] Remover do `assets` as imagens que não são usadas
- [ ] Escrever o `README.md` (como rodar, SDK, estrutura de pastas)
- [ ] Subir o projeto para o GitHub (com `node_modules` no `.gitignore`)

### Fase 2: Funcionalidades essenciais
- [ ] **Salvar dados no aparelho** (AsyncStorage)
- [ ] **Histórico** dos dias anteriores (lista com barra por dia e, depois, gráfico dos últimos 7 dias)
- [ ] **Notificações de lembrete** (intervalo escolhido nas configurações)
- [ ] **Confirmação ao "Zerar o dia"**

### Fase 3: Acessibilidade
- [x] Rótulos e papéis (`accessibilityRole` / `accessibilityLabel`) na engrenagem e nas configurações
- [ ] Mesmos rótulos nos botões +200/+300/+500, no lápis, em "Desfazer", em "Zerar o dia" e no modal da meta
- [ ] Rótulo no total e na barra (ex.: "800 de 2000 mililitros, 40 por cento")
- [ ] Área de toque mínima de 48x48 em todos os botões
- [ ] Conferir contraste nos dois temas (principalmente os itens desativados e o cinza do "Desfazer")
- [ ] Testar com fonte grande do sistema
- [ ] Testar com leitor de tela (TalkBack no Android, VoiceOver no iPhone)
- [ ] Não depender só de cor: a barra verde também mostra o texto "Meta concluída"

### Fase 4: Melhorias opcionais
- [ ] Quantidade personalizada, além de 200/300/500 ml
- [ ] Sugerir a meta pelo peso (referência comum: cerca de 35 ml por kg)
- [ ] Vibração leve ao adicionar água (`expo-haptics`)
- [ ] Mensagens ao passar de 50% e 100% da meta
- [ ] Idiomas (português e inglês)
- [ ] Trocar o emoji da engrenagem por um ícone (`@expo/vector-icons`), com cor do tema

## Ícones e imagens

Os ícones só aparecem de verdade em um **build instalado**. O Expo Go mostra o ícone dele.

| Arquivo | Para que serve | O que conferir |
|---|---|---|
| `assets/icon.png` | Ícone do iPhone | Quadrado de 1024x1024, **sem transparência e sem cantos arredondados** (o iOS arredonda sozinho). A arte deve preencher tudo |
| `assets/android-icon-foreground.png` | Frente do ícone do Android | Desenho dentro da área central (cerca de 2/3 da imagem), porque o Android corta as bordas. Se o fundo azul fizer parte da imagem, ele deve cobrir a imagem inteira |
| `assets/android-icon-background.png` | Fundo do ícone do Android | Ainda é o padrão do Expo. Pode apagar a linha `backgroundImage` do `app.json` e usar só o `backgroundColor` com o azul da ilustração |
| `assets/android-icon-monochrome.png` | Ícone temático (Android 13+) | Só a silhueta (pessoa e garrafa) em uma cor, com o resto **transparente**. Qualquer pixel opaco vira parte da forma |
| `assets/favicon.png` | Versão web | Ainda é o padrão do Expo. Só importa se publicar na web |
| tela de abertura (splash) | Tela ao abrir o app | Ainda é o padrão. Confira na documentação do Expo como configurar no SDK atual |

## Antes de lançar

### Qualidade
- [ ] Testar em Android e iPhone reais, não só no Expo Go
- [ ] Testar telas pequenas e fonte grande
- [ ] Testar com a permissão de notificação negada
- [ ] Remover `console.log` e arquivos não usados
- [ ] Rodar `npx expo-doctor` sem erros
- [ ] Testar as notificações em um build real (podem se comportar diferente no Expo Go)

### Identidade do app (`app.json`)
- [ ] Nome final do app
- [ ] Ícones e tela de abertura conferidos em um build (veja a seção acima)
- [ ] `android.package` e `ios.bundleIdentifier` definitivos (ex.: `com.seunome.bebaagua`). **Não dá para mudar depois de publicado**
- [ ] `version` e número de build
- [ ] Manter `"userInterfaceStyle": "automatic"` para o modo claro/escuro funcionar

### Lojas
- [ ] Conta de desenvolvedor no Google Play e/ou Apple (confira valores e regras atuais, porque mudam)
- [ ] **Política de privacidade** com link público, mesmo que o app não envie dados para a internet
- [ ] Formulário de segurança de dados (Google Play) e privacidade do app (Apple)
- [ ] Classificação etária, categoria, descrição, capturas de tela (nos dois temas) e e-mail de suporte
- [ ] Verificar se contas pessoais novas do Google Play exigem teste fechado antes de publicar

### Build e publicação
- [ ] Gerar o app com **EAS Build** (`npx eas build`)
- [ ] Android: enviar o arquivo `.aab`. iPhone: enviar pelo App Store Connect
- [ ] Usar `npx eas submit` ou o painel de cada loja

### Cuidados
- [x] Avisar no app que a meta de água é uma referência, e não orientação médica
- [ ] Conferir a licença das imagens de fundo, ícones e fontes usados
- [ ] Anotar de onde veio cada imagem (autor e link) em um arquivo `CREDITOS.md`

## Problemas conhecidos e dicas

| Problema | Causa e solução |
|---|---|
| `npx` bloqueado no PowerShell | Rodar `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` ou usar o Prompt de Comando |
| `ConfigError: module expo is not installed` | Faltou `npm install` |
| "Project is incompatible with this version of Expo Go" | O SDK do projeto é diferente do Expo Go. Atualizar o SDK |
| `Property 'y' doesn't exist` ao abrir | Biblioteca antiga ou incompatível (ex.: `react-native-paper` 4.x). Remover o que não é usado |
| Erros estranhos depois de atualizar | Apagar `node_modules` e `package-lock.json`, rodar `npm install` e `npx expo start -c` |
| `Cannot read property 'useSyncExternalStore' of null` | Um hook foi chamado fora do componente (no topo do arquivo). Mover para dentro da função |
| `Property 'x' doesn't exist` em `App.js` | Faltou criar o estado (`useState`) ou ele foi apagado ao colar código |
| `Cannot read property 'algumaCoisa' of undefined` em um componente | O componente não recebeu `estilos` ou `cores` por props, ou ainda importa o arquivo antigo (`import { estilos } ...`) |
| Texto preto, botões sem cor ou barra invisível | Falta chave em `coresClaro` ou `coresEscuro`. Os dois temas devem ter as mesmas chaves |
| Fundo branco em vez da imagem | Arquivo de imagem que o Android não lê (ex.: JPG em CMYK ou outro formato renomeado) ou cache. Salvar a imagem de novo como JPEG e rodar `npx expo start -c` |
| Botão de coluna sem texto | `estilos.botaoModal` tem `flex: 1`, feito para botões lado a lado. Em uma coluna, use `flexGrow: 0`, `flexShrink: 0`, `flexBasis: 'auto'` |

---

Última atualização: 19/11/2026