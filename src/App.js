
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './Pages/AddTask';
import DeleteTask from './Pages/DeleteTask';
import Header from './Pages/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/addtask' element={<AddTask/>} />
        <Route path='/deletetask' element={<DeleteTask/>} />

      </Routes>
    </div>
  );
}

export default App;
