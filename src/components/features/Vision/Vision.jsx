import s from './Vision.module.scss';

const Vision = ({lang}) => {
  return (
      <div className={lang === 'en' ? s.visionBlock : s.visionBlockRu}>

        <div className={lang === 'en' ? s.textBlock : s.textBlockRu}>
          {
              lang == 'en' && <p className={s.firstPar}>
                $DEGEN is none less but a family. One stands for the other and this is how we progress. If we keep working
                like it's our last day on this planet it's only a matter of time before we are a top TON project.
              </p>
          }
          {
              lang == 'ru' && <p className={s.firstParRu}>
                $DEGEN — это не что иное, как семья. Один поддерживает другого, и именно таким образом мы прогрессируем.
                Если мы продолжим работать так, как будто это наш последний день на этой планете, то превращение $DEGEN в
                ведущий TON проект станет лишь вопросом времени.
              </p>
          }

          {
              lang == 'en' && <p className={s.nextPar}>
                Soon there will be an entire ecosystem with a large marketing program, but today we need to unite and build a real brotherhood in our ranks. Money is just a nice addition, that's how we see&nbsp;it.
              </p>
          }
          {
              lang == 'ru' && <p className={s.nextParRu}>
                Скоро здесь появится целая экосистема с большимИ планами на маркетинг, но уже сегодня нам нужно объединиться и построить в наших рядах настоящее братство. Деньги — это просто приятное дополнение, вот как мы это видим.
              </p>
          }

          {
              lang == 'en' && <p className={s.nextPar}>
                I know that you always got our back, you are a real $DEGEN. We truly appreciate it, brother.
              </p>
          }
          {
              lang == 'ru' && <p className={s.nextParRu}>
                Мы с первого дня знаем, что ты всегда нас поддерживаешь, ты настоящий Деген. Мы действительно ценим это, бро.
              </p>
          }                

          {
              lang == 'en' && <p  className={s.lastPar}>
                Now let’s spread our family ties to the moon and beyond to make all of the degens wealthy together. No more small talk, it’s time to go to work.
              </p>
          }
          {
              lang == 'ru' && <p className={s.lastParRu}>
                Теперь Давайте объединимся и отправимся к новым высотам, вплоть до Луны и дальше, чтобы все дегены стали богатыми вместе. Хватит разговоров, пора работать.
              </p>
          }
        </div>
      </div>
  );
};

export default Vision;