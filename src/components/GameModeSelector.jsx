const GameModeSelector = ({ setGameMode }) => (
  <div className="space-y-4">
    <button
      onClick={() => setGameMode('hvsc')}
      className="w-full p-2 bg-blue-500 text-white rounded"
    >
      Umano vs Computer
    </button>
    <button
      onClick={() => setGameMode('cvsc')}
      className="w-full p-2 bg-green-500 text-white rounded"
    >
      Computer vs Computer
    </button>
  </div>
);

export default GameModeSelector;
