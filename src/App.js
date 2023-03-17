import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/layout.component';
import Home from './components/Home/home.component';
import About from './components/About/about.component';
import Contact from './components/Contact/contact.componente';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
