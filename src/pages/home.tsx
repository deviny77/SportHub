// Home.tsx
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/Home.css";
import type { Card } from "../types/cards";


  const cards: Card[] = [
    { id: 1, title: "Futebol", img: "/src/assets/futebol.jpg" },
    { id: 2, title: "Basquete", img: "/src/assets/basquete.jpg" },
    { id: 3, title: "Natação", img: "/src/assets/natacao.jpg" },
    { id: 4, title: "Tênis", img: "/src/assets/tenis.jpg" },
    { id: 5, title: "Corrida", img: "/src/assets/corrida.jpg" },
  ];

  const Home = () => {
    const navigate = useNavigate();

    const handleCardClick = (card: Card) => {
      navigate(`/detalhes/${card.id}`, { state: card });
    };

    return (
      <div className="fundo">
      <NavBar />
      <div className="home-page">
        <div className="title">
          <h1 className="home-title">BEM-VINDO A SPORT HUB!</h1>
        </div>

        <div className="cards-container">
          {cards.map((card: Card) => (
            <div
              className="card"
              key={card.id}
              onClick={() => handleCardClick(card)}
            >
              <img src={card.img} alt={card.title} className="card-image" />
              <h2 className="card-title">{card.title}</h2>
            </div>
          ))}
        </div>
      </div>
        <Footer />
      </div>
    );
  };

export default Home;
