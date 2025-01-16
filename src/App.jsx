import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import {BrowserRouter, Router, Route} from 'react-router-dom'

export default function App() {
    return (
      <>
      <BrowserRouter>
      <Router>
        <Route path='/'element={<Header/>} />
        <Route path='/about' element={<Main/>}/>

      
      </Router>
      </BrowserRouter>
       <Header />
       <Main />
       </>
    )
}