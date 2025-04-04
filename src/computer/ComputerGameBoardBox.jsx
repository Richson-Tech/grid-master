import { useSelector } from "react-redux";
import ScoreBoard from "../ui/ScoreBoard";
import ComputerGameBoard from "./ComputerGameBoard";

function ComputerGameBoardBox() {
  const { playerScore, computerScore } = useSelector((store) => store.computer);
  return (
    <div
      className="grid max-w-[103rem] grid-cols-[auto_1fr_auto] items-center gap-24 desktop:grid-cols-2 desktop:gap-x-8 desktop:gap-y-12 mobile:w-full mobile:px-16
    "
    >
      <ScoreBoard
        img="./player.svg"
        score={playerScore}
        player="You"
        from="left"
      />

      <ComputerGameBoard />

      <ScoreBoard
        img="./ai.svg"
        score={computerScore}
        player="ai"
        from="right"
      />
    </div>
  );
}

export default ComputerGameBoardBox;
