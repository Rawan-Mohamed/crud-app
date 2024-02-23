
import './App.css';
import UserList from './components/UserList/UserList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="wrapper">
      {/* <ToastContainer /> */}
      <UserList />

    </div>
  );
}

export default App;
