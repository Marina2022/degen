import s from './Footer.module.scss';
import telegramIcon from '@/assets/img/footer/telegramFooter.svg'
import twitterIcon from '@/assets/img/footer/twitterFooter.svg'

const Footer = ({lang}) => {
  return (
      <footer className={lang === 'en' ? s.footer : s.footerRu}>
        <div className={s.socials}>
          <a className={s.socialIcon} href="https://t.me/TonDegeneration" target="_blank">
            <img src={telegramIcon} alt="telegram"/>
          </a>
          <a className={s.socialIcon} href="https://x.com/TonDegeneration" target="_blank">
            <img src={twitterIcon} alt="twitter"/>
          </a>
        </div>

      </footer>
  );
};

export default Footer;