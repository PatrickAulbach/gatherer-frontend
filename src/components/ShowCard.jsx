import { useContext } from "react";
import GathererContext from "../context/GathererContext";

function ShowCard() {
  const { card } = useContext(GathererContext);
  return (
    <div key={card.id}>
      <div>{card.value.data.Card.name}</div>
      <img src={card.value.data.Card.imageUrl} alt="MTG" />
    </div>
  );
}

export default ShowCard;
