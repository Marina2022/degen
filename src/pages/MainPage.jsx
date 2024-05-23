import Hero from "@/components/features/Hero/Hero.jsx";
import Header from "@/components/layout/Header/Header.jsx";
import {useState} from "react";
import Modal from "@/components/ui/Modal/Modal.jsx";
const MainPage = () => {
  
  const [lang, setLang] = useState('en')
  
  return (
      <div>
        <Header lang={lang} setLang={setLang} />
        <Hero lang={lang} />
      </div>
  );
};

export default MainPage;