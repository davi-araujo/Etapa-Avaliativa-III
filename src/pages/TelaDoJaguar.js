import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Link } from 'react-router-dom';
import Jaguar from './jaguar.jpg';
import { InputText } from 'primereact/inputtext';



export const TelaDoJaguar = () => {
  return(
    <div className="App">
      <header className="App-header">
        <h1>
          BOM CHEIRO PERFUMES
        </h1>
        <div className='divisoria'>
          <img src={Jaguar} class="jaguar"/>
          <h2>
            Jaguar Jaguar Stance Eau De Toilette 60ml
          </h2>
          <p>
            Um perfume de declaração para um homem que estabelece suas próprias<br/>
            regras. Inspirado. Inspirador. Individual, mas hiperconectado ao mundo,<br/>
            real e virtual. Um espírito livre que busca autenticidade, você é o<br/>
            autor de sua própria existência. Você decide quem você quer ser. E<br/>
            você quer que sua fragrância o envolva em todos os níveis. Como uma<br/>
            declaração autoconfiante do seu estilo. Como uma experiência sensorial<br/>
            e criativa. Como a memória duradoura dos muitos momentos emocionantes<br/>
            de uma vida vibrante. Seja Jaguar. Dê forma à sua realidade. Tome uma posição.
          </p>
          <h2>
            R$437,90
          </h2>
          <span className="p-float-label">
            <InputText id="in" />
            <label htmlFor="in">CEP</label>
          </span>
          <br/>
          <span className="p-float-label">
            <InputText id="in" />
            <label htmlFor="in">N° do Cartão</label>
          </span>
          <br/>
          <span className="p-float-label">
            <InputText id="in" />
            <label htmlFor="in">Validade</label>
          </span>
          <br/>
          <span className="p-float-label">
            <InputText id="in" />
            <label htmlFor="in">CVV</label>
          </span>
          <br/>
          <span className="p-float-label">
            <InputText id="in" />
            <label htmlFor="in">Email</label>
          </span>
          <br/>
          <Link className="divisoria1" to='/fim'> Finalizar Compra </Link>
        </div>
        <br/>
        <Link className="divisoria1" to='/'> Voltar </Link>
      </header>
    </div>
  );
};