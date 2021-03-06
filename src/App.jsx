import "./App.css";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import {useStateValue} from "./StateProvider"

function App() {
  const [{ isOpen, user }, dispatch] = useStateValue();
  return (
    <div className="app">
      <Header />
      {!user ? (<Login/>):
      <div className={`app__central ${isOpen ? "displayed" : ""}`}>
        <Sidebar />
        <Main />
      </div>
      }
    </div>
  );
}

export default App;
