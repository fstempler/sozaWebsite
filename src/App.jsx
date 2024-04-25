
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import AnimatedRoutes from './Components/AnimatedRoutes/AnimatedRoutes';
import LoadingPage from './Components/LoadingPage/LoadingPage';
import { ProjectProvider } from './Components/State/ProjectContext';
import { useState, useEffect } from 'react';
import './App.css';


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
          <Router>            
              <Navbar />              
              <AnimatedRoutes />
              <Footer />            
          </Router>
        </ProjectProvider>
      )}
    </>
  );
}

export default App;
