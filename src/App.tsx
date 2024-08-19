import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Albums from './pages/Albums/Albums';
import Album from './pages/Album/Album';
import About from './pages/About/About';
import AlbumsProvider from './context/AlbumsProvider';

function App() {
  return (
    <div className={styles.wrapper}>
      <AlbumsProvider>
        <Router basename='homework38'>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/albums' element={<Albums></Albums>}></Route>
            <Route path='/albums/:id' element={<Album></Album>}></Route>
            <Route path='/about' element={<About></About>}></Route>
          </Routes>
        </Router>
      </AlbumsProvider>
    </div>
  )
}

export default App;
