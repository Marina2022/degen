import Hero from "@/components/features/Hero/Hero.jsx";
import Header from "@/components/layout/Header/Header.jsx";
import {useState} from "react";
import Vision from "@/components/features/Vision/Vision.jsx";
import Airdrop from "@/components/features/Airdrop/Airdrop.jsx";
import Degenomics from "@/components/features/Degenomics/Degenomics.jsx";
import Footer from "@/components/layout/Footer/Footer.jsx";
const MainPage = () => {
  
  const [lang, setLang] = useState('en')
  
  return (
      <div>
        <Header lang={lang} setLang={setLang} />
        <Hero lang={lang}/>
        <Vision lang={lang} />
        <Airdrop lang={lang} />
        <Degenomics lang={lang} />
        <Footer lang={lang} />
      </div>
  );
};

export default MainPage;