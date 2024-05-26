import s from './Hero.module.scss';
import {useEffect, useState} from "react";
import Modal from "@/components/ui/Modal/Modal.jsx";

import leftEyeOpen from '@/assets/img/hero/eyes/left-eye-open.png'
import rightEyeOpen from '@/assets/img/hero/eyes/right-eye-open.png'
import leftEyeClosed from '@/assets/img/hero/eyes/left-eye-close.png'
import rightEyeClosed from '@/assets/img/hero/eyes/right-eye-close.png'

const Hero = ({lang}) => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const clickHandler = () => {
    setIsModalOpen(true)
  }

  const [eyesAreOpen, setEyesAreOpen] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setEyesAreOpen(false)
      setTimeout(() => {
        setEyesAreOpen(true)
      }, 100)
    }, 11000)

    return () => {
      clearInterval(id)
    }

  }, []);

  // console.log({eyesAreOpen})

  return (
      <div>
        <div className={s.hero}>

          <div className={s.twitterFeed}>
            <h2 className={s.twitterHeader}>x nEWS</h2>
            <iframe src='https://fc907e2a9c34413eb0c239f1b782edf8.elf.site' width='100%' height='750'
                    frameBorder='0'></iframe>
          </div>


          <div className={`${s.letter} ${s.letter1}`}></div>
          <div className={`${s.letter} ${s.letter2}`}></div>
          <div className={`${s.letter} ${s.letter3}`}></div>
          <div className={`${s.letter} ${s.letter4}`}></div>
          <div className={`${s.letter} ${s.letter5}`}></div>


          <div
              className={s.frog}>
          </div>


          <div className={s.person}></div>

          <div className={s.leftEye}>
            <img src={eyesAreOpen ? leftEyeOpen : leftEyeClosed} alt="left eye"/> 
          </div>
          <div className={s.rightEye}>
            <img src={eyesAreOpen ? rightEyeOpen : rightEyeClosed} alt="right eye"/>
          </div>

          {
              lang === 'ru' && <button onClick={clickHandler} className={s.buyTokenBtnRu}></button>
          }
          {
              lang === 'en' && <button onClick={clickHandler} className={s.buyTokenBtnEn}></button>
          }


        </div>

        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          {
            lang === 'en' ?
                <span>The token will be available for sale soon, but in the meantime you can start farming it through our bot!</span>
                :
                <span style={{fontFamily: 'SharkSoftBites'}}>Токен скоро появится в продаже, а пока вы можете начать его фармить через нашего бота!</span>
          }
        </Modal>
      </div>
  );
};

export default Hero;