import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Login from './components/Login.jsx';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'

export default function App() {
  return (
    <>
      <BrowserRouter>
      <ul>
        <li><Link to ='/login'>Login</Link></li>
      </ul>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/about' element={<Main />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      {/* <Header /> */}
      {/* <Main /> */}
    </>
  )
}