import { useState, useEffect } from 'react';
import GameModeSelector from './GameModeSelector';
import PlayerChoices from './PlayerChoices';
import GameResult from './GameResult';

const choices = ['carta', 'forbice', 'sasso'];

const getRandomChoice = () => choices[Math.floor(Math.random() * choices.length)];

const determineWinner = (player1, player2) => {
  if (player1 === player2) return 'Pareggio';
  if (
    (player1 === 'carta' && player2 === 'sasso') ||
    (player1 === 'forbice' && player2 === 'carta') ||
    (player1 === 'sasso' && player2 === 'forbice')
  ) {
    return 'Giocatore 1 vince';
  }
  return 'Giocatore 2 vince';
};

const Game = () => {
  const [gameMode, setGameMode] = useState(null);
  const [player1Choice, setPlayer1Choice] = useState(null);
  const [player2Choice, setPlayer2Choice] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (player1Choice && player2Choice) {
      setResult(determineWinner(player1Choice, player2Choice));
    }
  }, [player1Choice, player2Choice]);

  const resetGame = () => {
    setPlayer1Choice(null);
    setPlayer2Choice(null);
    setResult(null);
  };

  const playHumanVsComputer = (humanChoice) => {
    setPlayer1Choice(humanChoice);
    setPlayer2Choice(getRandomChoice());
  };

  const playComputerVsComputer = () => {
    setPlayer1Choice(getRandomChoice());
    setPlayer2Choice(getRandomChoice());
  };

  const handleStartOver = () => {
    resetGame();
    setGameMode(null);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Carta, Forbice e Sasso</h1>
      {!gameMode ? (
        <GameModeSelector setGameMode={setGameMode} />
      ) : (
        <div className="space-y-4">
          <PlayerChoices
            gameMode={gameMode}
            player1Choice={player1Choice}
            setPlayer1Choice={playHumanVsComputer}
            playComputerVsComputer={playComputerVsComputer}
          />
          {player1Choice && player2Choice && (
            <GameResult player1Choice={player1Choice} player2Choice={player2Choice} result={result} />
          )}
        </div>
      )}
     {result && (
        <div>
          <button
            onClick={resetGame}
            className="mt-4 w-full p-2 bg-red-500 text-white rounded"
          >
            Nuova partita
          </button>
          <button
            onClick={handleStartOver}
            className="mt-2 w-full p-2 bg-gray-500 text-white rounded"
          >
            Torna all'inizio
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
