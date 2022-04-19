import "./App.css";
import GetCard from "./components/GetCard";
import axios from "axios";

function App() {
  const handleInput = (id) => {
    axios.get(`http://localhost:8080/get/${id}`).then((res) => {
      console.log(res);
      //setData(res.data);
    });
  };

  return (
    <div className="App">
      <GetCard handleInput={handleInput} />
    </div>
  );
}

export default App;
