import s from './Airdrop.module.scss';

const Airdrop = ({lang}) => {
  return (
      <div className={lang === 'en' ?  s.airdropBlock : s.airdropBlockRu}>
        {
            lang === 'en' && <a href="https://t.me/DegenTonBot?start=web" target="_blank" className={s.botBtnEn}></a>
        }

        {
            lang === 'ru' && <a href="https://t.me/DegenTonBot?start=web" target="_blank" className={s.botBtnRu}></a>
        }

        {
            lang === 'ru' && <div className={s.label1}>Получите $DEGEN дроп, тапая по экранчику и приглашая своих друзей</div>
        }

        {
            lang === 'ru' && <div className={s.label2}>Запуск дегенского кликера</div>
        }

        {
            lang === 'ru' && <div className={s.label3}>Предпродажа $DEGEN</div>
        }

        {
            lang === 'ru' && <div className={s.label4}>Листинг на DEX биржах</div>
        }

        {
            lang === 'ru' && <div className={s.label5}>Дроп $DEGEN токенов для настоящих дегенов</div>
        }

        {
            lang === 'ru' && <div className={s.label6}>Дроп коллекции Degen NFT аватарок для держателей $DEGEN</div>
        }

        {
            lang === 'ru' && <div className={s.label7}>Запуск самой дегенеративного лаунчпада на TON</div>
        }

      </div>
  );
};

export default Airdrop;