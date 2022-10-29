import Navbar from "./components/Navbar/Navbar"; //imports Navbar
import Login from "./components/Login";         //imports Login
import './App.css';                             //imports default css page

function App() {
  return (
    <div className="App">
      <Navbar />                              
      <Login />
    </div>
  );
}

export default App;
