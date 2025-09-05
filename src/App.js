import logo from './logo.svg';
import './App.css';
import LandingPage from './/components/homepage';
import Admin from './/components/admin';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom';
function App() {
  return (
    <>
    <div className='main-container'> 
      <Router>
      <Routes>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </Router>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage
            logo={logo}
            keyboardimage='./yamahakeyboard.jpeg'
            keyboard='keyboard'
            guitar_image='./electric_guitar.png'
            electric_guitar='electric guitar'
            speaker_img='./speaker.png'
            Speakers='Speakers'
            amp_img='./amp.png'
            Amplifiers='Amplifiers'
            elec_drumimg='./elec_drum.png'
            Electronic_drums='Electronic drums'
            djmix_img='./dj_mix.png'
            Dj_mix='Dj-Mix'
            mic_img='./mic.png'
            Mic='Mic'
            />}/>
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
