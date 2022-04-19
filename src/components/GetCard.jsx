import { useState } from "react";

function GetCard({ handleInput }) {
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleInput(id);
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
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default GetCard;
