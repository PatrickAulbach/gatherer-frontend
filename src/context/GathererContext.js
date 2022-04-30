import { createContext, useState } from "react";

const GathererContext = createContext();

export const GathererProvider = ({ children }) => {
  const [card, setCard] = useState([]);

  const fetchCard = async (id) => {
    const response = await fetch(`cards/${id}`);
    const data = await response.json();

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
