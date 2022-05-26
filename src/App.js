import "./App.css";
import Main from "./Main";
import NavBar from "./NavBar";
import Games from "./Games";
import Mission from "./Mission";
import Team from "./Team";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Games />
      <Mission />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
