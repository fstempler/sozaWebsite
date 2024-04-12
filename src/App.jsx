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
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact';
import Project from './Components/Project/Project';
import LoadingPage from './Components/LoadingPage/LoadingPage';
//Context
import { ProjectProvider } from './Components/State/ProjectContext';
//Hook
import { useState, useEffect } from 'react';
//Style
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
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="projects" element={<Projects />} />
      <Route path="project/:id" element={<Project />} /> 
    </Route>
  )
);


function App() {
  
  const [isLoading, setIsLoading] = useState(true);  

  useEffect(() => {
    // Simulate asynchronous task
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate 2 seconds of loading
  }, []);

  return (
    <>
      {isLoading ? (
        <div className='loading__Container'>
          <LoadingPage />
        </div>
        
      ) : (
        <ProjectProvider>
          <div>
            <RouterProvider router={routes} />
          </div>
        </ProjectProvider>
      )}
      

    </>
  );
}
export default App
