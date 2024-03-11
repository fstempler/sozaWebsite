// Fonts
import './fonts/ClashGrotesk-Bold.ttf';
import './fonts/ClashGrotesk-Extralight.ttf';
import './fonts/ClashGrotesk-Light.ttf';
import './fonts/ClashGrotesk-Medium.ttf';
import './fonts/ClashGrotesk-Regular.ttf';
import './fonts/ClashGrotesk-Semibold.ttf';
import './fonts/ClashGrotesk-Variable.ttf';
//Rout
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// Components
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

import './App.css'

const Root = () => {
  return(
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route  path="/" element={<Root />}>
      <Route index element={<Home />}/>
      <Route path="about" element={<About />} />
      <Route  path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  
  
  return (
    <>
      <div>
        <RouterProvider router={routes} />
      </div>
    </>
  )
}

export default App
