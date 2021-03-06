const en_instructions = (
  <>
    <p>
      When the players join the room, they all receive a sequence of random
      numbers, those numbers are unique between the players in that round.
    </p>
    <p>
      The raffled balls will be shown on the host screen. On the players screen
      will be exhibited the last 5 raffled balls.
    </p>
    <p>
      When you click on a number on the screen player, that number will receive
      an emphasis regardless of the raffled balls.
    </p>
    <p>
      When you click on the bingo! button, your numbers will be verified. If a
      bingo does not occur, you will receive a strike, with three strikes you
      will be eliminated from that round. If the bingo happens, the round will
      finish and your name will be displayed on all players' screens.
    </p>
  </>
);

const en = {
  home: {
    btn1: "Join room",
    btn2: "Create room",
  },
  createRoom: {
    createRoom: {
      title: "Create Room",
      label1: "ROOM NAME: ",
      label2: "BALLS AMOUNT (50 - 99): ",
      btn: "Join",
      warning: "Room unavailable, try another name.",
    },
    waitRoom: {
      title: "ROOM ID: ",
      subtitle: "Balls amount: ",
      btn: "Start",
      title2: "Waiting players... ",
      subtitle2: "is here.",
      title3: "Instructions",
      instructions: en_instructions,
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
      subtitle3: "is here!",
      title2: "Instructions",
      title3: "Waiting players...",
      instructions: en_instructions,
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

const pt_instructions = (
  <>
    <p>
      Todos os jogadores que entrarem antes do in??cio da partida, receber??o seus
      n??meros do bingo. Essa sequ??ncia de n??meros ?? gerada aleatoriamente e ??
      ??nica entre os jogadores da partida.
    </p>
    <p>
      As bolas sorteadas aparecer??o na tela do host. Na tela da jogadora ser??o
      exibidas as ??ltimas 5 bolas sorteadas.
    </p>
    <p>
      Na tela da jogadora, ao clicar no n??mero, ele ser?? destacado
      independentemente das bolas sorteadas.
    </p>
    <p>
      Ao clicar no bot??o bingo!, os n??meros ser??o validados. Caso seja falso, a
      jogadora leva uma penalidade. Com tr??s penalidades, a jogadora ?? eliminada
      da partida. Caso ocorra o bingo ocorra, a partida se encerra e a vencedora
      ?? exibida na tela de todos participantes.
    </p>
  </>
);

const pt = {
  home: {
    btn1: "Entrar na sala",
    btn2: "Criar sala",
  },
  createRoom: {
    createRoom: {
      title: "Criar Sala",
      label1: "NOME DA SALA: ",
      label2: "QUANTIDADE DE BOLAS: (50 - 99)",
      warning: "Sala indispon??vel, tente outro nome.",
      btn: "Entrar",
    },
    waitRoom: {
      title: "ID DA SALA: ",
      subtitle: "Quantidade de bolas: ",
      btn: "Iniciar",
      title2: "Aguardando jogadores... ",
      subtitle2: "entrou!",
      title3: "Instru????es",
      instructions: pt_instructions,
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
      title: "Aguardando in??cio do jogo ",
      subtitle: "Seus n??meros sorteados:  ",
      subtitle2: "Gerando cartela",
      subtitle3: "entrou!",
      title2: "Instru????es",
      title3: "Aguardando jogadores...",
      instructions: pt_instructions,
    },
    playRoom: {
      title: "JOGO INICIALIZADO",
      btn: "BINGO!",
      bingoDisplay: {
        title: "Os ??ltimos 5 n??meros sorteados:",
      },
    },
    bingo: {
      title: "venceu!",
    },
  },
};

export default { pt, en };
