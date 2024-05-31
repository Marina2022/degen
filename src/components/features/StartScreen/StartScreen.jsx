import s from './StartScreen.module.scss';
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

const StartScreen = ({lang, setShowStartScreen, showStartScreen}) => {
  const [mood, setMood] = useState('neutral')
  const buyHandler = () => {
    setShowButtons(false)
    setMood('merry')

    setTimeout(() => {
      setShowStartScreen(false)
      localStorage.setItem('userIsNew', 'no')
    }, 2000)
  }
  const sellHandler = () => {
    setShowButtons(false)
    setMood('sad')
    setTimeout(() => {
      setShowStartScreen(false)
      localStorage.setItem('userIsNew', 'no')
    }, 2000)
  }

  const [showButtons, setShowButtons] = useState(true)

  const [person, setPerson] = useState(false)
  
   useEffect(()=>{
      const id = setInterval(()=>{
        setPerson(prev =>!prev)
      }, .2)

      return ()=> clearInterval(id)
    }, [])
  
  return (

      <div >
        {
            showStartScreen && <div>
              <AnimatePresence>
                <motion.div
                    key={3}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}

                    transition={{
                      duration: 1
                    }}

                    className={s.startScreen}
                >

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
                      mood === 'neutral' && person && <div className={s.person1}></div>
                  }

                  {
                      mood === 'neutral' && !person && <div className={s.person2}></div>
                  }

                  {
                      mood === 'merry' && person && <motion.div
                          key={6}
                          initial={{opacity: 0}}
                          animate={{opacity: 1}}
                          exit={{opacity: 0}}

                          transition={{
                            duration: 1
                          }}
                          className={s.personMerry1}></motion.div>
                  }

                  {
                      mood === 'merry' && !person && <motion.div
                          key={6}
                          initial={{opacity: 0}}
                          animate={{opacity: 1}}
                          exit={{opacity: 0}}

                          transition={{
                            duration: 1
                          }}
                          className={s.personMerry2}></motion.div>
                  }

                  {
                      mood === 'sad' && person && <motion.div
                          key={5}
                          initial={{opacity: 0}}
                          animate={{opacity: 1}}
                          exit={{opacity: 0}}

                          transition={{
                            duration: 1
                          }}
                          className={s.personSad1}></motion.div>
                  }

                  {
                      mood === 'sad' && !person && <motion.div
                          key={5}
                          initial={{opacity: 0}}
                          animate={{opacity: 1}}
                          exit={{opacity: 0}}

                          transition={{
                            duration: 1
                          }}
                          className={s.personSad2}></motion.div>
                  }


                  {
                      lang === 'en' && showButtons && <button className={s.buyBtn} onClick={buyHandler}></button>
                  }
                  
                  {
                      lang === 'ru' && showButtons && <button className={s.buyBtnRu} onClick={buyHandler}>Купить</button>
                  }

                  {
                      lang === 'en' && showButtons && <button className={s.sellBtn} onClick={sellHandler}></button>
                  }

                  {
                      lang === 'ru' && showButtons && <button className={s.sellBtnRu} onClick={sellHandler}>Продать</button>
                  }


                  {
                      lang === 'en' && showButtons && <div className={s.pressBtn}></div>
                  }

                  {
                      lang === 'ru' && showButtons &&
                      <div className={s.pressBtnRu}>Нажмите любую кнопку, чтобы продолжить</div>
                  }
                </motion.div>
              </AnimatePresence>
            </div>
        }
      </div>

  );
};

export default StartScreen;