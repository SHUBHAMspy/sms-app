import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/common/navbar/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <PrivateRoute>
            <Home/>
          </PrivateRoute>
        } />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>

      </Routes>
      
      
    </div>
  );
}

export default App;
