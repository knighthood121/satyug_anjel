import {BrowserRouter as Main,Routes,Route} from 'react-router-dom'
import Home from "./components/Home";
import Chats from "./components/Chats";
import Log_in from "./components/Log_in";
import Profile from "./components/Profile";
import Offline_download from './components/Offline_download';

function App() {
  return (
    <>
     {/* <Home/> */}
     {/* <Profile/> */}
     {/* <Log_in/> */}
     {/* <Chats/> */}
     
     <Main>
      <Routes>
         <Route path='/home' element={<Home/>} /> 
         <Route path='/profile' element={<Profile/>} /> 
         <Route path='/' element={<Log_in/>} /> 
         <Route path='/chats' element={<Chats/>} /> 
         <Route path='/offline' element={<Offline_download/>} /> 
      </Routes>
     </Main>
     
    </>
  );
}

export default App;
