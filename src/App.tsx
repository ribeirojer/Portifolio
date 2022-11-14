import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import History from './components/History'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {
    
    const [theme, setTheme] = useState({
      mainBg: '#ffffff',
      textHomeBg: '#ffffffe2',
      mainTextColor: '#2F2504',
      homefoto: '#75de04',
      iconsHover: '#F2A359',
      secondaryBg: '#7E846B',
      dark: false,
    });

    function chageTheme() {
      if(theme.dark){
        setTheme({
          mainBg: '#ffffff',
          textHomeBg: '#ffffffe0',
          mainTextColor: '#2F2504',
          homefoto: '#75de04',
          iconsHover: '#F2A359',
          secondaryBg: '#7E846B',
          dark: false,
        })
      } else {
        setTheme({
          mainBg: '#111722',
          textHomeBg: '#111722e0',
          mainTextColor: '#F2A359',
          homefoto: '#75de04',
          iconsHover: '#ffffff',
          secondaryBg: '#2F2504',
          dark: true,
        })
      }
    }
    
    return (
      <div className="App">
        <Header theme={theme} change={chageTheme}/>
        <Home theme={theme} />
        <History theme={theme} />
        <Projects theme={theme} />
        <Footer theme={theme} />
      </div>
    )
}

export default App
