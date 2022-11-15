import { createContext, useState } from 'react';
import Header from './components/header/Header'
import Homepage from './pages/homepage/Homepage';
import ReactSwitch from 'react-switch'
import './css-helper/prefix.scss'
import './pages/homepage/homepage.scss'

export const ThemeContext = createContext(null)

function App() {

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
    <div  id={theme}>
      <Header />
      <Homepage />
      <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
