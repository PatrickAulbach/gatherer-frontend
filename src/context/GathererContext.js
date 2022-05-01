import { createContext, useState } from "react";

const GathererContext = createContext();

export const GathererProvider = ({ children }) => {
  const [card, setCard] = useState({
    id: null,
    value: {
      timeStamp: "",
      statusCode: null,
      status: "",
      message: "",
      data: {
        Card: {
          id: null,
          name: "",
          manaCost: "",
          text: "",
          multiverseId: null,
          imageUrl: "",
        },
      },
    },
  });

  const fetchCard = async (id) => {
    const response = await fetch(`cards/${id}`);
    const data = await response.json();
    console.log(data);
    setCard(data);
  };

  return (
    <GathererContext.Provider
      value={{
        card,
        fetchCard,
      }}
    >
      {children}
    </GathererContext.Provider>
  );
};

export default GathererContext;
