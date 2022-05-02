import GetCard from "../components/GetCard";
import ShowCard from "../components/ShowCard";
import "./Home.css";

function Home() {
  return (
    <div className="content-container">
      <div className="row">
        <div className="left-panel">
          <GetCard />
        </div>
        <div className="right-panel box">
          <ShowCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
