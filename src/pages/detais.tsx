// Detalhes.tsx
import { useLocation, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import type { Card } from "../types/cards";

interface DetalhesEsporte {
  dias: string;
  horario: string;
  contato: string;
  faixa: string;
}

const detalhesEsportes: Record<number, DetalhesEsporte> = {
  1: { dias: "Segunda e Quarta", horario: "18h - 20h", contato: "(11) 99999-9999", faixa: "10 a 16 anos" },
  2: { dias: "Terça e Quinta", horario: "19h - 21h", contato: "(11) 98888-8888", faixa: "12 a 18 anos" },
  3: { dias: "Sábado", horario: "09h - 11h", contato: "(11) 97777-7777", faixa: "6 a 12 anos" },
  4: { dias: "Segunda e Sexta", horario: "17h - 19h", contato: "(11) 96666-6666", faixa: "14 a 20 anos" },
  5: { dias: "Todos os dias", horario: "06h - 08h", contato: "(11) 95555-5555", faixa: "Livre" },
};

const Detalhes = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const esporte = location.state as Card; // tipando o que vem da Home
  const info = detalhesEsportes[Number(id)];

  if (!esporte || !info) {
    return <h2>Esporte não encontrado</h2>;
  }

  return (
    <div className="fundo">
    <div className="detalhes-page">
      <NavBar />

      <div className="detalhes-container">
        <h1>{esporte.title}</h1>
        <img src={esporte.img} alt={esporte.title} className="detalhes-image" />

        <div className="detalhes-info">
          <p><strong>Dias:</strong> {info.dias}</p>
          <p><strong>Horário:</strong> {info.horario}</p>
          <p><strong>Contato:</strong> {info.contato}</p>
          <p><strong>Faixa Etária:</strong> {info.faixa}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Detalhes;
