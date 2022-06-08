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
      Todos os jogadores que entrarem antes do início da partida, receberão seus
      números do bingo. Essa sequência de números é gerada aleatoriamente e é
      única entre os jogadores da partida.
    </p>
    <p>
      As bolas sorteadas aparecerão na tela do host. Na tela da jogadora serão
      exibidas as últimas 5 bolas sorteadas.
    </p>
    <p>
      Na tela da jogadora, ao clicar no número, ele será destacado
      independentemente das bolas sorteadas.
    </p>
    <p>
      Ao clicar no botão bingo!, os números serão validados. Caso seja falso, a
      jogadora leva uma penalidade. Com três penalidades, a jogadora é eliminada
      da partida. Caso ocorra o bingo ocorra, a partida se encerra e a vencedora
      é exibida na tela de todos participantes.
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
      warning: "Sala indisponível, tente outro nome.",
      btn: "Entrar",
    },
    waitRoom: {
      title: "ID DA SALA: ",
      subtitle: "Quantidade de bolas: ",
      btn: "Iniciar",
      title2: "Aguardando jogadores... ",
      subtitle2: "entrou!",
      title3: "Instruções",
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
      title: "Aguardando início do jogo ",
      subtitle: "Seus números sorteados:  ",
      subtitle2: "Gerando cartela",
      subtitle3: "entrou!",
      title2: "Instruções",
      title3: "Aguardando jogadores...",
      instructions: pt_instructions,
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

export default { pt, en };
