import s from './Modal.module.scss';
import {useEffect} from "react";

const Modal = ({children, setIsOpen, isOpen}) => {
  
  useEffect(()=>{
    const escHandler = (e)=>{
      if (e.keyCode === 27 ) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', escHandler)

    return ()=> {
      window.removeEventListener('keydown', escHandler)
    }    
    
  },[])
  
  return (
      <>
        {
            isOpen && <div onClick= {()=>setIsOpen(false)} className={s.overlay}></div>
        }

        {
            isOpen && <div className={s.modal}>
              <button onClick= {()=>setIsOpen(false)} className={s.closeBtn}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 384 512">
                  <path
                      d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
              </button>
              {children}
              <a href="https://t.me/DegenTonBot?start=web" target="_blank" className={s.botBtn}>  </a>
            </div>  
        }        
      </>
  );
};

export default Modal;