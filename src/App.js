import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/layout.component';
import Home from './components/Home/home.component';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
