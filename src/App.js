import "./App.css";
import GetCard from "./components/GetCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GathererProvider } from "./context/GathererContext";
import ShowCard from "./components/ShowCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CreateDeck from "./components/CreateDeck";
import Home from "./pages/Home";
//import axios from "axios";

function App() {
  /*
  const handleInput = (id) => {
    axios.get(`http://localhost:8080/get/${id}`).then((res) => {
      console.log(res);
      //setData(res.data);
    });
  };
  */

  return (
    <GathererProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<CreateDeck />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GathererProvider>
  );
}

export default App;
