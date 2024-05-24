import './App.scss'
import MainPage from "@/pages/MainPage.jsx";
import {useState} from "react";
import StartScreen from "@/components/features/StartScreen/StartScreen.jsx";
import Header from "@/components/layout/Header/Header.jsx";

function App() {
  const [lang, setLang] = useState('en')
  
  const [showStartScreen, setShowStartScreen] = useState(true)
  
  return (
    <>
      <Header lang={lang} setLang={setLang} />
      
      <StartScreen lang={lang} setShowStartScreen={setShowStartScreen}  showStartScreen={showStartScreen} />
      

      
      <MainPage lang={lang} showStartScreen={showStartScreen}  />
      
      
      
    </>
  )
}

export default App
