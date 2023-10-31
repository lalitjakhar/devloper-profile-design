import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Components/routes/Routing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </>
  );
}

export default App;
