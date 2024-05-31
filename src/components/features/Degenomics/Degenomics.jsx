import s from './Degenomics.module.scss';
const Degenomics = ({lang}) => {
  return (
      <div className={lang === 'en' ? s.degen : s.degenRu }>        
        
      </div>
  );
};
export default Degenomics;