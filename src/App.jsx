// Fonts
import './fonts/ClashGrotesk-Bold.ttf';
import './fonts/ClashGrotesk-Extralight.ttf';
import './fonts/ClashGrotesk-Light.ttf';
import './fonts/ClashGrotesk-Medium.ttf';
import './fonts/ClashGrotesk-Regular.ttf';
import './fonts/ClashGrotesk-Semibold.ttf';
import './fonts/ClashGrotesk-Variable.ttf';

// Components
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';

import './App.css'


function App() {
  

  return (
    <>
      <Navbar />
      <Home />
      {/* <About /> */}
      <Footer />
    </>
  )
}

export default App
