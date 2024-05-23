import s from './LangSwitch.module.scss';
import langRu from '@/assets/img/lang/langRu.svg'
import langEn from '@/assets/img/lang/langEn.svg'

const LangSwitch = ({lang, setLang}) => {
  
  const clickHandler = () => {
    if (lang === 'ru') {
      setLang('en')
    } else {
      setLang('ru')
    }
  }
  
  return (
      <div className={s.switch} onClick={(clickHandler)}>
        {
          lang === 'en'
              ? <img src={langEn} alt="language"/>
              : <img src={langRu} alt="language"/>
        }

      </div>
  );
};

export default LangSwitch;