
import { useState } from 'react'
import NavBar from '../components/NavBar'; 
import "../styles/cadastro.css";

function RegistroForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [endereco, setEndereco] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [modalidade, setModalidade] = useState('');
  const [faixaEtaria, setFaixaEtaria] = useState('');
  const [contato, setContato] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const dadosFormulario = { nome, email, senha, endereco, empresa, modalidade, faixaEtaria, contato };
    console.log('Dados enviados:', dadosFormulario);
  };

  return (
  <div className='fundo'>
    <div className="card-page"> 
      <NavBar /> 
      <div className="register-container">
        
        {/* Lado esquerdo - formulário */}
        <div className="form-side">
          <h2>Cadastro de Escolinhas</h2>
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" onChange={(e) => setNome(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" onChange={(e) => setSenha(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="endereco">Endereço</label>
              <input type="text" id="endereco" onChange={(e) => setEndereco(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="empresa">Empresa</label>
              <input type="text" id="empresa" onChange={(e) => setEmpresa(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="modalidade">Modalidade</label>
              <input type="text" id="modalidade" onChange={(e) => setModalidade(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="faixaEtaria">Faixa Etária</label>
              <input type="text" id="faixaEtaria" onChange={(e) => setFaixaEtaria(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="contato">Contato</label>
              <input type="text" id="contato" onChange={(e) => setContato(e.target.value)} />
            </div>
          </div>
          <div className='send'>
            <button className="login-button" onClick={handleSubmit}>Login</button>
          </div>
        </div>

        {/* Lado direito - imagem */}
        <div className="image-side">
          <img src="src/assets/register.jpg" alt="register" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default RegistroForm;
