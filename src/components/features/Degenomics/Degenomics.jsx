import s from './Degenomics.module.scss';
const Degenomics = ({lang}) => {
  return (
      <div className={lang === 'en' ? s.degen : s.degenRu }>        
        {          
            lang === 'ru' && <div className={s.degenLabel}></div>
        }        
      </div>
  );
};
export default Degenomics;