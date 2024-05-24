import {AnimatePresence, motion} from "framer-motion";
import Hero from "@/components/features/Hero/Hero.jsx";
import Vision from "@/components/features/Vision/Vision.jsx";
import Airdrop from "@/components/features/Airdrop/Airdrop.jsx";
import Degenomics from "@/components/features/Degenomics/Degenomics.jsx";
import Footer from "@/components/layout/Footer/Footer.jsx";

const MainPage = ({lang, showStartScreen}) => {

  return (
      <AnimatePresence>
        {
            !showStartScreen && <motion.div
                key={33}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{
                  duration: 1
                }}
            >
              <Hero lang={lang}/>
              <Vision lang={lang}/>
              <Airdrop lang={lang}/>
              <Degenomics lang={lang}/>
              <Footer lang={lang}/>
            </motion.div>
        }
      </AnimatePresence>
  );
};

export default MainPage;