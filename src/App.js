import './App.css';
import Adress from './Component/Profile/Adress';
import FullName from './Component/Profile/FullName';
import Navb from './Component/Profile/Navb';
import ProfilePhoto from './Component/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <Navb />
      <ProfilePhoto />
      <FullName />
      <Adress />
    </div>
  );
}

export default App;
