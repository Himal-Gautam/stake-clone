import { Box, Card, styled } from "@mui/material";
import { useEffect, useState } from "react";
import card1 from "../assets/more/currency-inr.svg";
import card2 from "../assets/more/currency-btc.svg";
import card3 from "../assets/more/currency-eth.svg";
import card4 from "../assets/more/currency-usdt.svg";

const StyledCard = styled(Card)(({ index, isAnimating }) => ({
  position: "absolute",
  width: "450px",
  height: "280px",
  borderRadius: "12px",
  transition: "all 1.5s ease",
  transform: `translateY(${index * -20}px) scale(${1 - index * 0.05})`,
  zIndex: 4 - index,
  opacity: isAnimating ? 0 : 1,
  backgroundSize: "cover",
  backgroundPosition: "center",
  "&.sliding-down": {
    transform: "translateY(100%)",
    opacity: 0,
    transition: "all 3s ease",
  },
  "&.sliding-up": {
    transform: "translateY(-100%)",
    opacity: 0,
    transition: "all 3s ease",
  },
}));

const CardStack = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      image: card1, // Use imported image
    },
    {
      id: 2,
      image: card2,
    },
    {
      id: 3,
      image: card3,
    },
    {
      id: 4,
      image: card4,
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newCards = [...prevCards];
        const firstCard = newCards.shift();
        newCards.push(firstCard);
        return newCards;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        perspective: "1000px",
      }}
    >
      {cards.map((card, index) => (
        <StyledCard
          key={card.id}
          index={index}
          sx={{
            backgroundImage: `url(${card.image})`,
            boxShadow: 3,
          }}
        />
      ))}
    </Box>
  );
};

export default CardStack;
