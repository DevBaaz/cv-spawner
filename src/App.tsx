import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import MoTPage from './pages/MoTPage';
import MoFPage from './pages/MoFPage';
import TcvPage from './pages/TcvPage';
import FcvPage from './pages/FcvPage';
import HomePage from './pages/HomePage';
import TcvEnginePage from'./pages/TcvEnginePage'
import FcvEnginePage from'./pages/FcvEnginePage'
import ErrorPage from './pages/ErrPage';


const App = () => {
    return (
        <>
        <ChakraProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path='/home' element={<HomePage />}/>
              <Route path='/about' element={<AboutPage />}/>
              <Route path='/faq' element={<FaqPage />} />
              <Route path='/mof' element={<MoFPage />} />
              <Route path='/mot' element={<MoTPage />} />
              <Route path='/tcv' element={<TcvPage />} />
              <Route path='/fcv' element={<FcvPage />} />
              <Route path='/tcvEngine' element={<TcvEnginePage />} />
              <Route path='/fcvEngine' element={<FcvEnginePage />} />
              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </BrowserRouter>
          </ChakraProvider>
        </>
    )
}

export default App;