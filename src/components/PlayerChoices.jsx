import ChoiceIcon from './ChoiceIcon';

const PlayerChoices = ({ gameMode, player1Choice, setPlayer1Choice, playComputerVsComputer }) => (
  <div className="space-y-4">
    {gameMode === 'hvsc' && !player1Choice && (
      <div className="flex justify-center space-x-4">
        {['carta', 'forbice', 'sasso'].map((choice) => (
          <button
            key={choice}
            onClick={() => setPlayer1Choice(choice)}
            className="p-2 bg-gray-200 rounded"
          >
            <ChoiceIcon choice={choice} />
          </button>
        ))}
      </div>
    )}
    {gameMode === 'cvsc' && !player1Choice && (
      <button
        onClick={playComputerVsComputer}
        className="w-full p-2 bg-yellow-500 text-white rounded"
      >
        Gioca
      </button>
    )}
  </div>
);

export default PlayerChoices;
