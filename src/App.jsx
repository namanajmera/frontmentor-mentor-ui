// import { Route, Routes } from 'react-router-dom';
import './App.css';
import QRCode from './components/QRCode/QRCode';
// import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <QRCode />
      {/* <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/qr-code" element={<QRCode />} />
      </Routes> */}
    </div>
  );
}

export default App;
