import s from './Vision.module.scss';

const Vision = ({lang}) => {
  return (
      <div className={lang === 'en' ?  s.visionBlock : s.visionBlockRu}>

        <div className={s.textBlock}>
          {
              lang == 'en' && <p className={s.firstPar}>
                As true $DEGENs, we deeply value our community. Your support is crucial to our success, and we are committed
                to maintaining a transparent and inclusive environment for everyone.
              </p>
          }
          {
              lang == 'ru' && <p className={s.firstParRu}>
                Как истинные $DEGENы, мы глубоко ценим наше сообщество. Ваша поддержка имеет решающее значение для нашего
                успеха, и мы стремимся поддерживать прозрачную и инклюзивную среду для всех.
              </p>
          }

          {
              lang == 'en' && <p className={s.nextPar}>
                We actively listen to your feedback and adapt our strategies to meet your needs. Our team is dedicated to making $DEGEN a trusted and secure place for all our users.
              </p>
          }
          {
              lang == 'ru' && <p className={s.nextParRu}>
                Мы активно прислушиваемся к вашим отзывам и адаптируем наши стратегии в соответствии с вашими потребностями. Наша команда стремится сделать $DEGEN надежным и безопасным местом для всех участников нашего комьюнити.
              </p>
          }

          {
              lang == 'en' && <p className={s.nextPar}>
                We are excited to announce our plans to develop a diverse ecosystem of products centered around this meme. Our goal is to become the leading meme community on the TON network.
              </p>
          }
          {
              lang == 'ru' && <p className={s.nextParRu}>
                Мы рады объявить о наших планах по развитию разнообразной экосистемы продуктов, сосредоточенных вокруг этого мема. Наша цель - стать ведущим сообществом мемов в сети TON.
              </p>
          }


          {
              lang == 'en' && <p className={s.lastPar}>
                Thank you for your ongoing support. We are proud to have you with us and look forward to achieving great things together.
              </p>
          }
          {
              lang == 'ru' && <p className={s.lastParRu}>
                Благодарим вас за постоянную поддержку. Мы гордимся тем, что вы с нами, и верим, что вместе мы добьемся больших успехов.
              </p>
          }

        </div>

      </div>
  );
};

export default Vision;