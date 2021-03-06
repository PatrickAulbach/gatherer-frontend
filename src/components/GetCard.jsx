import { useContext, useState } from "react";
import GathererContext from "../context/GathererContext";

function GetCard() {
  const [id, setId] = useState("");
  const { fetchCard } = useContext(GathererContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCard(parseInt(id));
  };

  const handleTextChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Enter id</h2>
        <div>
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="enter id"
            value={id}
            class="input input-bordered input-primary w-full max-w-xs"
          />
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default GetCard;
