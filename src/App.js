import RouteRole from "./RouteRoles";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import "./css/global.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <RouteRole />
    </BrowserRouter>
  );
}

export default App;
