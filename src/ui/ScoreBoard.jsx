import { motion } from "framer-motion";

function ScoreBoard({ img, score, player, from }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: from === "left" ? -100 : 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: from === "left" ? -100 : 100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`relative flex w-full max-w-xs flex-col items-center rounded-[2rem] border-[3px] border-black bg-white p-6 font-bold text-black shadow-black-sh tablet:max-w-md desktop:max-w-lg ${
        player === "Player 1" || player === "You"
          ? "desktop:flex-row"
          : "desktop:flex-row-reverse"
      }`}
    >
      <div className="relative w-full flex justify-center">
        <img
          src={img}
          alt="player"
          className="w-full max-w-[6rem] h-auto object-contain mobile:max-w-[3rem] tablet:max-w-[5rem]"
        />
      </div>
      <div className="flex flex-col items-center gap-4 tablet:flex-row">
        <p className="text-[2rem] uppercase mobile:text-[1.4rem]">{player}</p>
        <motion.p
          className="text-[5.6rem] font-extrabold mobile:text-[3rem]"
          key={score}
          animate={{ scale: [1, 1.5, 1] }}
        >
          {score}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default ScoreBoard;
