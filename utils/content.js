import instructions from "./instructions";

const pt = {
  home: {
    btn1: "Entrar na sala",
    btn2: "Criar sala",
  },
  createRoom: {
    createRoom: {
      title: "Criar Sala",
      label1: "NOME DA SALA: ",
      label2: "QUANTIDADE DE BOLAS: ",
      btn: "Entrar",
    },
    waitRoom: {
      title: "ID DA SALA: ",
      subtitle: "Quantidade de bolas: ",
      btn: "Iniciar",
      title2: "Aguardando jogadores... ",
      subtitle2: "entrou",
      title3: "Instruções",
      instructions: instructions.pt,
    },
    playRoom: {
      title: "Sorteando bolas...",
      btn: "sortear",
    },
    bingo: {
      title: "venceu!",
    },
  },
  joinRoom: {
    joinRoom: {
      title: "Entrar na Sala",
      label1: "SEU NOME: ",
      label2: "ID DA SALA: ",
      btn: "Entrar",
    },
    waitRoom: {
      title: "Aguardando início do jogo ",
      subtitle: "Seus números sorteados:  ",
      subtitle2: "Gerando cartela",
      title2: "Instruções",
      title3: "Aguardando jogadores...",
      instructions: instructions.pt,
    },
    playRoom: {
      title: "JOGO INICIALIZADO",
      btn: "BINGO!",
      bingoDisplay: {
        title: "Os últimos 5 números sorteados:",
      },
    },
    bingo: {
      title: "venceu!",
    },
  },
};

const en = {
  home: {
    btn1: "Join room",
    btn2: "Create room",
  },
  createRoom: {
    createRoom: {
      title: "Create Room",
      label1: "ROOM NAME: ",
      label2: "BALLS AMOUNT: ",
      btn: "Join",
    },
    waitRoom: {
      title: "ROOM ID: ",
      subtitle: "Balls amount: ",
      btn: "Start",
      title2: "Waiting players... ",
      subtitle2: "is here.",
      title3: "Instructions",
      instructions: instructions.en,
    },
    playRoom: {
      title: "Raffling off balls...",
      btn: "Raffle",
    },
    bingo: {
      title: "Won!",
    },
  },
  joinRoom: {
    joinRoom: {
      title: "Joing Room",
      label1: "YOUR NAME: ",
      label2: "ROOM ID: ",
      btn: "Join",
    },
    waitRoom: {
      title: "Waiting to start...",
      subtitle: "Your numbers:  ",
      subtitle2: "Creating paper",
      title2: "Instructions",
      title3: "Waiting players...",
      instructions: instructions.en,
    },
    playRoom: {
      title: "The game is on",
      btn: "BINGO!",
      bingoDisplay: {
        title: "last 5 numbers:",
      },
    },
    bingo: {
      title: "won!",
    },
  },
};

export default { pt, en };
