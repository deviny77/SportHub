// DetalhesGerais.tsx
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/detaisAll.css"
import type { Produto } from "../types/Products";

// teste produto
// const [produtos, setProdutos] = useState<Produto[]>([]);

//  useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then(res => res.json())
//       .then(data => setProdutos(data))
//       .catch(err => console.error("Erro ao buscar produtos:", err));
//   }, []);


interface Escola {
  nome: string;
  dias: string;
  horario: string;
  contato: string;
  faixa: string;
}

const escolasPorEsporte: Record<number, Escola[]> = {
  1: [
    { nome: "Escola de Futebol Estrela", dias: "Segunda e Quarta", horario: "18h - 20h", contato: "(11) 99999-1111", faixa: "10 a 16 anos" },
    { nome: "Centro Esportivo Bola de Ouro", dias: "Terça e Quinta", horario: "19h - 21h", contato: "(11) 99999-2222", faixa: "12 a 18 anos" },
  ],
  2: [
    { nome: "Basquete Total", dias: "Terça e Quinta", horario: "19h - 21h", contato: "(11) 98888-3333", faixa: "12 a 18 anos" },
  ],
  3: [
    { nome: "Natação Kids", dias: "Segunda e Sexta", horario: "17h - 19h", contato: "(11) 97777-5555", faixa: "6 a 12 anos" },
  ],
  4: [
    { nome: "Tênis Master", dias: "Segunda e Quarta", horario: "16h - 18h", contato: "(11) 96666-7777", faixa: "10 a 18 anos" },
  ],
  5: [
    { nome: "Grupo Runners", dias: "Todos os dias", horario: "06h - 08h", contato: "(11) 95555-9999", faixa: "Livre" },
  ],
};

const nomesEsportes: Record<number, string> = {
  1: "Futebol",
  2: "Basquete",
  3: "Natação",
  4: "Tênis",
  5: "Corrida",
};

const DetalhesGerais = () => {
  const [filtro, setFiltro] = useState<number | "todos">("todos");

  // se filtro = "todos", mostra todos. Se for número, mostra só aquele esporte
  const esportesFiltrados =
    filtro === "todos" ? Object.keys(escolasPorEsporte).map(Number) : [filtro];

  return (
    <div className="fundo">
    <div className="detalhes-page">
      <NavBar /><br /><br />

      <div className="detalhes-container">
        <h1>Catálogo de Escolas</h1>

        {/* Dropdown de filtro */}
        <div className="filtro-container">
          <label>Filtrar por esporte: </label>
          <select
            value={filtro}
            onChange={(e) =>
              setFiltro(e.target.value === "todos" ? "todos" : Number(e.target.value))
            }
          >
            <option value="todos">Todos</option>
            {Object.entries(nomesEsportes).map(([id, nome]) => (
              <option key={id} value={id}>
                {nome}
              </option>
            ))}
          </select>
        </div>

        {/* Listagem */}
        {esportesFiltrados.map((id) => (
          <div key={id} className="esporte-bloco">
            <h2>{nomesEsportes[id]}</h2>
            <div className="escolas-list">
              {escolasPorEsporte[id].map((escola, index) => (
                <div key={index} className="escola-card">
                  <h3>{escola.nome}</h3>
                  <p><strong>Dias:</strong> {escola.dias}</p>
                  <p><strong>Horário:</strong> {escola.horario}</p>
                  <p><strong>Contato:</strong> {escola.contato}</p>
                  <p><strong>Faixa Etária:</strong> {escola.faixa}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default DetalhesGerais;
