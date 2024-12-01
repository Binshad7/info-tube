import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './page/user/HomePage'; 
import { SidebarContextProvider } from './context/slidebarContext';

function App() {
  return (
    <BrowserRouter>
      <SidebarContextProvider>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </SidebarContextProvider>
    </BrowserRouter>
  );
}

export default App;
