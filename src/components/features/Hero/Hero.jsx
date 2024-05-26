import s from './Hero.module.scss';
import {useState} from "react";
import Modal from "@/components/ui/Modal/Modal.jsx";
const Hero = ({lang}) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const clickHandler = () => {
    setIsModalOpen(true)
  }
  
  return (
      <div>
        <div className={s.hero}>
         
          <div className={s.twitterFeed}>
            <h2 className={s.twitterHeader}>x nEWS</h2>
            <iframe src='https://fc907e2a9c34413eb0c239f1b782edf8.elf.site' width='100%' height='750'
                    frameBorder='0'></iframe>
          </div>
          <div className={s.frog}></div>
          
          
          <div className={s.person}></div>

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
                : <span style={{fontFamily: 'SharkSoftBites'}}>Токен скоро появится в продаже, а пока вы можете начать его фармить через нашего бота!</span>
          }
        </Modal>
      </div>
  );
};

export default Hero;