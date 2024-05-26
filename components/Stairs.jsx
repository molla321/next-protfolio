import { animate, motion } from "framer-motion";

// verints
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reversIndex = (index) => {
  const tatelSteps = 6; // render of steps
  return tatelSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {
        [...Array(6)].map((_, index) => {
          return (
            <motion.div
              key={index}
              variants={stairAnimation}
              initial="inital"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: reversIndex(index) * 0.1,
              }}
              className="h-full w-full bg-white relative"
            />
          );
        })
      }
    </>
  );
};

export default Stairs;
