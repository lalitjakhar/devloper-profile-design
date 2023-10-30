import "./App.css";
import Blog from "./Components/blog/Blog";
import Details from "./Components/details/Details";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Navbar from "./Components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Blog />
      <Details />
      <Footer />
    </>
  );
}

export default App;
