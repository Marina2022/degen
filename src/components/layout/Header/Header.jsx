import s from './Header.module.scss';
import logo from '@/assets/img/header/headerLogo.png'
import twitterIcon from '@/assets/img/header/socialIcons/Twitter.svg'
import telegramIcon from '@/assets/img/header/socialIcons/Telegram.svg'
import LangSwitch from "@/components/ui/LangSwitch/LangSwitch.jsx";

const Header = ({lang, setLang}) => {
  return (
      <header className={s.header}>
        <div className={s.logo}>
          <img src={logo} alt="logo"/>
          <span>$DEGEN</span>
        </div>
        <div className={s.rightHeaderMenu}>
          <a className={`${s.socialLink} ${s.twitterLink} `} href="https://x.com/TonDegeneration" target="_blank">
          </a>
          <a className={`${s.socialLink} ${s.telegramLink} `} href="https://t.me/TonDegeneration" target="_blank">
          </a>


          <div className={s.switchWrapper}>
            <LangSwitch lang={lang} setLang={setLang}/>
          </div>
        </div>
      </header>
  );
};

export default Header;