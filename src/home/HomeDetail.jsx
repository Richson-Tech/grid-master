import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
import { motion } from "framer-motion";

function HomeDetail() {
  return (
    <motion.section
      className="flex min-h-screen items-center justify-center"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div className="left-1/2 top-1/2 flex w-full max-w-[50rem] flex-col items-center gap-10 rounded-[4rem] border-[3px] border-black bg-purple px-16 py-28 shadow-black-sh mobile:border-none mobile:px-8 mobile:shadow-none">
        
        {/* Animated Game Title */}
        <motion.h1
          className="text-[4rem] font-extrabold uppercase text-[#FF8C42] drop-shadow-lg mobileSmall:text-[3rem]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Grid Master
        </motion.h1>

        <Logo />

        <div className="flex w-full flex-col gap-12 text-[2.4rem] font-bold uppercase mobileSmall:text-[1.8rem]">
          <Link
            className="flex items-center justify-between rounded-[2rem] border-[3px] border-black bg-[#00785D] p-8 shadow-black-sh transition-all duration-300 hover:bg-white"
            to="ai"
          >
            <img
              src="./player.svg"
              alt="player vs ai icon"
              className="w-[5rem]"
            />
            <p>You vs AI</p>
            <img src="./ai.svg" alt="player vs ai icon" className="w-[5rem]" />
          </Link>

          <Link
            className="flex items-center justify-between rounded-[2rem] border-[3px] border-black bg-[#FF8C42] p-8 shadow-black-sh transition-all duration-300 hover:bg-white"
            to="player"
          >
            <img
              src="./player.svg"
              alt="player vs ai icon"
              className="w-[5rem]"
            />
            <p>You vs player</p>
            <img
              src="./second-player.svg"
              alt="player vs player icon"
              className="w-[5rem]"
            />
          </Link>

          <Link to="rules">
            <p className="flex items-center justify-between rounded-[2rem] border-[3px] border-black bg-[#F7C948] p-8 shadow-black-sh transition-all duration-300 hover:shadow-purple-sh">
              Game Rules
            </p>
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default HomeDetail;
