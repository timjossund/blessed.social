import './App.css';
import { Routes, Route } from "react-router-dom";
import { MainHeader } from './components/MainHeader';
import { MainHome } from './pages/MainHome';
import { MainProfile } from './pages/MainProfile'
// import { Login } from './pages/Login'


const App: React.FC = () => {
  return (
    <div className="App">
      <MainHeader />
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="profile" element={<MainProfile />} />
      </Routes>
    </div>
  );
}

export default App;
