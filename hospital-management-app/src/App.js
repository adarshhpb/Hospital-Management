import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddSubscribersPage from './component/AddSubscribersPage';
import SearchSubscribersPage from './component/SearchSubscribersPage';
import Login from './component/Login';
import View from './component/View';
import Appointments from './component/Appointments';
import Mainlog from './component/Mainlog';
import DoctorLogin from './component/DoctorLogin';
import AddDoctorPage from './component/AddDoctorPage';





function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/doctorLogin' element={<DoctorLogin />} />
        <Route path='/sub' element={<AddSubscribersPage />} />
        <Route path='/view' element={<View />} />
        <Route path='/ap' element={<Appointments />} />
        <Route path='/search' element={<SearchSubscribersPage />} />
        <Route path='/doc' element={<AddDoctorPage />} />
        <Route path='/' element={<Mainlog />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
