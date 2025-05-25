import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Nav } from './components/nav';
import './App.css';
import { Main } from './components/Main';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';

export const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Nav />
      <Main />
      <Menu />
      <Footer />
    </>
  )
}