import "./App.css";
import GetCard from "./components/GetCard";
import { BrowserRouter as Router } from "react-router-dom";
import { GathererProvider } from "./context/GathererContext";
import ShowCard from "./components/ShowCard";
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
        <div className="container">
          <GetCard />
          <ShowCard />
        </div>
      </Router>
    </GathererProvider>
  );
}

export default App;
