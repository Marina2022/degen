import s from './StartScreen.module.scss';
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
const StartScreen = ({lang, setShowStartScreen, showStartScreen}) => {
  const [mood, setMood] = useState('neutral')
  const buyHandler = () => {
    console.log('ya')
    setMood('merry')

    setTimeout(() => {
      setShowStartScreen(false)
      localStorage.setItem('userIsNew', 'no')
    }, 2000)
  }
  const sellHandler = () => {
    console.log('ya')
    setMood('sad')
    setTimeout(() => {
      setShowStartScreen(false)
      localStorage.setItem('userIsNew', 'no')
    }, 2000)
  }

  return (
      showStartScreen && <div>
        <AnimatePresence>
          <motion.div
              key={3}
              animate={{opacity: 1}}
              exit={{opacity: 0}}

              transition={{
                duration: 1
              }}
              
              className={s.startScreen}>

            {
                mood === 'neutral' && <div className={s.bg}></div>
            }

            {
                mood === 'merry' && <motion.div
                    className={s.bgMerry}

                    key={1}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}

                    transition={{
                      duration: 1
                    }}

                ></motion.div>
            }


            {
                mood === 'sad' && <motion.div
                    className={s.bgSad}
                    key={2}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}

                    transition={{
                      duration: 1
                    }}
                ></motion.div>
            }


            {
                mood === 'neutral' && <div className={s.person}></div>
            }

            {
                mood === 'merry' && <motion.div
                    key={6}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}

                    transition={{
                      duration: 1
                    }}
                    className={s.personMerry}></motion.div>
            }

            {
                mood === 'sad' && <motion.div
                    key={5}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}

                    transition={{
                      duration: 1
                    }}
                    className={s.personSad}></motion.div>
            }


            {
                lang === 'en' && <button className={s.buyBtn} onClick={buyHandler}></button>
            }
            {
                lang === 'ru' && <button className={s.buyBtnRu} onClick={buyHandler}>Купить</button>
            }

            {
                lang === 'en' && <button className={s.sellBtn} onClick={sellHandler}></button>
            }

            {
                lang === 'ru' && <button className={s.sellBtnRu} onClick={sellHandler}>Продать</button>
            }


            {
                lang === 'en' && <div className={s.pressBtn}></div>
            }

            {
                lang === 'ru' && <div className={s.pressBtnRu}>Нажмите любую кнопку, чтобы продолжить</div>
            }


          </motion.div>
        </AnimatePresence>
      </div>
  );
};

export default StartScreen;