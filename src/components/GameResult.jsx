import ChoiceIcon from './ChoiceIcon';

const GameResult = ({ player1Choice, player2Choice, result }) => (
  <div className="text-center space-y-2">
    <div className="flex justify-center space-x-8">
      <div>
        <p>Giocatore 1</p>
        <ChoiceIcon choice={player1Choice} />
      </div>
      <div>
        <p>Giocatore 2</p>
        <ChoiceIcon choice={player2Choice} />
      </div>
    </div>
    <p className="font-bold">{result}</p>
  </div>
);

export default GameResult;
